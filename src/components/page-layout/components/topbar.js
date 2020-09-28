import React from 'react';
import PropTypes from 'prop-types';
import TopbarSticker from '../../topbar-sticker/topbar-sticker';
import Topbar from '../../topbar/topbar';
import ProductMenu from '../../product-menu/product-menu';
import Search from '../../search/search';
import TabList from '@mapbox/mr-ui/tab-list';

export default class PageLayoutTopbar extends React.Component {
  renderNavTabs = () => {
    const { tabListAppend } = this.props;
    let { navTabs } = this.props.navigation;
    if (!navTabs) return;
    // we need to do this to switch iOS and Android's mobile navigation
    // if tabListAppend, append it to navTabs
    if (tabListAppend && navTabs) {
      // first remove all appended items to avoid duplicates
      navTabs = navTabs.filter((f) => !f.appended);
      // finally add any items to appeneded, but make sure it's a unique id being added
      tabListAppend.map((tab) => {
        if (navTabs.filter((f) => f.id === tab.id).length === 0)
          navTabs.push({ ...tab, appended: true });
      });
    }
    return navTabs;
  };

  render() {
    const {
      parentPath,
      topBarSticker,
      navigation,
      constants,
      hideSearch
    } = this.props;
    const { title, tag, path } = navigation;
    let { navTabs } = navigation;
    const { SITE, BASEURL } = constants;
    const Wrapper = topBarSticker ? TopbarSticker : Topbar;
    return (
      <Wrapper>
        <div className="limiter" style={{ minHeight: '50px' }}>
          <div className="grid">
            <div className="col col--4-mm col--12">
              <div
                className="ml24-mm flex-parent-mm flex-parent--start-main h30"
                style={{ marginTop: 10 }}
              >
                <ProductMenu
                  productName={title || SITE}
                  tag={tag || undefined}
                  homePage={`${BASEURL}/${path || ''}`}
                />
              </div>
            </div>
            <div className="col col--6-mm col--12">
              {navTabs && navTabs.length > 0 && (
                <TabList items={this.renderNavTabs()} activeItem={parentPath} />
              )}
            </div>
            <div className="col col--2-mm col--12">
              {hideSearch ? (
                ''
              ) : (
                <div
                  className="flex-parent-mm flex-parent--end-main h-full-mm wmax300 h36"
                  style={{ marginTop: 7, marginBottom: 7 }}
                >
                  <Search {...this.props} site={SITE} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

PageLayoutTopbar.defaultProps = {
  topBarSticker: true
};

PageLayoutTopbar.propTypes = {
  navigation: PropTypes.shape({
    title: PropTypes.string,
    tag: PropTypes.string,
    navTabs: PropTypes.array,
    path: PropTypes.string
  }).isRequired,
  parentPath: PropTypes.string,
  constants: PropTypes.shape({
    SITE: PropTypes.string.isRequired,
    BASEURL: PropTypes.string.isRequired
  }).isRequired,
  topBarSticker: PropTypes.bool,
  tabListAppend: PropTypes.array,
  hideSearch: PropTypes.bool
};
