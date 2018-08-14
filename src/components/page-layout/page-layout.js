import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import debounce from 'debounce';
import classnames from 'classnames';

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomBoundaryValue: 0
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
        bottomBoundaryValue: height - 450
      });
    }, 200);
  }

  componentDidMount() {
    this.debounceHandleWindowResize();
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

    return (
      <div className="grid">
        <div className={`col col--4-mm col--12 ${props.sidebarTheme}`}>
          <Sticky
            enabled={true}
            bottomBoundary={state.bottomBoundaryValue}
            innerZ={1}
            top={state.topValue}
            activeClass="bg-gray-faint"
          >
            <div
              className={`pt24-mm pt0 viewport-almost-mm scroll-auto ${sidebarNarrowClasses}`}
            >
              {title}
              {props.sidebarContent}
            </div>
          </Sticky>
        </div>
        <div
          id="docs-content"
          className="col col--8-mm col--12 mt24 mb60 pr0-mm pr36 pl36"
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
  children: PropTypes.node.isRequired
};

PageLayout.defaultProps = {
  sidebarTheme: 'bg-gray-faint',
  sidebarStackedOnNarrowScreens: false
};

export default PageLayout;
