function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
export const filterOptions = ['products', 'topics', 'languages', 'level', 'videos', 'search'];
export default class ExampleIndex extends React.PureComponent {
  constructor(props) {
    super(props);
    _defineProperty(this, "handleInput", (value, id) => {
      const obj = {};
      obj[id] = value;
      this.setState(obj, () => {
        this.setQueryString(id, value);
      });
    });
    // make sure query value is valid before setting the state
    _defineProperty(this, "setStateIfValid", (value, options, id) => {
      // if query string value is valid, set the state
      if (options.indexOf(value) > -1) {
        const obj = {};
        obj[id] = value;
        this.setState(obj);
      } else {
        // otherwise remove the query string
        this.setQueryString(id, undefined);
      }
    });
    // set the query string or delete it if value is undefined
    _defineProperty(this, "setQueryString", (label, value) => {
      // check if browser supports URLSearchParams API
      if ('URLSearchParams' in window) {
        // get the current query params
        const searchParams = new URLSearchParams(window.location.search);
        // if value exists, set new query param
        if (value) searchParams.set(label, value);
        // otherwise remove the query param
        else searchParams.delete(label);
        // update the url with the changed query params without reloading the page
        history.pushState(null, '', window.location.pathname + '?' + searchParams.toString());
      }
    });
    // reset filters and remove query string parameters
    _defineProperty(this, "handleReset", () => {
      this.setState({
        topic: undefined,
        language: undefined,
        level: undefined,
        videos: false,
        product: undefined,
        search: undefined
      }, () => {
        // remove all query params
        history.pushState(null, '', window.location.pathname);
      });
    });
    // return true if array has more than one item
    _defineProperty(this, "hasMoreThanOne", (arr, field) => arr[field] && arr[field].length > 1);
    // return true if filter appears in showFilters array
    _defineProperty(this, "inShowFilters", field => this.props.frontMatter.showFilters.indexOf(field) > -1);
    // return true if filter can be displayed
    _defineProperty(this, "filterisAvailable", (filters, field) => this.hasMoreThanOne(filters, field) && this.inShowFilters(field));
    // build filters
    _defineProperty(this, "renderFilters", () => {
      const {
        filters,
        frontMatter
      } = this.props;
      const {
        topic,
        language,
        level,
        videos,
        product,
        search
      } = this.state;

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
        frontMatter.showFilters = frontMatter.showFilters.filter(filter => availableFilters[filter]);
      }

      // if showFilters length is 0, do not show filters
      if (frontMatter.showFilters.length === 0) return null;
      return /*#__PURE__*/React.createElement("div", {
        className: "mb18 mb0-mxl"
      }, /*#__PURE__*/React.createElement(AsideHeading, null, "Filters"), /*#__PURE__*/React.createElement("div", {
        className: "grid grid--gut6 mb18"
      }, availableFilters.search && /*#__PURE__*/React.createElement(FilterSection, {
        title: "Search",
        id: "search",
        activeItem: search,
        handleInput: this.handleInput,
        isText: true,
        placeholder: "Search title and description\u2026"
      }), availableFilters.products && /*#__PURE__*/React.createElement(FilterSection, {
        title: "Products",
        data: filters.products,
        id: "product",
        activeItem: product,
        handleInput: this.handleInput
      }), availableFilters.topics && /*#__PURE__*/React.createElement(FilterSection, {
        title: "Topics",
        data: filters.topics,
        id: "topic",
        activeItem: topic,
        handleInput: this.handleInput
      }), availableFilters.languages && /*#__PURE__*/React.createElement(FilterSection, {
        title: "Languages",
        data: filters.languages,
        id: "language",
        activeItem: language,
        handleInput: this.handleInput
      }), availableFilters.levels && /*#__PURE__*/React.createElement(FilterSection, {
        title: "Levels",
        data: filters.levels,
        id: "level",
        activeItem: level,
        handleInput: this.handleInput
      }), availableFilters.videos && /*#__PURE__*/React.createElement(FilterSection, {
        title: "Videos only",
        id: "videos",
        activeItem: videos,
        isSwitch: true,
        handleInput: this.handleInput
      })));
    });
    // return thumbnail if available
    _defineProperty(this, "renderThumbnail", (thumbnail, AppropriateImage) => {
      // if thumbnail has an image extenstion, handle the image
      if (/\.png|jpeg|jpg|gif$/.exec(thumbnail)) {
        return /*#__PURE__*/React.createElement("div", {
          className: "absolute top bottom w-full h-full round",
          style: {
            backgroundImage: `url(${thumbnail})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }
        });
      } else if (AppropriateImage && thumbnail) {
        // if thumbnail has AppropriateImage function and thumbnail exists, handle with AppropriateImage
        return /*#__PURE__*/React.createElement(AppropriateImage, {
          style: {
            borderRadius: '4px'
          },
          imageId: thumbnail,
          background: true
        });
      } else {
        // else return nothing
        return undefined;
      }
    });
    // filter available pages based on active filters
    _defineProperty(this, "filterPages", () => {
      const {
        filters
      } = this.props;
      const {
        topic,
        language,
        level,
        videos,
        product,
        search
      } = this.state;
      let filteredPages = filters.pages;
      if (topic) {
        filteredPages = filteredPages.filter(f => f.topics && f.topics.indexOf(topic) > -1 || f.topic && f.topic === topic);
      }
      if (product) {
        filteredPages = filteredPages.filter(f => f.products.indexOf(product) > -1);
      }
      if (language) {
        filteredPages = filteredPages.filter(f => f.language.indexOf(language) > -1);
      }
      if (level) {
        filteredPages = filteredPages.filter(f => f.level === parseInt(level));
      }
      if (videos) {
        filteredPages = filteredPages.filter(f => f.video);
      }
      if (search) {
        const trimmedSearch = search.toLowerCase().trim();
        filteredPages = filteredPages.filter(f => f.title && f.title.toLowerCase().indexOf(trimmedSearch) > -1 || f.description && f.description.toLowerCase().indexOf(trimmedSearch) > -1);
      }
      return filteredPages;
    });
    this.state = {
      topic: undefined,
      language: undefined,
      level: undefined,
      videos: false,
      product: undefined,
      search: undefined
    };
  }
  componentDidMount() {
    const {
      filters
    } = this.props;
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
        this.setStateIfValid(query.get('language'), filters.languages, 'language');
      }
      if (query.get('level')) {
        this.setStateIfValid(parseInt(query.get('level')), filters.levels, 'level');
      }
      if (query.get('search')) {
        this.setState({
          search: `${query.get('search')}`
        });
      }
      if (query.get('videos')) {
        this.setStateIfValid(query.get('videos') === 'true', [true], 'videos');
      }
    }
  }
  render() {
    const {
      frontMatter,
      AppropriateImage,
      children
    } = this.props;
    // set default filters
    if (!frontMatter.showFilters) frontMatter.showFilters = filterOptions;
    const {
      fullWidthCards,
      hideCardDescription,
      hideCardLanguage,
      cardColSize
    } = frontMatter;
    const filteredPages = this.filterPages();
    const {
      topic,
      language,
      level,
      videos,
      product,
      search
    } = this.state;
    const showResultIndicator = topic || language || level || videos || product || search;
    const resultsLength = filteredPages.length;
    return /*#__PURE__*/React.createElement(ContentWrapper, _extends({}, this.props, {
      customAside: this.renderFilters()
    }), children && /*#__PURE__*/React.createElement("div", {
      className: "mb18"
    }, children), showResultIndicator && /*#__PURE__*/React.createElement("div", {
      className: "mb18"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-block mr12 color-gray"
    }, resultsLength === 0 ? 'No results found.' : `Found ${resultsLength} result${resultsLength === 1 ? '' : 's'}.`), /*#__PURE__*/React.createElement("button", {
      onClick: this.handleReset,
      className: "btn btn--s btn--gray btn--stroke round"
    }, "Reset filters")), resultsLength > 0 && /*#__PURE__*/React.createElement(CardContainer, {
      cardColSize: cardColSize,
      fullWidthCards: fullWidthCards ? fullWidthCards : false // default is false
      ,
      cards: filteredPages.map(page => /*#__PURE__*/React.createElement(Card, {
        key: page.title,
        title: page.title,
        description: hideCardDescription ? undefined : page.description,
        path: page.path,
        thumbnail: page.thumbnail ? this.renderThumbnail(page.thumbnail, AppropriateImage) : undefined,
        level: page.level,
        language: hideCardLanguage ? undefined : page.language ? page.language.join(', ') : undefined,
        link: page.link
      }))
    }));
  }
}
class FilterSection extends React.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "renderInput", () => {
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
      if (isText) return /*#__PURE__*/React.createElement(ControlText, {
        placeholder: placeholder,
        id: id,
        value: activeItem,
        onChange: this.props.handleInput,
        themeControlInput: "input input--s relative wmax180",
        themeLabel: themeLabel,
        label: title,
        style: {
          top: '2px'
        } /* make input align with select on smaller screens */
      });else if (isSwitch) return /*#__PURE__*/React.createElement(ControlSwitch, {
        id: id,
        value: activeItem,
        label: title,
        themeLabel: `${themeLabel} ml6`,
        themeControlSwitch: "switch--s-label switch--gray",
        onChange: this.props.handleInput
      });else return /*#__PURE__*/React.createElement(ControlSelect, {
        id: id,
        label: title,
        value: activeItem,
        themeLabel: `${themeLabel} w70`,
        themeControlSelect: "select select--s py3 pl6 select--stroke",
        onChange: this.props.handleInput,
        options: [{
          label: `All ${title.toLowerCase()}`,
          value: ''
        }].concat(data.map(datum => ({
          label: title === 'Levels' ? levels[datum].label : datum,
          value: datum
        })))
      });
    });
  }
  render() {
    const {
      isSwitch
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      className: classnames('col w-1/2 w-1/3-ml w-full-mxl', {
        mt12: isSwitch,
        mb6: !isSwitch
      })
    }, this.renderInput());
  }
}