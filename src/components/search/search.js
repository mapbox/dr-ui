import React from 'react';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import Popover from '@mapbox/mr-ui/popover';
import { SearchProvider, Results, SearchBox } from '@elastic/react-search-ui';
import LevelIndicator from '../level-indicator/level-indicator';
import ReactHtmlParser from 'react-html-parser';
import Icon from '@mapbox/mr-ui/icon';
import removeMd from 'remove-markdown';

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
          <ul style={{ fontSize: '13px', lineHeight: '19px' }}>{children}</ul>
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
      ? fields.level.replace(/<\/?[^>]+(>|$)/g, '')
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
                    <Icon name="book" inline={true} />
                    <span className="ml3 txt-capitalize">
                      {ReactHtmlParser(type)}
                    </span>
                  </div>
                ) : (
                  ''
                )}

                {language ? (
                  <div className="ml12 inline-block">
                    <Icon name="code" inline={true} />
                    <span className="ml6">{ReactHtmlParser(language)}</span>
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
              <div>{ReactHtmlParser(removeMd(fields.excerpt))}</div>
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

  render() {
    return (
      <div ref={this.setAnchor}>
        <SearchProvider
          config={{
            apiConnector: connector
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

export default Search;
