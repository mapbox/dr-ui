import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import debounce from 'debounce';
import classnames from 'classnames';

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomBoundaryValue: 0,
      stickyEnabled: false
    };
    this.debounceHandleWindowResize = debounce(() => {
      const width = document.body.clientWidth;
      if (width < 640) {
        this.setState({
          topValue: this.props.sidebarContentStickyTopNarrow
        });
      } else {
        this.setState({
          topValue: this.props.sidebarContentStickyTop
        });
      }
      const height = document.body.clientHeight;
      this.setState({
        bottomBoundaryValue: height - 150
      });
    }, 200);
  }

  componentDidMount() {
    this.debounceHandleWindowResize();
    setTimeout(() => {
      this.setState({ stickyEnabled: true });
    }, 500);
    window.addEventListener('resize', this.debounceHandleWindowResize);
    // when available, the page will recalculate the height of the page when a user clicks an element with the given class name
    if (this.props.interactiveClass) {
      const interactiveClass = document.getElementsByClassName(
        this.props.interactiveClass
      );
      for (let i = 0; i < interactiveClass.length; i++) {
        interactiveClass[i].addEventListener(
          'click',
          this.debounceHandleWindowResize
        );
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceHandleWindowResize);
    if (this.props.interactiveClass) {
      const interactiveClass = document.getElementsByClassName(
        this.props.interactiveClass
      );
      for (let i = 0; i < interactiveClass.length; i++) {
        interactiveClass[i].removeEventListener(
          'click',
          this.debounceHandleWindowResize
        );
      }
    }
  }

  render() {
    const { props, state } = this;
    let title = '';
    if (props.sidebarTitle) {
      title = (
        <div className="txt-l color-blue txt-fancy mb12 block-mm none">
          {props.sidebarTitle}
        </div>
      );
    }

    const sidebarNarrowClasses = classnames({
      block: props.sidebarStackedOnNarrowScreens,
      'none block-mm': !props.sidebarStackedOnNarrowScreens
    });

    // if available, sets col--#-ml size for the sidebar and content elements. If the value is outside of the range, it will not set the col--#-ml values and defer to the default col sizes
    let sideBarColSize = null;
    if (
      props.sideBarColSize &&
      props.sideBarColSize > 2 &&
      props.sideBarColSize < 7
    )
      sideBarColSize = props.sideBarColSize;

    return (
      <div className="grid">
        <div
          className={`col col--4-mm ${
            sideBarColSize ? `col--${sideBarColSize}-ml` : ''
          } col--12 ${props.sidebarTheme}`}
          data-swiftype-index="false"
        >
          <Sticky
            enabled={state.stickyEnabled}
            bottomBoundary={state.bottomBoundaryValue}
            innerZ={3}
            top={state.topValue}
          >
            <div
              className={`pt24-mm pt0 viewport-almost-mm scroll-auto-mm scroll-styled ${sidebarNarrowClasses}`}
              id="dr-ui--page-layout-sidebar"
            >
              {title}
              {props.sidebarContent}
            </div>
          </Sticky>
        </div>
        <div
          id="docs-content"
          className={`col col--8-mm ${
            sideBarColSize ? `col--${12 - sideBarColSize}-ml` : ''
          } col--12 mt24-mm mb60 pr0-mm px36-mm`}
        >
          {props.children}
        </div>
      </div>
    );
  }
}

PageLayout.propTypes = {
  sidebarContent: PropTypes.node.isRequired,
  sidebarTitle: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  sidebarTheme: PropTypes.string,
  sidebarContentStickyTop: PropTypes.number.isRequired,
  sidebarContentStickyTopNarrow: PropTypes.number.isRequired,
  sidebarStackedOnNarrowScreens: PropTypes.bool,
  sideBarColSize: PropTypes.number, // accepts numbers 3 - 6 to change the column width of the sidebar at the -ml breakpoint
  interactiveClass: PropTypes.string, // the class name of an interactive element, when clicked PageLayout will recalculate the height of the page and sizing for the the sidebar
  children: PropTypes.node.isRequired
};

PageLayout.defaultProps = {
  sidebarTheme: 'bg-gray-faint',
  sidebarStackedOnNarrowScreens: false
};

export default PageLayout;
