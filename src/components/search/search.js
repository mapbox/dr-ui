import React from 'react';
import PropTypes from 'prop-types';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import { SearchProvider, Results, SearchBox } from '@elastic/react-search-ui';
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
    this.resultView = this.resultView.bind(this);
    this.resultsView = this.resultsView.bind(this);
    this.searchBox = this.searchBox.bind(this);
  }

  returnRaw = item => {
    if (item && item.raw && typeof item.raw !== 'string')
      return item.raw.join(', ');
    else return item && item.raw ? item.raw : '';
  };

  resultView = (item, index, downshiftProps) => {
    const result = item.result;
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
      <li
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
      </li>
    );
  };

  resultsView = props => {
    return (
      <div
        className="color-text shadow-darken25 round mt3 wmax600 absolute bg-white scroll-auto scroll-styled hmax360"
        style={{ zIndex: 4 }}
      >
        {props.children.length ? (
          <div>
            <ul style={{ fontSize: '13px', lineHeight: '19px' }}>
              {props.children.map((item, index) => {
                return this.resultView(item.props, index, props.downshiftProps);
              })}
            </ul>
          </div>
        ) : (
          props.wasSearched && <div className="py12 px12">No Results</div>
        )}
      </div>
    );
  };

  searchBox = props => {
    const {
      allAutocompletedItemsCount, // eslint-disable-line
      autocompleteView, // eslint-disable-line
      isFocused, // eslint-disable-line
      inputProps,
      onChange,
      onSelectAutocomplete,
      onSubmit,
      useAutocomplete, // eslint-disable-line
      value,
      wasSearched
    } = props;

    return (
      <Downshift
        inputValue={value}
        onChange={onSelectAutocomplete}
        onInputValueChange={newValue => {
          if (value === newValue) return;
          onChange(newValue);
        }}
        itemToString={() => value}
      >
        {downshiftProps => {
          const { closeMenu, getInputProps, isOpen } = downshiftProps;
          return (
            <form
              onSubmit={e => {
                closeMenu();
                onSubmit(e);
              }}
            >
              <input
                id="docs-search"
                {...getInputProps({
                  placeholder: 'Search docs',
                  ...inputProps,
                  className: `input px30`
                })}
              />
              {isOpen && value && (
                <Results
                  view={props => {
                    return this.resultsView({
                      ...props,
                      downshiftProps,
                      wasSearched
                    });
                  }}
                />
              )}
            </form>
          );
        }}
      </Downshift>
    );
  };

  render() {
    return (
      <div>
        <SearchProvider
          config={{
            apiConnector: connector,
            searchQuery: {
              facets: {
                site: { type: 'value' }
              }
            },
            initialState: {
              resultsPerPage: 10
            }
          }}
        >
          {({ isLoading, wasSearched }) => {
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
                    searchAsYouType={true}
                    view={props => {
                      return this.searchBox({
                        ...props,
                        wasSearched
                      });
                    }}
                    onSelectAutocomplete={selection => {
                      window.open(selection.url.raw, '_self'); // set to allow keyboard users to hit enter to navigate to item
                    }}
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
