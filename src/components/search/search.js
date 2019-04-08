import React from 'react';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import Popover from '@mapbox/mr-ui/popover';
import { SearchDriver } from '@elastic/search-ui';
import { SearchProvider, Results, SearchBox } from '@elastic/react-search-ui';
import LevelIndicator from '../level-indicator/level-indicator';
import ReactHtmlParser from 'react-html-parser';
import Icon from '@mapbox/mr-ui/icon';

const connector = new SiteSearchAPIConnector({
  engineKey: 'zpAwGSb8YMXtF9yDeS5K', // public engine key
  engineName: 'docs',
  documentType: ['page']
});

const driver = new SearchDriver({
  apiConnector: connector
});

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { popoverOpen: false };
    this.togglePopover = this.togglePopover.bind(this);
    this.setAnchor = this.setAnchor.bind(this);
    this.getAnchor = this.getAnchor.bind(this);
    this.ignore = this.ignore.bind(this);
    this.renderPopover = this.renderPopover.bind(this);
  }

  togglePopover = () => {
    this.setState(state => ({ popoverOpen: !state.popoverOpen }));
  };

  setAnchor(el) {
    this.anchor = el;
  }

  getAnchor() {
    return this.anchor;
  }

  ignore(el) {
    return el === this.getAnchor();
  }

  renderPopover = ({ children }) => {
    if (!this.state.popoverOpen) {
      return null;
    }
    return children.length ? (
      <Popover
        allowPlacementAxisChange={false}
        getAnchorElement={this.getAnchor}
        onExit={this.togglePopover}
        ignoreClickWithinElement={this.ignore}
        alignment="bottom"
        placement="bottom"
        receiveFocus={false}
        passthroughProps={{
          style: { maxWidth: 400, maxHeight: 400 },
          className:
            'color-text bg-white shadow-darken25 round px12 py12 scroll-auto scroll-styled'
        }}
      >
        <ul>{children}</ul>
      </Popover>
    ) : (
      ''
    );
  };

  results = ({ children }) => this.renderPopover({ children });

  searchBox = props => {
    return (
      <div className="relative">
        <div className="absolute flex-parent flex-parent--center-cross flex-parent--center-main w36 h36">
          <svg className="icon">
            <use xlinkHref="#icon-search" />
          </svg>
        </div>
        {driver.getState().isLoading && props.value ? (
          <div className="absolute top right flex-parent flex-parent--center-cross flex-parent--center-main w36 h36">
            <span className="loading loading--s" />
          </div>
        ) : (
          ''
        )}
        <input
          className="input px36"
          onChange={e => {
            if (e.target.value === '' || !e.target.value) {
              // if no value, close popover and clear driver
              this.setState({ popoverOpen: false });
              driver.getActions().reset();
            } else {
              this.setState({ popoverOpen: true });
            }
            props.onChange(e);
          }}
          type="text"
          value={props.value}
          placeholder="Search&#8230;"
          onFocus={e => {
            // if there was a search and query and users clicks on input, open the popover
            if (e.target.value && !this.state.popoverOpen) this.togglePopover();
          }}
        />
      </div>
    );
  };

  result({ fields, onClickLink, title, url }) {
    // dummy data until we've update meta in swiftype
    const site = '' || fields.site;
    const type = '' || fields.type;
    const level = '' || fields.level;
    const language = '' || fields.codeLanguage;

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
                  {ReactHtmlParser(title)}
                </span>
              </div>
              <div className="txt-s txt-bold">
                {type ? (
                  <div className="inline-block">
                    <Icon name="book" inline={true} />
                    <span className="ml3">{type}</span>
                  </div>
                ) : (
                  ''
                )}

                {language ? (
                  <div className="ml12 inline-block">
                    <Icon name="code" inline={true} />
                    <span className="ml6">{language.join(', ')}</span>
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

  render() {
    return (
      <div ref={this.setAnchor}>
        <SearchProvider
          config={{
            apiConnector: connector
          }}
        >
          {() => (
            <div className="App">
              <SearchBox searchAsYouType={true} view={this.searchBox} />
              <Results
                renderResult={this.result}
                view={this.results}
                titleField="title"
                urlField="url"
              />
            </div>
          )}
        </SearchProvider>
      </div>
    );
  }
}

export default Search;
