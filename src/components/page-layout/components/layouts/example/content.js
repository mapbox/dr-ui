import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from '../../../../card-container/card-container';
import Card from '../../../../card/card';
import ControlSwitch from '@mapbox/mr-ui/control-switch';
import ControlSelect from '@mapbox/mr-ui/control-select';

// options of frontMatter.showFilters
export const filterOptions = [
  'products',
  'topics',
  'languages',
  'levels',
  'videos'
];

export default class LayoutExamples extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      topic: undefined,
      language: undefined,
      level: undefined,
      videos: false,
      product: undefined
    };
  }

  handleInput = (value, id) => {
    const obj = {};
    obj[id] = value;
    this.setState(obj, () => {
      this.setQueryString(id, value);
    });
  };

  componentDidMount() {
    const { filters } = this.props;
    // if url query param is set then update the state
    if ('URLSearchParams' in window) {
      const query = new URLSearchParams(window.location.search);
      if (query.get('topic')) {
        this.setStateIfValid(query.get('topic'), filters.topics, 'topic');
      }
      if (query.get('product')) {
        this.setStateIfValid(query.get('product'), filters.products, 'product');
      }
      if (query.get('language')) {
        this.setStateIfValid(
          query.get('language'),
          filters.languages,
          'language'
        );
      }
      if (query.get('level')) {
        this.setStateIfValid(
          parseInt(query.get('level')),
          filters.levels,
          'level'
        );
      }
      if (query.get('videos')) {
        this.setStateIfValid(query.get('videos') === 'true', [true], 'videos');
      }
    }
  }

  // make sure query value is valid before setting the state
  setStateIfValid = (value, options, id) => {
    // if query string value is valid, set the state
    if (options.indexOf(value) > -1) {
      const obj = {};
      obj[id] = value;
      this.setState(obj);
    } else {
      // otherwise remove the query string
      this.setQueryString(id, undefined);
    }
  };

  // set the query string or delete it if value is undefined
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

  // reset filters and remove query string parameters
  handleReset = () => {
    this.setState(
      {
        topic: undefined,
        language: undefined,
        level: undefined,
        videos: false,
        product: undefined
      },
      () => {
        // remove all query params
        history.pushState(null, '', window.location.pathname);
      }
    );
  };

  // build filters
  renderFilters = (resultsLength) => {
    const { filters, frontMatter } = this.props;
    const { topic, language, level, videos, product } = this.state;

    const FilterSection = ({ title, data, activeItem, isSwitch, id }) => {
      const levelMap = {
        1: 'Beginner',
        2: 'Intermediate',
        3: 'Advanced'
      };
      const themeLabel = 'txt-fancy txt-s color-gray txt-uppercase';
      return (
        <div className="mb6">
          {isSwitch ? (
            <ControlSwitch
              id={id}
              value={activeItem}
              label={title}
              themeLabel={`${themeLabel} ml12`}
              themeControlSwitch="switch--s-label switch--gray"
              onChange={(value, id) => this.handleInput(value, id)}
            />
          ) : (
            <ControlSelect
              id={id}
              label={title}
              value={activeItem}
              themeLabel={`${themeLabel} w70`}
              themeControlSelect="select select--s"
              themeControlSelectContainer="flex-child ml12"
              themeControlWrapper="flex-parent"
              onChange={(value, id) => {
                this.handleInput(value, id);
              }}
              options={[
                {
                  label: `All ${title.toLowerCase()}`,
                  value: ''
                }
              ].concat(
                data.map((datum) => ({
                  label: title === 'Levels' ? levelMap[datum] : datum,
                  value: datum
                }))
              )}
            />
          )}
        </div>
      );
    };

    return (
      <div className="mb36" data-swiftype-index="false">
        <div className="mb12 border-b border--darken10 pb12">
          {filters.products &&
            filters.products.length > 1 &&
            frontMatter.showFilters.indexOf('products') > -1 && (
              <FilterSection
                title="Products"
                data={filters.products}
                id="product"
                activeItem={product}
              />
            )}
          {filters.topics &&
            filters.topics.length > 1 &&
            frontMatter.showFilters.indexOf('topics') > -1 && (
              <FilterSection
                title="Topics"
                data={filters.topics}
                id="topic"
                activeItem={topic}
              />
            )}
          {filters.languages &&
            filters.languages.length > 1 &&
            frontMatter.showFilters.indexOf('languages') > -1 && (
              <FilterSection
                title="Languages"
                data={filters.languages}
                id="language"
                activeItem={language}
              />
            )}
          {filters.levels &&
            filters.levels.length > 1 &&
            frontMatter.showFilters.indexOf('levels') > -1 && (
              <FilterSection
                title="Levels"
                data={filters.levels}
                id="level"
                activeItem={level}
              />
            )}
          {filters.videos && frontMatter.showFilters.indexOf('videos') > -1 && (
            <FilterSection
              title="Videos only"
              id="videos"
              activeItem={videos}
              isSwitch={true}
            />
          )}
        </div>
        {topic || language || level || videos || product ? (
          <div className="">
            <div className="inline-block mr12 color-gray">
              {resultsLength === 0
                ? 'No results found.'
                : `Found ${resultsLength} result${
                    resultsLength === 1 ? '' : 's'
                  }.`}
            </div>
            <button
              onClick={() => this.handleReset()}
              className="btn btn--s btn--gray btn--stroke round"
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

  // return thumbnail if available
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

  // filter available pages based on active filters
  filterPages = () => {
    const { filters } = this.props;
    const { topic, language, level, videos, product } = this.state;

    let filteredPages = filters.pages;

    if (topic)
      filteredPages = filteredPages.filter((f) => f.topics.indexOf(topic) > -1);

    if (product)
      filteredPages = filteredPages.filter(
        (f) => f.products.indexOf(product) > -1
      );
    if (language)
      filteredPages = filteredPages.filter(
        (f) => f.language.indexOf(language) > -1
      );

    if (level)
      filteredPages = filteredPages.filter((f) => f.level === parseInt(level));

    if (videos) filteredPages = filteredPages.filter((f) => f.video);
    return filteredPages;
  };

  render() {
    const { frontMatter, AppropriateImage } = this.props;
    // set default filters
    if (!frontMatter.showFilters) frontMatter.showFilters = filterOptions;
    const {
      fullWidthCards,
      hideCardDescription,
      hideCardLanguage,
      cardColSize
    } = frontMatter;

    const filteredPages = this.filterPages();

    return (
      <div>
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
      </div>
    );
  }
}

LayoutExamples.propTypes = {
  filters: PropTypes.shape({
    topics: PropTypes.array,
    languages: PropTypes.array,
    levels: PropTypes.array,
    videos: PropTypes.bool,
    products: PropTypes.array,
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        path: PropTypes.string,
        thumbnail: PropTypes.string,
        level: PropTypes.number,
        language: PropTypes.array,
        products: PropTypes.array,
        video: PropTypes.bool
      })
    ).isRequired
  }),
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fullWidthCards: PropTypes.bool,
    hideCardDescription: PropTypes.bool,
    hideCardLanguage: PropTypes.bool,
    cardColSize: PropTypes.number,
    showFilters: PropTypes.arrayOf(filterOptions)
  }).isRequired,
  AppropriateImage: PropTypes.func
};
