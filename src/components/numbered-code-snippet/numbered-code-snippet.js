import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';
import classnames from 'classnames';
import CopyButton from '@mapbox/mr-ui/copy-button';
import { HideLines, ShowLines } from './show-hide-lines';
import onCopy from '../code-snippet/on-copy';

function getWindow() {
  if (typeof window === undefined) {
    throw new Error('window not available');
  }
  return window;
}

/* Theme cache, used to prevent the creation of multiple <style> elements with the same content. */
const injectedThemes = [];

export default class NumberedCodeSnippet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  componentDidMount() {
    /**
     * After the component mounts, adjust the position of the highlighted lines,
     * and add an event listener with a debounced version of the same function
     * whenever the window is resized.
     */
    this.adjustPositions();
    getWindow().addEventListener('resize', this.adjustPositionsResize, {
      passive: true
    });

    /**
     * Set the syntax highlighting theme.
     */
    this.setTheme();

    /**
     * If a maxHeight is set AND the non-highlighted lines are not collapsed,
     * scroll to the first live chunk.
     */
    if (this.props.maxHeight && !this.props.collapseLines) {
      let offsetFromTop = null;
      if (this.firstLiveElement && this.firstLiveElement.offsetTop !== null) {
        /* Get the offset from top of parent element. */
        offsetFromTop = this.firstLiveElement.offsetTop;
        if (this.firstLiveElement.offsetParent) {
          this.firstLiveElement.offsetParent.scrollTop = offsetFromTop - 18;
        }
      }
    }
  }

  componentDidUpdate(prevState, prevProps) {
    /* If state or props changed, use the debounceless version. */
    if (prevState !== this.state || prevProps !== this.props) {
      this.adjustPositions();
      /* If the state and props objects didn't change, use the debounce version. */
    } else {
      this.adjustPositionsResize();
    }
  }

  componentWillUnmount() {
    getWindow().removeEventListener('resize', this.adjustPositionsResize);
  }

  setTheme = () => {
    const theme = this.props.highlightThemeCss;
    /* Do not load themes that have already been injected. */
    if (injectedThemes.indexOf(theme) !== -1) return;
    injectedThemes.push(theme);
    const doc = getWindow().document;
    this.styleTag = doc.createElement('style');
    this.styleTag.innerHTML = `${theme}`;
    doc.head.appendChild(this.styleTag);
  };

  adjustPositions = () => {
    const { containerElement } = this;

    if (!containerElement) return;

    const chunkOverlays = containerElement.querySelectorAll(
      '[data-chunk-overlay]'
    );

    for (let i = 0, l = chunkOverlays.length; i < l; i++) {
      const overlayElement = chunkOverlays[i];
      const chunkId = overlayElement.getAttribute('data-chunk-overlay');
      const codeElement = containerElement.querySelector(
        `[data-chunk-code="${chunkId}"]`
      );
      if (!codeElement)
        throw new Error(
          `No code element found with [data-chunk-code="${chunkId}"]`
        );
      const copyElement = containerElement.querySelector(
        `[data-chunk-copy="${chunkId}"]`
      );
      if (!copyElement)
        throw new Error(
          `No copy element found with [data-chunk-copy="${chunkId}"]`
        );

      overlayElement.style.top = `${codeElement.offsetTop}px`;
      copyElement.style.top = `${codeElement.offsetTop + 2}px`;
      overlayElement.style.height = `${codeElement.clientHeight}px`;

      /**
       * Since these elements move into position a split-second after the component
       * mounts and renders, we'll fade them in after they're positioned
       */
      overlayElement.style.opacity = '1';
      copyElement.style.opacity = '1';
    }
  };

  /**
   * Uses debounce to prevent adjusting position to happen too many times when using
   * `adjustPositions` with events that are fired continuously (e.g. window is resized).
   */
  adjustPositionsResize = debounce(() => {
    this.adjustPositions();
  }, 300);

  onContainerElement = (element) => {
    this.containerElement = element;
  };

  onFirstLive = (element) => {
    this.firstLiveElement = element;
  };

  toggleLines = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { props } = this;

    const rawCodeLines = props.code.trim().split('\n');

    /* If highlightedCode is not provided, show raw code. */
    const displayCode = props.highlightedCode || props.code;
    const splitDisplayCode = displayCode.trim().split('\n');

    /**
     * Use copyRanges to split the highlighted code into chunks,
     * some of which are "live", i.e. copyable, some which are not.
     * If there are no copyRanges, the whole snippet is copyable and there
     * is no fancy live-chunk styling.
     */
    const mutableCopyRanges =
      props.copyRanges !== undefined && props.copyRanges.slice();
    let currentLiveRange = mutableCopyRanges && mutableCopyRanges.shift();
    let currentChunk = [];
    const allChunks = [];
    const endCurrentChunk = ({ live }) => {
      allChunks.push({
        live,
        highlightedLines: currentChunk.map((line) => line.highlighted),
        raw: currentChunk.reduce(
          (result, line) => (result += line.raw + '\n'),
          ''
        ),
        element: undefined
      });
      currentChunk = [];
    };
    /** Iterate through every line of code. */
    for (let i = 0, l = splitDisplayCode.length; i < l; i++) {
      /**
       * Set the chunk equal to the contents of the line. This may include
       * empty strings where empty lines are added to improve readability.
       */
      const chunk = splitDisplayCode[i];

      /** Set the line number. */
      const lineNumber = i + 1;

      /**
       * If there is a defined copy range that includes either the current
       * lineNumber or an upcoming lineNumber, currentLiveRange will be equal
       * to that copy range (an array of two numbers).
       */
      if (currentLiveRange && lineNumber === currentLiveRange[0]) {
        /**
         * If there is a currentLiveRange and the lineNumber is equal to
         * the beginning of the currentLiveRange, use endCurrentChunk to:
         *   - stop adding lines to the current chunk
         *   - add that chunk to the allChunks array as a non-live chunk
         *   - start a fresh currentChunk array
         */
        endCurrentChunk({ live: false });
      } else if (currentLiveRange && lineNumber > currentLiveRange[1]) {
        /**
         * If there is a currentLiveRange and the lineNumber is more than the
         * the last line number of the currentLiveRange (the second number in
         * the copy range array), use endCurrentChunk to:
         *   - stop adding lines to the current chunk
         *   - add that complete chunk to the allChunks array as a live chunk
         *   - start a fresh currentChunk array
         */
        endCurrentChunk({ live: true });
        /**
         * Then look for the next copy range. If none exists, currentLiveRange
         * will be undefined.
         */
        currentLiveRange = mutableCopyRanges && mutableCopyRanges.shift();
      }
      /**
       * Push the contents of the line you're currently iterating over
       * to the currentChunk.
       */
      currentChunk.push({
        highlighted: chunk,
        raw: rawCodeLines[i]
      });
    }

    /**
     * After iterating through all lines, if the currentChunk still contains
     * contents that means the chunk has not yet been added to the allChunks
     * array (which is done with endCurrentChunk).
     */
    if (currentChunk.length) {
      /**
       * If a currentLiveRange also still exists after iterating through
       * all lines, that means the live chunk continues to the last line of
       * the code snippet.
       */
      if (currentLiveRange) {
        /**
         * If a currentLiveRange exists, end the current chunk and add it to
         * the allChunks array as a live chunk.
         */
        endCurrentChunk({ live: true });
      } else {
        /**
         * If a currentLiveRange does not exist, end the current chunk and add
         * it to the allChunks array as a non-live chunk.
         */
        endCurrentChunk({ live: false });
      }
    }

    const codeElements = [];
    const highlightElements = [];
    const copyElements = [];
    let previousCount = 0;
    allChunks.forEach((codeChunk, i) => {
      const chunkId = `chunk-${i}`;
      const lineEls = codeChunk.highlightedLines.map((line, i) => {
        // Left padding is determined below
        let lineClasses = 'pr12';
        if (codeChunk.live) lineClasses += ' py3 bg-white';
        if (!codeChunk.live && props.copyRanges !== undefined) {
          if (props.collapseLines) {
            lineClasses += this.state.expanded ? '' : ' h0 overflow-hidden';
          }
        }

        /**
         * Remove leading spaces, which are replaced with padding to avoid
         * weird behaviors that occur when there are long unbroken strings:
         * a line break might be introduced between the leading spaces and the
         * long word, creating an empty line that nobody wanted.
         */

        const indentingSpacesMatch = line.match(/^[ ]*/);
        const indentingSpaces = indentingSpacesMatch
          ? indentingSpacesMatch[0]
          : '';
        const indentingSpacesCount = indentingSpaces.length;
        const paddingLeft = indentingSpacesCount * props.characterWidth + 12;
        const displayLine = line.replace(/^[ ]*/, '');

        const lineNumberClasses = classnames(
          'absolute fl color-gray align-r pr6',
          {
            'w30 py3': codeChunk.live,
            w36: !codeChunk.live
          }
        );
        let blueLineWidth = 0;
        if (codeChunk.live) blueLineWidth = 6;

        /* eslint-disable react/no-danger */
        return (
          <div key={i} className={lineClasses} style={{ paddingLeft }}>
            <div
              className={lineNumberClasses}
              unselectable="on"
              style={{
                marginLeft: -1 * (paddingLeft - blueLineWidth),
                marginTop: -1 * (blueLineWidth / 2)
              }}
              data-content={previousCount + i + 1}
            />
            <div
              /**
               * We must use dangerouslySetInnerHTML because we've already
               * highlighted the code with lowlight, so we have an HTML string
               */
              dangerouslySetInnerHTML={{ __html: displayLine || ' ' }}
              /* Super fancy hanging indent. */
              style={{
                textIndent: -2 * props.characterWidth,
                marginLeft: 6 * props.characterWidth
              }}
            />
          </div>
        );
        /* eslint-enable react/no-danger */
      });

      /* For the first live chunk, add a ref. */
      if (codeChunk.live && i < 2) {
        codeElements.push(
          <div
            key={i}
            /**
             * z-index this line above the highlighted background element for
             * live chunks
             */
            ref={this.onFirstLive}
            className="relative z2"
            data-chunk-code={chunkId}
          >
            {lineEls}
          </div>
        );
      } else if (codeChunk.live) {
        codeElements.push(
          <div key={i} className="relative z2" data-chunk-code={chunkId}>
            {lineEls}
          </div>
        );
      } else if (!codeChunk.live && lineEls.length) {
        const expandCollapseButtons = this.state.expanded ? (
          <HideLines onClick={this.toggleLines}>{lineEls}</HideLines>
        ) : (
          <ShowLines onClick={this.toggleLines} />
        );
        codeElements.push(
          <div
            key={i}
            /**
             * z-index this line above the highlighted background element for
             * live chunks
             */
            className={`relative z2 ${
              props.collapseLines && (this.state.expanded ? '' : 'h30')
            }`}
            data-chunk-code={chunkId}
          >
            {props.collapseLines ? expandCollapseButtons : lineEls}
          </div>
        );
      }

      if (codeChunk.live) {
        highlightElements.push(
          <div
            key={i}
            data-chunk-overlay={chunkId}
            className="absolute left right z2 w6"
            style={{ opacity: 0 }}
          >
            <div className="bg-blue h-full" />
          </div>
        );

        copyElements.push(
          <div
            key={i}
            data-chunk-copy={chunkId}
            className="absolute z3 right mr3 color-white"
            style={{ opacity: 0, transition: 'opacity 300ms linear' }}
          >
            <CopyButton text={codeChunk.raw} onCopy={onCopy} />
          </div>
        );
      }
      previousCount = previousCount + lineEls.length;
    });

    /* Prevent the default x-axis padding because each line pads itself. */
    const codeClasses = 'px0 hljs';

    let copyAllButton = null;
    if (props.copyRanges === undefined) {
      copyAllButton = (
        <div className="absolute z2 top right mr6 mt6 color-white">
          <CopyButton text={props.code} onCopy={onCopy} />
        </div>
      );
    }

    let containerClasses = 'prose relative round z0 scroll-styled';
    if (props.maxHeight !== undefined) containerClasses += ' overflow-auto';

    const containerStyles = {};
    if (props.maxHeight !== undefined)
      containerStyles.maxHeight = props.maxHeight;

    return (
      <div
        className={containerClasses}
        ref={this.onContainerElement}
        style={{ ...containerStyles }}
      >
        <pre className="py0 px0 txt-break-word mb0">
          <code className={codeClasses}>{codeElements}</code>
        </pre>
        {copyAllButton}
        {highlightElements}
        {copyElements}
      </div>
    );
  }
}

NumberedCodeSnippet.defaultProps = {
  characterWidth: 7.225, // Will need to change this if we change font size
  collapseLines: true
};

NumberedCodeSnippet.propTypes = {
  /**
   * Raw (unhighlighted) code. When the user clicks a copy button, this is what they'll get.
   * If no `highlightedCode` is provided, `code` is displayed.
   */
  code: PropTypes.string.isRequired,
  /**
   * The HTML output of running code through a syntax highlighter. If this is not provided,
   * `code` is displayed, instead.
   */
  highlightedCode: PropTypes.string,
  /**
   * Specific line ranges that should be independently copiable. Each range is a two-value array,
   * consisting of the starting and ending line. If this is not provided, the entire snippet is copiable.
   */
  copyRanges: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  /**
   * A maximum height for the snippet. If the code exceeds this height, the snippet will scroll internally.
   */
  maxHeight: PropTypes.number,
  /**
   * CSS that styles the highlighted code.
   */
  highlightThemeCss: PropTypes.string.isRequired,
  /**
   * The width of a character in the theme's monospace font, used for indentation. If you use a font or
   * font-size different than the default theme, you may need to change this value.
   */
  characterWidth: PropTypes.number,
  /**
   * Determines if non-copiable lines (when using `copyRanges`) should be collapsed. Default is true.
   *
   * If false, a `maxHeight` is defined, and the first live chunk (from the `copyRanges` prop) is not
   * visible in the snippet given the `maxHeight`, the component will autoscroll to make sure the live
   * chunk is in view when the page loads.
   */
  collapseLines: PropTypes.bool
};
