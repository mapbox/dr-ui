import React from 'react';
import PropTypes from 'prop-types';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import Popover from '@mapbox/mr-ui/popover';
import {
  SearchProvider,
  Results,
  SearchBox,
  Facet
} from '@elastic/react-search-ui';
import LevelIndicator from '../level-indicator/level-indicator';
import ReactHtmlParser from 'react-html-parser';
import Icon from '@mapbox/mr-ui/icon';

import { getFilterValueDisplay } from '@elastic/react-search-ui-views/lib/view-helpers';

const connector = new SiteSearchAPIConnector({
  engineKey: 'zpAwGSb8YMXtF9yDeS5K', // public engine key
  engineName: 'docs',
  documentType: ['page']
});

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.setAnchor = this.setAnchor.bind(this);
    this.getAnchor = this.getAnchor.bind(this);
    this.ignore = this.ignore.bind(this);
    this.renderPopover = this.renderPopover.bind(this);
  }

  setAnchor(el) {
    this.anchor = el;
  }

  getAnchor() {
    return this.anchor;
  }

  ignore(el) {
    return el === this.getAnchor();
  }

  renderPopover = props => {
    const children = props.children;
    return (
      <Popover
        allowPlacementAxisChange={false}
        getAnchorElement={this.getAnchor}
        onExit={props.reset}
        ignoreClickWithinElement={this.ignore}
        alignment="bottom"
        placement="bottom"
        receiveFocus={false}
        passthroughProps={{
          style: { maxWidth: 400, maxHeight: 400 },
          className:
            'color-text bg-white shadow-darken25 round px12 py12 scroll-auto scroll-styled'
        }}
        zIndex={4}
      >
        {children.length ? (
          <div>
            <Facet field="site" label="Site" view={this.singleLinksFacet} />

            <ul style={{ fontSize: '13px', lineHeight: '19px' }}>{children}</ul>
          </div>
        ) : (
          'No result'
        )}
      </Popover>
    );
  };

  results = props => this.renderPopover(props);

  result({ result, onClickLink }) {
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
    const url = returnRaw(result.url);
    const excerpt = result.excerpt.snippet || result.excerpt.raw;

    return (
      <li className="mb24 px6">
        <div className="">
          {title && url && (
            <a
              className="block link--gray"
              href={url}
              onClick={onClickLink}
              target="_blank"
              rel="noopener noreferrer"
            >
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
            </a>
          )}
        </div>
      </li>
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
            facets: {
              site: { type: 'value' }
            },
            initialState: {
              resultsPerPage: 5
              // filters: [{ field: 'site', values: ['Help'], type: 'all' }] // test
            }
          }}
        >
          {({ isLoading, resultSearchTerm, reset }) => {
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
                    searchAsYouType={true}
                  />
                </div>

                {resultSearchTerm ? (
                  <Results
                    renderResult={this.result}
                    view={props => {
                      return this.results({
                        ...props,
                        reset
                      });
                    }}
                  />
                ) : (
                  ''
                )}
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
