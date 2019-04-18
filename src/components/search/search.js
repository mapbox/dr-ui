import React from 'react';
import PropTypes from 'prop-types';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import {
  SearchProvider,
  SearchBox
  // Facet,
  // Paging
} from '@elastic/react-search-ui';
import LevelIndicator from '../level-indicator/level-indicator';
import ReactHtmlParser from 'react-html-parser';
import Icon from '@mapbox/mr-ui/icon';
import { getFilterValueDisplay } from '@elastic/react-search-ui-views/lib/view-helpers';
import Pagination from 'rc-pagination';

const connector = new SiteSearchAPIConnector({
  engineKey: 'zpAwGSb8YMXtF9yDeS5K', // public engine key
  engineName: 'docs',
  documentType: ['page']
});

class Search extends React.Component {
  autocomplete({
    autocompleteResults, // eslint-disable-line
    autocompletedResults,
    autocompleteSuggestions, // eslint-disable-line
    autocompletedSuggestions, // eslint-disable-line
    getItemProps,
    getMenuProps, // eslint-disable-line
    isOpen, // eslint-disable-line
    inputValue, // eslint-disable-line
    highlightedIndex
  }) {
    return (
      <div
        className="color-text shadow-darken25 round mt3 wmax600 absolute bg-white scroll-auto scroll-styled hmax360"
        style={{ zIndex: 4 }}
      >
        <ul style={{ fontSize: '13px', lineHeight: '19px' }}>
          {autocompletedResults.map((result, index) => {
            const returnRaw = item => {
              if (item && item.raw && typeof item.raw !== 'string')
                return item.raw.join(', ');
              else return item && item.raw ? item.raw : '';
            };
            const site = returnRaw(result.site);
            const subsite = returnRaw(result.subsite);
            const type = returnRaw(result.contentType);
            const level = returnRaw(result.level);
            const language = returnRaw(result.codeLanguage);
            const title = returnRaw(result.title);
            const excerpt = result.excerpt.snippet || result.excerpt.raw;

            return (
              <li
                {...getItemProps({
                  key: result.id.raw,
                  index: index,
                  item: result,
                  className: `${highlightedIndex === index &&
                    'bg-gray-faint'} py12 px18 link--gray cursor-pointer`
                })}
              >
                <div>
                  <span className="txt-bold">
                    {site && site !== title ? (
                      <span>
                        {site}
                        <Icon name="chevron-right" inline={true} />
                      </span>
                    ) : (
                      ''
                    )}
                    {subsite && subsite !== title && subsite !== site ? (
                      <span>
                        {subsite}
                        <Icon name="chevron-right" inline={true} />
                      </span>
                    ) : (
                      ''
                    )}
                    {title}
                  </span>
                </div>

                <div className="mb6">{ReactHtmlParser(excerpt)}</div>

                <div className="txt-s">
                  {type ? (
                    <div className="inline-block">
                      <span className="">
                        <Icon size={12} name="book" inline={true} />
                      </span>
                      <span className="ml3 txt-capitalize">{type}</span>
                    </div>
                  ) : (
                    ''
                  )}

                  {language ? (
                    <div className="ml12 inline-block">
                      <span className="">
                        <Icon size={12} name="code" inline={true} />
                      </span>
                      <span className="ml6">{language}</span>
                    </div>
                  ) : (
                    ''
                  )}

                  {level ? (
                    <div className="ml12 inline-block">
                      <LevelIndicator level={parseInt(level)} />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  paging({ current, resultsPerPage, onChange, totalPages }) {
    const textItemRender = (curr, type) => {
      if (type === 'prev') {
        return (
          <button
            disabled={current === 1}
            className="btn btn--s btn--stroke btn--gray"
          >
            <Icon name="chevron-left" />
          </button>
        );
      }
      if (type === 'next') {
        return (
          <button className="btn btn--s btn--stroke btn--gray ml6">
            <Icon name="chevron-right" />
          </button>
        );
      }
    };
    return (
      <Pagination
        current={current}
        onChange={e => {
          document.getElementById('swiftype-popover').scrollTop = -100; // scroll back to top
          onChange(e);
        }}
        pageSize={resultsPerPage}
        total={totalPages * resultsPerPage}
        itemRender={textItemRender}
        className="flex-parent"
      />
    );
  }

  singleLinksFacet = ({ onRemove, onSelect, options, values = [] }) => {
    const value = values[0];
    const siteFilter = options.filter(opt => opt.value === this.props.site)[0];
    return siteFilter ? (
      <div className="mb12 txt-s border-b border--gray-faint pb12">
        <div className="toggle-group">
          <div className="toggle-container">
            <a
              key={getFilterValueDisplay(siteFilter.value)}
              className={`toggle py3 toggle--s ${
                value === siteFilter.value ? 'bg-gray color-white' : ''
              }`}
              href="/"
              onClick={e => {
                e.preventDefault();
                onSelect(siteFilter.value);
              }}
            >
              {getFilterValueDisplay(siteFilter.value)}
            </a>
          </div>

          <div className="toggle-container">
            <a
              onClick={e => {
                e.preventDefault();
                onRemove(value);
              }}
              className={`toggle py3 toggle--s ${
                !value ? 'bg-gray color-white' : ''
              }`}
              href="/"
            >
              All docs
            </a>
          </div>
        </div>
      </div>
    ) : (
      ''
    );
  };

  render() {
    return (
      <div ref={this.setAnchor}>
        <SearchProvider
          config={{
            apiConnector: connector,
            searchQuery: {
              facets: {
                site: { type: 'value' }
              }
            },
            initialState: {
              resultsPerPage: 5
              // filters: [{ field: 'site', values: ['Help'], type: 'all' }] // test
            }
          }}
        >
          {({ isLoading }) => {
            return (
              <div className="App">
                <div className="relative">
                  <div className="absolute flex-parent flex-parent--center-cross flex-parent--center-main w36 h36">
                    <label htmlFor="docs-search">
                      <svg className="icon color-gray">
                        <use xlinkHref="#icon-search" />
                      </svg>
                    </label>
                  </div>
                  {isLoading ? (
                    <div className="absolute top right flex-parent flex-parent--center-cross flex-parent--center-main w36 h36">
                      <span className="loading loading--s" />
                    </div>
                  ) : (
                    ''
                  )}

                  <SearchBox
                    inputProps={{
                      className: 'input px30',
                      placeholder: 'Search docs',
                      id: 'docs-search'
                    }}
                    autocompleteResults={{
                      urlField: 'url'
                    }}
                    autocompleteView={this.autocomplete}
                  />
                </div>
              </div>
            );
          }}
        </SearchProvider>
      </div>
    );
  }
}

Search.propTypes = {
  site: PropTypes.string
};

export default Search;
