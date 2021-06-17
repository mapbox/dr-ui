import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getSubPages } from '../utils.js';

export default class GuideGroupIndex extends React.PureComponent {
  render() {
    const { pathname, navigation, frontMatter } = this.props;
    const subPages = getSubPages(navigation, pathname, frontMatter);
    return (
      <React.Fragment>
        {subPages &&
          subPages.map((subpage, i) => {
            return (
              <div key={subpage.title}
                className={classnames(
                  'flex-parent flex-parent--start-cross mb12',
                  {
                    'border-b border--gray-light pb12': i < subPages.length - 1
                  }
                )}
              >
                <div className="flex-child txt-bold w240 flex-child--no-shrink">
                  <a href={subpage.path}>{subpage.title}</a>
                </div>
                <div className="flex-child flex-child--grow">
                  {subpage.description}
                </div>
              </div>
            );
          })}
      </React.Fragment>
    );
  }
}

GuideGroupIndex.propTypes = {
  pathname: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  frontMatter: PropTypes.shape({
    group: PropTypes.bool
  })
};
