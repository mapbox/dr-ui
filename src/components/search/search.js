import React from 'react';
import PropTypes from 'prop-types';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import { SearchProvider } from '@elastic/react-search-ui';
import LevelIndicator from '../level-indicator/level-indicator';
import ReactHtmlParser from 'react-html-parser';
import Icon from '@mapbox/mr-ui/icon';
import Downshift from 'downshift';

const connector = new SiteSearchAPIConnector({
  engineKey: 'zpAwGSb8YMXtF9yDeS5K', // public engine key
  engineName: 'docs',
  documentType: ['page']
});

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  returnRaw = item => {
    if (item && item.raw && typeof item.raw !== 'string')
      return item.raw.join(', ');
    else return item && item.raw ? item.raw : '';
  };

  result = (result, index, downshiftProps) => {
    const getItemProps = downshiftProps.getItemProps;
    const highlighted = downshiftProps.highlightedIndex === index;
    const site = this.returnRaw(result.site);
    const subsite = this.returnRaw(result.subsite);
    const type = this.returnRaw(result.contentType);
    const level = this.returnRaw(result.level);
    const language = this.returnRaw(result.codeLanguage);
    const title = this.returnRaw(result.title);
    const url = this.returnRaw(result.url);
    const excerpt = result.excerpt
      ? result.excerpt.snippet || result.excerpt.raw
      : '';
    return (
      <div
        className="py12 px18"
        {...getItemProps({
          key: result.id.raw,
          item: result,
          className: `${highlighted &&
            'bg-gray-faint'} py12 px18 link--gray cursor-pointer`
        })}
      >
        {title && url && (
          <div className="block link--gray">
            <div className="mb3">
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
          </div>
        )}
      </div>
    );
  };

  render() {
    return (
      <div>
        <SearchProvider
          config={{
            apiConnector: connector,
            initialState: {
              resultsPerPage: 10
            }
          }}
        >
          {({
            isLoading,
            searchTerm,
            setSearchTerm,
            results,
            trackClickThrough
          }) => {
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

                  <Downshift
                    inputValue={searchTerm}
                    onChange={selection => {
                      trackClickThrough(selection.id.raw); // track selection click through
                      window.open(selection.url.raw, '_self'); // open selection in current window
                    }}
                    onInputValueChange={newValue => {
                      if (searchTerm === newValue) return;
                      setSearchTerm(newValue);
                    }}
                    itemToString={() => searchTerm}
                  >
                    {downshiftProps => {
                      const {
                        closeMenu,
                        getInputProps,
                        isOpen
                      } = downshiftProps;

                      return (
                        <form
                          onSubmit={() => {
                            closeMenu();
                          }}
                        >
                          <input
                            id="docs-search"
                            {...getInputProps({
                              placeholder: 'Search docs',
                              className: `input px30 bg-white`
                            })}
                          />
                          {isOpen && searchTerm && (
                            <div className="color-text shadow-darken25 round mt3 absolute bg-white scroll-auto scroll-styled hmax360 absolute z4 w-full">
                              <ul
                                style={{ fontSize: '13px', lineHeight: '19px' }}
                              >
                                {results.map((result, index) =>
                                  this.result(result, index, downshiftProps)
                                )}
                              </ul>
                            </div>
                          )}
                        </form>
                      );
                    }}
                  </Downshift>
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
