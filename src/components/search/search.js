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
            <div className="mb12 txt-s border-b border--gray-faint pb3">
              <Facet field="site" label="Site" view={this.singleLinksFacet} />
            </div>
            <ul style={{ fontSize: '13px', lineHeight: '19px' }}>{children}</ul>
          </div>
        ) : (
          'No result'
        )}
      </Popover>
    );
  };

  results = props => this.renderPopover(props);

  result({ fields, onClickLink, title, url }) {
    const site = fields.site ? fields.site : '';
    const type = fields.contentType ? fields.contentType : '';
    const level = fields.level
      ? parseInt(fields.level.replace(/<\/?[^>]+(>|$)/g), '')
      : '';
    const language = fields.codeLanguage
      ? fields.codeLanguage.split(',').join(', ')
      : '';

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
                      {ReactHtmlParser(site)}
                      <Icon name="chevron-right" inline={true} />
                    </span>
                  ) : (
                    ''
                  )}
                  {ReactHtmlParser(title)}
                </span>
              </div>
              <div className="mb3 txt-xs">
                {type ? (
                  <div className="inline-block">
                    <span className="">
                      <Icon size={12} name="book" inline={true} />
                    </span>
                    <span className="ml3 txt-capitalize">
                      {ReactHtmlParser(type)}
                    </span>
                  </div>
                ) : (
                  ''
                )}

                {language ? (
                  <div className="ml12 inline-block">
                    <span className="">
                      <Icon size={12} name="code" inline={true} />
                    </span>
                    <span className="ml3">{ReactHtmlParser(language)}</span>
                  </div>
                ) : (
                  ''
                )}

                {level ? (
                  <div className="ml12 inline-block">
                    <LevelIndicator level={level} />
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div>{ReactHtmlParser(fields.excerpt)}</div>
            </a>
          )}
        </div>
      </li>
    );
  }

  searchBox = props => {
    const { inputProps, onChange, onSubmit, value } = props;

    return (
      <form className="sui-search-box" onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={value} {...inputProps} />
      </form>
    );
  };

  singleLinksFacet = ({ onRemove, onSelect, options, values = [] }) => {
    const value = values[0];
    const filterOptions = options.filter(opt => opt.value === this.props.site);

    return (
      <div className="mb6">
        <div className="toggle-group">
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
          <div className="toggle-container">
            {filterOptions.map(option => (
              <a
                key={getFilterValueDisplay(option.value)}
                className={`toggle py3 toggle--s ${
                  value === option.value ? 'bg-gray color-white' : ''
                }`}
                href="/"
                onClick={e => {
                  e.preventDefault();
                  onSelect(option.value);
                }}
              >
                {getFilterValueDisplay(option.value)}
              </a>
            ))}
          </div>
        </div>
      </div>
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
                    view={this.searchBox}
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
                    titleField="title"
                    urlField="url"
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
