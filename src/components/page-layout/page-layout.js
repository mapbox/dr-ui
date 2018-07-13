import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import debounce from 'debounce';

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
    this.debounceHandleWindowResize = debounce(() => {
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
    return (
      <div className="grid">
        <div
          className={`col col--4-mm col--12 ${
            props.sidebarColor
          } px0 mt0-mm mt60`}
        >
          <Sticky
            enabled={true}
            bottomBoundary={state.bottomBoundaryValue}
            innerZ={1}
            top={50}
            activeClass="bg-gray-faint shadow-darken-10"
          >
            <div className="txt-ms pt24-mm pt0 viewport-almost-mm scroll-auto ml36 mt-neg60 mt0-mm">
              <div className="txt-l color-blue txt-fancy mb12 block-mm none">
                {props.sectionTitle}
              </div>
              {props.sidebarContent}
            </div>
          </Sticky>
        </div>
        <div
          id="docs-content"
          className="col col--8-mm col--12 mt24 mb60 pr0-mm pr36 pl36 prose"
        >
          {props.children}
        </div>
      </div>
    );
  }
}

PageLayout.propTypes = {
  sidebarContent: PropTypes.any,
  sectionTitle: PropTypes.string,
  sidebarColor: PropTypes.string,
  sidebarPaddingTop: PropTypes.string,
  children: PropTypes.any
};

PageLayout.defaultProps = {
  sidebarColor: 'bg-gray-faint'
};

export default PageLayout;
