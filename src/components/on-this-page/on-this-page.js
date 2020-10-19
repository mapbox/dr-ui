import React from 'react';
import PropTypes from 'prop-types';
import {
  AsideHeading,
  buildSections,
  HeadingIcon,
  getActiveHeaderAnchor
} from './helpers';
import classnames from 'classnames';
import debounce from 'debounce';

// check if client body width is >= 1200
const isMXL = document.body.clientWidth >= 1200;

export default class OnThisPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lastActiveLink: undefined
    };
  }

  componentDidMount() {
    // on larger screens
    if (isMXL) {
      // create a debounced event listener on "scroll"
      this.onScroll = debounce(this.setActiveLink, 50);
      document.addEventListener('scroll', this.onScroll);
      // set active link on load
      this.setActiveLink();
    }
  }

  componentWillUnmount() {
    // on larger screens, tear down event listener
    if (isMXL) document.removeEventListener('scroll', this.onScroll);
  }

  // set the active link based on the heading that is scrolled into view
  setActiveLink = () => {
    const { topOffset } = this.props;
    const activeHeaderAnchor = getActiveHeaderAnchor(topOffset);
    // if activeHeaderAnchor has an id, set it as the lastActiveLink
    if (activeHeaderAnchor && activeHeaderAnchor.id) {
      this.setState({
        lastActiveLink: activeHeaderAnchor.id
      });
    }
  };

  // if the h2 or a (sub) h3 id matches `lastActiveLink`, mark this section as active
  findActiveSection = (heading) => {
    const { lastActiveLink } = this.state;
    return (
      (heading.children &&
        heading.children.filter((f) => f.id === lastActiveLink).length > 0) ||
      heading.id === lastActiveLink
    );
  };

  render() {
    const { headings, themeWrapper } = this.props;
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
            const isActiveSection = this.findActiveSection(heading);
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
                  {heading.icon && <HeadingIcon name={heading.icon} />}
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
      <div className={`dr-ui--on-this-page ${themeWrapper}`}>
        <AsideHeading>On this page</AsideHeading>
        <Headings headings={sections} />
      </div>
    );
  }
}

OnThisPage.propTypes = {
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
  ),
  /** Assembly classes to apply to the containing wrapper */
  themeWrapper: PropTypes.string,
  /** Threshold that the anchor must pass to be considered the active anchor */
  topOffset: PropTypes.number
};

OnThisPage.defaultProps = {
  topOffset: 50,
  themeWrapper: ''
};
