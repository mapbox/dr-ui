import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import CopyButton from '@mapbox/mr-ui/copy-button';
import { HideLines, ShowLines } from './show-hide-lines';
import CodeBlock from '@theme/CodeBlock';
import { Highlight } from 'prism-react-renderer';
import onCopy from '@theme/CodeBlock/on-copy';
import { usePrismTheme } from '@docusaurus/theme-common';
import Line from '@theme/CodeBlock/Line';

// TODO: restore functionality for automatically scrolling the first live section into view

export default function CopyRangeCodeSnippet(props) {
  const {
    code,
    language,
    copyRanges,
    collapseLines = true,
    maxHeight,
    showLineNumbers = true
  } = props;

  const [expanded, setExpanded] = useState(false);

  const prismTheme = usePrismTheme();

  const firstLiveRef = useRef(null);
  const containerRef = useRef(null);

  function toggleLines() {
    setExpanded(!expanded);
  }

  return (
    <Highlight theme={prismTheme} code={code} language={language ?? 'text'}>
      {({ tokens, getLineProps, getTokenProps }) => {
        const rawCodeLines = code.trim().split('\n');

        /* If highlightedCode is not provided, show raw code. */
        // const displayCode = props.highlightedCode || props.code;
        const splitDisplayCode = tokens;

        /**
         * Use copyRanges to split the highlighted code into chunks,
         * some of which are "live", i.e. copyable, some which are not.
         * If there are no copyRanges, the whole snippet is copyable and there
         * is no fancy live-chunk styling.
         */
        const mutableCopyRanges =
          copyRanges !== undefined && copyRanges.slice();
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
        let previousCount = 0;

        allChunks.forEach((codeChunk, i) => {
          const chunkId = `chunk-${i}`;
          const lineEls = codeChunk.highlightedLines.map((line, i) => {
            // Left padding is determined below
            let lineClasses = 'pr12';
            if (codeChunk.live) lineClasses += ' py3 bg-white';

            /* eslint-disable react/no-danger */
            /* eslint-disable react/no-unknown-property */

            return (
              <Line
                key={i}
                line={line}
                getLineProps={getLineProps}
                getTokenProps={getTokenProps}
                classNames={lineClasses}
                highlight={codeChunk.live}
                showLineNumbers
              />
            );
            /* eslint-enable react/no-danger */
            /* eslint-enable react/no-unknown-property */
          });

          const ChunkCopyButton = (
            <div
              key={i}
              data-chunk-copy={chunkId}
              className="absolute z2 right mt12 mr12 color-white"
              style={{ opacity: 0, transition: 'opacity 200ms ease-in-out' }}
            >
              <CopyButton onCopy={onCopy} text={codeChunk.raw} />
            </div>
          );

          /* For the first live chunk, add a ref. */
          if (codeChunk.live && i < 2) {
            codeElements.push(
              <div
                key={i}
                /**
                 * z-index this line above the highlighted background element for
                 * live chunks
                 */
                ref={firstLiveRef}
                className="relative"
                data-chunk-code={chunkId}
              >
                {ChunkCopyButton}
                {lineEls}
              </div>
            );
          } else if (codeChunk.live) {
            codeElements.push(
              <div key={i} className="relative" data-chunk-code={chunkId}>
                {ChunkCopyButton}
                {lineEls}
              </div>
            );
          } else if (!codeChunk.live && lineEls.length) {
            const expandCollapseButtons = expanded ? (
              <HideLines onClick={toggleLines}>{lineEls}</HideLines>
            ) : (
              <ShowLines onClick={toggleLines}>{lineEls}</ShowLines>
            );
            codeElements.push(
              <div
                key={i}
                /**
                 * z-index this line above the highlighted background element for
                 * live chunks
                 */
                className={`relative ${
                  collapseLines && (expanded ? '' : 'h30')
                }`}
                data-chunk-code={chunkId}
              >
                {collapseLines ? expandCollapseButtons : lineEls}
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
          }
          previousCount = previousCount + lineEls.length;
        });

        const containerStyles = {};
        if (maxHeight !== undefined) containerStyles.maxHeight = maxHeight;

        return (
          <CodeBlock {...props}>
            <div
              ref={containerRef}
              style={{
                ...containerStyles,
                counterReset: 'line-count'
              }}
            >
              {codeElements}
            </div>
          </CodeBlock>
        );
      }}
    </Highlight>
  );
}

CopyRangeCodeSnippet.defaultProps = {
  collapseLines: true
};

CopyRangeCodeSnippet.propTypes = {
  /**
   * Raw (unhighlighted) code. When the user clicks a copy button, this is what they'll get.
   * If no `highlightedCode` is provided, `code` is displayed.
   */
  code: PropTypes.string.isRequired,
  /**
   * The language to use for prism syntax highlighting.
   */
  language: PropTypes.string,
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
   * Determines if non-copiable lines (when using `copyRanges`) should be collapsed. Default is true.
   *
   * If false, a `maxHeight` is defined, and the first live chunk (from the `copyRanges` prop) is not
   * visible in the snippet given the `maxHeight`, the component will autoscroll to make sure the live
   * chunk is in view when the page loads.
   */
  collapseLines: PropTypes.bool
};
