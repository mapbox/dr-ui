import React from 'react';
import PropTypes from 'prop-types';
import { AsideHeading, buildSections } from './helpers';
import classnames from 'classnames';
import Icon from '@mapbox/mr-ui/icon';
import debounce from 'debounce';

export default class OnThisPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lastActiveLink: undefined
    };
  }
  componentDidMount() {
    this.onScroll = debounce(this.setActiveLink, 50);
    document.addEventListener('scroll', this.onScroll);
    this.setActiveLink();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  setActiveLink = () => {
    const { topOffset } = this.props;
    function getActiveHeaderAnchor() {
      // get all docs-content headers and then convert nodelist to array
      const headersAnchors = Array.prototype.slice.call(
        document.querySelectorAll(
          '#docs-content h2.anchor, #docs-content h3.anchor'
        )
      );
      // if there are no found header anchors, return undefined
      if (!headersAnchors || headersAnchors.length === 0) return undefined;

      const firstAnchorUnderViewportTop = headersAnchors.find((anchor) => {
        const { top } = anchor.getBoundingClientRect();
        return top >= topOffset;
      });
      if (firstAnchorUnderViewportTop) {
        // If first anchor in viewport is under a certain threshold, we consider it's not the active anchor.
        // In such case, the active anchor is the previous one (if it exists), that may be above the viewport
        if (
          firstAnchorUnderViewportTop.getBoundingClientRect().top >= topOffset
        ) {
          const previousAnchor =
            headersAnchors[
              headersAnchors.indexOf(firstAnchorUnderViewportTop) - 1
            ];
          return previousAnchor !== null && previousAnchor !== void 0
            ? previousAnchor
            : firstAnchorUnderViewportTop;
        }
        // If the anchor is at the top of the viewport, we consider it's the first anchor
        else {
          return firstAnchorUnderViewportTop;
        }
      }
      // no anchor under viewport top
      else {
        return headersAnchors[headersAnchors.length - 1];
      }
    }
    const activeHeaderAnchor = getActiveHeaderAnchor();
    if (activeHeaderAnchor && activeHeaderAnchor.id) {
      this.setState({
        lastActiveLink: activeHeaderAnchor.id
      });
    }
  };

  render() {
    const { headings } = this.props;
    const { lastActiveLink } = this.state;

    if (!headings) return <div />;
    const sections = buildSections(headings);

    const Headings = ({ headings, isChild, active }) => {
      if (!headings || !headings.length) {
        return null;
      }

      return (
        <ul
          className={classnames('', {
            none: isChild && !active,
            'block pl12': isChild && active,
            my6: isChild
          })}
        >
          {headings.map((heading) => {
            const isActiveSection =
              (heading.children &&
                heading.children.filter((f) => f.id === lastActiveLink).length >
                  0) ||
              heading.id === lastActiveLink;
            return (
              <li
                key={heading.id}
                className={classnames('mb3', {
                  'mb6-mxl': !isChild
                })}
              >
                <a
                  style={{ wordBreak: 'break-word' }}
                  href={`#${heading.id}`}
                  className={classnames('link inline-block', {
                    'link--blue': heading.id === lastActiveLink,
                    'link--gray': heading.id !== lastActiveLink
                  })}
                >
                  {heading.icon && (
                    <div
                      className="color-darken75 mr6 w18 h18 bg-gray-faint round-full flex-parent-inline flex-parent--center-main flex-parent--center-cross relative ml-neg12"
                      style={{ top: 3 }}
                    >
                      <Icon size={16} name={heading.icon} />
                    </div>
                  )}
                  {heading.value}
                </a>
                <Headings
                  isChild
                  active={isActiveSection}
                  headings={heading.children}
                />
              </li>
            );
          })}
        </ul>
      );
    };

    return (
      <div className="dr-ui--page-layout-aside mb36-mxl mb18">
        <AsideHeading>On this page</AsideHeading>
        <Headings headings={sections} />
      </div>
    );
  }
}

OnThisPage.propTypes = {
  topOffset: PropTypes.number,
  /** Array of headings */
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
          icon: PropTypes.string
        })
      )
    })
  )
};

OnThisPage.defaultProps = {
  topOffset: 50
};
