import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from '../../../../card-container/card-container';
import Card from '../../../../card/card';
import ControlSwitch from '@mapbox/mr-ui/control-switch';
import Icon from '@mapbox/mr-ui/icon';
import classnames from 'classnames';

export default class LayoutExamples extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTopic: undefined,
      activeLanguage: undefined,
      activeLevel: undefined,
      activeVideo: false
    };
  }

  componentDidMount() {
    if ('URLSearchParams' in window) {
      // if url query param is set then update the state
      const query = new URLSearchParams(window.location.search);
      if (query.get('topic'))
        this.setState({ activeTopic: query.get('topic') });
      if (query.get('language'))
        this.setState({ activeLanguage: query.get('language') });
      if (query.get('level'))
        this.setState({ activeLevel: parseInt(query.get('level')) });
      if (query.get('videos'))
        this.setState({ activeVideo: query.get('videos') === 'true' });
    }
  }

  setQueryString = (label, value) => {
    if ('URLSearchParams' in window) {
      let searchParams = new URLSearchParams(window.location.search);
      if (value) searchParams.set(label, value);
      else searchParams.delete(label);
      history.pushState(
        null,
        '',
        window.location.pathname + '?' + searchParams.toString()
      );
    }
  };

  handleTopic = (topic) => {
    const value = topic === this.state.activeTopic ? undefined : topic;
    this.setState(
      {
        activeTopic: value
      },
      () => {
        this.setQueryString('topic', value);
      }
    );
  };

  handleLanguage = (language) => {
    const value = language === this.state.activeLanguage ? undefined : language;
    this.setState(
      {
        activeLanguage: value
      },
      () => {
        this.setQueryString('language', value);
      }
    );
  };

  handleLevel = (level) => {
    const value = level === this.state.activeLevel ? undefined : level;
    this.setState(
      {
        activeLevel: value
      },
      () => {
        this.setQueryString('level', value);
      }
    );
  };

  handleVideos = (bool) => {
    const value = bool === this.state.activeVideo ? false : bool;
    this.setState(
      {
        activeVideo: value
      },
      () => {
        this.setQueryString('videos', value);
      }
    );
  };

  handleReset = () => {
    this.setState(
      {
        activeTopic: undefined,
        activeLanguage: undefined,
        activeLevel: undefined,
        activeVideo: false
      },
      () => {
        // remove all query params
        history.pushState(null, '', window.location.pathname);
      }
    );
  };

  renderFilters = (resultsLength) => {
    const { filters } = this.props;
    const {
      activeTopic,
      activeLanguage,
      activeLevel,
      activeVideo
    } = this.state;

    const FilterSection = ({ title, data, activeItem, handler, isSwitch }) => {
      const levelMap = {
        1: 'Beginner',
        2: 'Intermediate',
        3: 'Advanced'
      };
      return (
        <div className="mb6">
          <span
            id={`filter${title}`}
            className="inline-block txt-fancy txt-s txt-uppercase color-gray txt-spacing0 mr12"
          >
            {title}
          </span>
          {!isSwitch &&
            data.map((item) => {
              const label = title === 'Levels' ? levelMap[item] : item;
              const isActive = activeItem === item;
              return (
                <button
                  key={item}
                  onClick={() => handler(item)}
                  className={classnames(
                    'btn mr6 btn--s round flex-parent-inline flex-parent--center-cross relative',
                    {
                      'is-active pr18': isActive
                    }
                  )}
                >
                  {label}{' '}
                  {isActive ? (
                    <span className="bg-lighten10 absolute top right bottom round-r flex-parent flex-parent--center-cross">
                      <Icon name="close" inline={true} size={14} />
                    </span>
                  ) : (
                    ''
                  )}
                </button>
              );
            })}
          {isSwitch && (
            <div className="inline-block relative" style={{ top: '4px' }}>
              <ControlSwitch
                id={title}
                value={activeItem}
                aria-labelledby={`filter${title}`}
                onChange={(value) => handler(value)}
              />
            </div>
          )}
        </div>
      );
    };

    return (
      <div className="mb36">
        <div className="mb12">
          {filters.topics && filters.topics.length > 1 && (
            <FilterSection
              title="Topics"
              data={filters.topics}
              activeItem={activeTopic}
              handler={this.handleTopic}
            />
          )}
          {filters.languages && filters.languages.length > 1 && (
            <FilterSection
              title="Languages"
              data={filters.languages}
              activeItem={activeLanguage}
              handler={this.handleLanguage}
            />
          )}
          {filters.levels && filters.levels.length > 1 && (
            <FilterSection
              title="Levels"
              data={filters.levels}
              activeItem={activeLevel}
              handler={this.handleLevel}
            />
          )}
          {filters.videos && filters.videos.length > 0 && (
            <FilterSection
              title="Videos"
              activeItem={activeVideo}
              handler={this.handleVideos}
              isSwitch={true}
            />
          )}
        </div>
        {activeTopic || activeLanguage || activeLevel || activeVideo ? (
          <div className="">
            <div className="inline-block mr12">
              {resultsLength === 0
                ? 'No results found.'
                : `Found ${resultsLength} result${
                    resultsLength === 1 ? '' : 's'
                  }.`}
            </div>
            <button
              onClick={() => this.handleReset()}
              className="btn btn--s btn--stroke round"
            >
              Reset filters
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  };

  renderThumbnail = (thumbnail, AppropriateImage) => {
    // if thumbnail has an image extenstion, handle the image
    if (/\.png|jpeg|jpg|gif$/.exec(thumbnail)) {
      return (
        <div
          className="absolute top bottom w-full h-full round"
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        />
      );
    } else if (AppropriateImage && thumbnail) {
      // if thumbnail has AppropriateImage function and thumbnail exists, handle with AppropriateImage
      return (
        <AppropriateImage
          style={{
            borderRadius: '4px'
          }}
          imageId={thumbnail}
          background={true}
        />
      );
    } else {
      // else return nothing
      return undefined;
    }
  };

  // filters available pages based on active filters
  filterPages = () => {
    const { filters } = this.props;
    const {
      activeTopic,
      activeLanguage,
      activeLevel,
      activeVideo
    } = this.state;

    let filteredPages = filters.pages;

    if (activeTopic)
      filteredPages = filteredPages.filter(
        (f) => f.topics.indexOf(activeTopic) > -1
      );
    if (activeLanguage)
      filteredPages = filteredPages.filter(
        (f) => f.language.indexOf(activeLanguage) > -1
      );

    if (activeLevel)
      filteredPages = filteredPages.filter((f) => f.level === activeLevel);

    if (activeVideo) filteredPages = filteredPages.filter((f) => f.video);
    return filteredPages;
  };

  render() {
    const { frontMatter, AppropriateImage } = this.props;
    const {
      fullWidthCards,
      hideCardDescription,
      hideCardLanguage,
      cardColSize
    } = frontMatter;

    const filteredPages = this.filterPages();

    return (
      <React.Fragment>
        {this.renderFilters(filteredPages.length)}
        {filteredPages.length > 0 && (
          <CardContainer
            cardColSize={cardColSize}
            fullWidthCards={fullWidthCards ? fullWidthCards : false} // default is false
            cards={filteredPages.map((page) => (
              <Card
                key={page.title}
                title={page.title}
                description={hideCardDescription ? undefined : page.description}
                path={page.path}
                thumbnail={
                  page.thumbnail
                    ? this.renderThumbnail(page.thumbnail, AppropriateImage)
                    : undefined
                }
                level={page.level}
                language={
                  hideCardLanguage
                    ? undefined
                    : page.language
                    ? page.language.join(', ')
                    : undefined
                }
              />
            ))}
          />
        )}
      </React.Fragment>
    );
  }
}

LayoutExamples.propTypes = {
  filters: PropTypes.shape({
    topics: PropTypes.array,
    languages: PropTypes.array,
    levels: PropTypes.array,
    videos: PropTypes.array,
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        path: PropTypes.string,
        thumbnail: PropTypes.string,
        level: PropTypes.number,
        language: PropTypes.array
      })
    ).isRequired
  }),
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fullWidthCards: PropTypes.bool,
    hideCardDescription: PropTypes.bool,
    hideCardLanguage: PropTypes.bool,
    cardColSize: PropTypes.number
  }).isRequired,
  AppropriateImage: PropTypes.func
};
