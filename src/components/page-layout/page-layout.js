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
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceHandleWindowResize);
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
        >
          <Sticky
            enabled={state.stickyEnabled}
            bottomBoundary={state.bottomBoundaryValue}
            innerZ={1}
            top={state.topValue}
          >
            <div
              className={`pt24-mm pt0 viewport-almost-mm scroll-auto-mm scroll-styled ${sidebarNarrowClasses}`}
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
  sideBarColSize: PropTypes.number,
  children: PropTypes.node.isRequired
};

PageLayout.defaultProps = {
  sidebarTheme: 'bg-gray-faint',
  sidebarStackedOnNarrowScreens: false
};

export default PageLayout;
