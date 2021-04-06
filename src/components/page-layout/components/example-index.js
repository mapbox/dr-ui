import React from 'react';
import PropTypes from 'prop-types';
import CardContainer from '../../card-container/card-container';
import { AsideHeading } from '../../on-this-page/helpers';
import Card from '../../card/card';
import { levels } from '../../level-indicator/level-indicator';
import classnames from 'classnames';
import ControlSwitch from '@mapbox/mr-ui/control-switch';
import ControlSelect from '@mapbox/mr-ui/control-select';
import ControlText from '@mapbox/mr-ui/control-text';
import { ContentWrapper } from './content';

// options of frontMatter.showFilters
export const filterOptions = [
  'products',
  'topics',
  'languages',
  'level',
  'videos',
  'search'
];

export default class ExampleIndex extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      topic: undefined,
      language: undefined,
      level: undefined,
      videos: false,
      product: undefined,
      search: undefined
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
      if (query.get('search')) {
        this.setState({ search: `${query.get('search')}` });
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
    // check if browser supports URLSearchParams API
    if ('URLSearchParams' in window) {
      // get the current query params
      let searchParams = new URLSearchParams(window.location.search);
      // if value exists, set new query param
      if (value) searchParams.set(label, value);
      // otherwise remove the query param
      else searchParams.delete(label);
      // update the url with the changed query params without reloading the page
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
        product: undefined,
        search: undefined
      },
      () => {
        // remove all query params
        history.pushState(null, '', window.location.pathname);
      }
    );
  };

  // return true if array has more than one item
  hasMoreThanOne = (arr, field) => arr[field] && arr[field].length > 1;

  // return true if filter appears in showFilters array
  inShowFilters = (field) =>
    this.props.frontMatter.showFilters.indexOf(field) > -1;

  // return true if filter can be displayed
  filterisAvailable = (filters, field) =>
    this.hasMoreThanOne(filters, field) && this.inShowFilters(field);

  // build filters
  renderFilters = () => {
    const { filters, frontMatter } = this.props;
    const { topic, language, level, videos, product, search } = this.state;

    // check each filter to make sure it has more than one option
    // and that it appears in "showFilters"
    const availableFilters = {
      products: this.filterisAvailable(filters, 'products'),
      topics: this.filterisAvailable(filters, 'topics'),
      languages: this.filterisAvailable(filters, 'languages'),
      levels: this.filterisAvailable(filters, 'levels'),
      videos: filters.videos && this.inShowFilters('videos'),
      search: this.inShowFilters('search')
    };

    // remove any item from showFilters that is not true in "availableFilters"
    if (frontMatter.showFilters) {
      frontMatter.showFilters = frontMatter.showFilters.filter(
        (filter) => availableFilters[filter]
      );
    }

    // if showFilters length is 0, do not show filters
    if (frontMatter.showFilters.length === 0) return null;

    return (
      <div className="mb18 mb0-mxl">
        <AsideHeading>Filters</AsideHeading>
        <div className="grid grid--gut6">
          {availableFilters.search && (
            <FilterSection
              title="Search"
              id="search"
              activeItem={search}
              handleInput={this.handleInput}
              isText={true}
              placeholder="Search title and description&hellip;"
            />
          )}
          {availableFilters.products && (
            <FilterSection
              title="Products"
              data={filters.products}
              id="product"
              activeItem={product}
              handleInput={this.handleInput}
            />
          )}
          {availableFilters.topics && (
            <FilterSection
              title="Topics"
              data={filters.topics}
              id="topic"
              activeItem={topic}
              handleInput={this.handleInput}
            />
          )}
          {availableFilters.languages && (
            <FilterSection
              title="Languages"
              data={filters.languages}
              id="language"
              activeItem={language}
              handleInput={this.handleInput}
            />
          )}
          {availableFilters.levels && (
            <FilterSection
              title="Levels"
              data={filters.levels}
              id="level"
              activeItem={level}
              handleInput={this.handleInput}
            />
          )}
          {availableFilters.videos && (
            <FilterSection
              title="Videos only"
              id="videos"
              activeItem={videos}
              isSwitch={true}
              handleInput={this.handleInput}
            />
          )}
        </div>
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
    const { topic, language, level, videos, product, search } = this.state;

    let filteredPages = filters.pages;

    if (topic) {
      filteredPages = filteredPages.filter(
        (f) =>
          (f.topics && f.topics.indexOf(topic) > -1) ||
          (f.topic && f.topic === topic)
      );
    }

    if (product) {
      filteredPages = filteredPages.filter(
        (f) => f.products.indexOf(product) > -1
      );
    }

    if (language) {
      filteredPages = filteredPages.filter(
        (f) => f.language.indexOf(language) > -1
      );
    }

    if (level) {
      filteredPages = filteredPages.filter((f) => f.level === parseInt(level));
    }

    if (videos) {
      filteredPages = filteredPages.filter((f) => f.video);
    }

    if (search) {
      const trimmedSearch = search.toLowerCase().trim();
      filteredPages = filteredPages.filter(
        (f) =>
          (f.title && f.title.toLowerCase().indexOf(trimmedSearch) > -1) ||
          (f.description &&
            f.description.toLowerCase().indexOf(trimmedSearch) > -1)
      );
    }
    return filteredPages;
  };

  render() {
    const { frontMatter, AppropriateImage, children } = this.props;
    // set default filters
    if (!frontMatter.showFilters) frontMatter.showFilters = filterOptions;

    const {
      fullWidthCards,
      hideCardDescription,
      hideCardLanguage,
      cardColSize
    } = frontMatter;

    const filteredPages = this.filterPages();
    const { topic, language, level, videos, product, search } = this.state;
    const showResultIndicator =
      topic || language || level || videos || product || search;
    const resultsLength = filteredPages.length;
    return (
      <ContentWrapper {...this.props} customAside={this.renderFilters()}>
        {/* If the example index's jsxtreme is not empty, show it before the examples */}
        {children && <div className="mb18">{children}</div>}
        {showResultIndicator && (
          <div className="mb18">
            <div className="inline-block mr12 color-gray">
              {resultsLength === 0
                ? 'No results found.'
                : `Found ${resultsLength} result${
                    resultsLength === 1 ? '' : 's'
                  }.`}
            </div>
            <button
              onClick={this.handleReset}
              className="btn btn--s btn--gray btn--stroke round"
            >
              Reset filters
            </button>
          </div>
        )}
        {resultsLength > 0 && (
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
      </ContentWrapper>
    );
  }
}

ExampleIndex.propTypes = {
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
  children: PropTypes.node,
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    fullWidthCards: PropTypes.bool,
    hideCardDescription: PropTypes.bool,
    hideCardLanguage: PropTypes.bool,
    cardColSize: PropTypes.number,
    showFilters: PropTypes.arrayOf(PropTypes.oneOf(filterOptions))
  }).isRequired,
  AppropriateImage: PropTypes.func
};

class FilterSection extends React.PureComponent {
  handleInput = (value, id) => this.props.handleInput(value, id);
  renderInput = () => {
    const {
      title,
      data,
      activeItem,
      isSwitch,
      id,
      isText,
      placeholder
    } = this.props;
    const themeLabel = 'txt-s txt-bold color-darken75';

    if (isText)
      return (
        <ControlText
          placeholder={placeholder}
          id={id}
          value={activeItem}
          onChange={this.handleInput}
          themeControlInput="input input--s relative wmax180"
          themeLabel={themeLabel}
          label={title}
          style={{
            top: '2px'
          }} /* make input align with select on smaller screens */
        />
      );
    else if (isSwitch)
      return (
        <ControlSwitch
          id={id}
          value={activeItem}
          label={title}
          themeLabel={`${themeLabel} ml6`}
          themeControlSwitch="switch--s-label switch--gray"
          onChange={this.handleInput}
        />
      );
    else
      return (
        <ControlSelect
          id={id}
          label={title}
          value={activeItem}
          themeLabel={`${themeLabel} w70`}
          themeControlSelect="select select--s"
          onChange={this.handleInput}
          options={[
            {
              label: `All ${title.toLowerCase()}`,
              value: ''
            }
          ].concat(
            data.map((datum) => ({
              label: title === 'Levels' ? levels[datum].label : datum,
              value: datum
            }))
          )}
        />
      );
  };

  render() {
    const { isSwitch } = this.props;
    return (
      <div
        className={classnames('col col--6 col--4-ml col--12-mxl', {
          mt12: isSwitch,
          mb6: !isSwitch
        })}
      >
        {this.renderInput()}
      </div>
    );
  }
}

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  data: PropTypes.array,
  activeItem: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isSwitch: PropTypes.bool,
  isText: PropTypes.bool,
  placeholder: PropTypes.string
};
