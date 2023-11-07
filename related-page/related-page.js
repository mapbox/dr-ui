function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import TroubleshootImage from '../troubleshoot-image/troubleshoot-image';
import BookletImage from '../booklet-image/booklet-image';
import BookImage from '../book-image/book-image';
import GlossaryImage from '../glossary-image/glossary-image';
import ExampleImage from '../example-image/example-image';
import PlaygroundImage from '../playground-image/playground-image';
import VideoModal from '../video-modal/video-modal';
import classnames from 'classnames';
import { VideoThumbnail, VideoPlayImage } from './video';
class RelatedPage extends React.PureComponent {
  constructor(props) {
    super(props);
    _defineProperty(this, "handleClick", () => {
      if (this.props.youtubeId) {
        this.setState({
          modalOpen: true
        });
        if (window && window.analytics) {
          analytics.track('Opened video from RelatedPage');
        }
      }
    });
    _defineProperty(this, "closeModal", () => this.setState({
      modalOpen: false
    }));
    this.state = {
      modalOpen: false
    };
  }
  renderModal() {
    if (!this.state.modalOpen) {
      return null;
    }
    return /*#__PURE__*/React.createElement(VideoModal, {
      title: this.props.title,
      closeModal: this.closeModal,
      youtubeId: this.props.youtubeId
    });
  }
  render() {
    const {
      props
    } = this;
    const contentTypes = {
      tutorial: {
        label: 'tutorial',
        image: /*#__PURE__*/React.createElement(BookletImage, null),
        color: 'green'
      },
      troubleshooting: {
        label: 'troubleshooting',
        image: /*#__PURE__*/React.createElement(TroubleshootImage, null),
        color: 'red'
      },
      guide: {
        label: 'guide',
        image: /*#__PURE__*/React.createElement(BookImage, null),
        color: 'blue'
      },
      glossary: {
        label: 'glossary',
        image: /*#__PURE__*/React.createElement(GlossaryImage, null),
        color: 'orange'
      },
      example: {
        label: 'example',
        image: /*#__PURE__*/React.createElement(ExampleImage, null),
        color: 'pink'
      },
      video: {
        label: 'video',
        color: 'purple',
        image: props.youtubeId ? /*#__PURE__*/React.createElement(VideoThumbnail, null, /*#__PURE__*/React.createElement("img", {
          src: `https://img.youtube.com/vi/${this.props.youtubeId}/maxresdefault.jpg`,
          alt: "Youtube Video Thumbnail"
        })) : /*#__PURE__*/React.createElement(VideoPlayImage, {
          fallbackIcon: true
        })
      },
      playground: {
        label: 'playground',
        image: /*#__PURE__*/React.createElement(PlaygroundImage, null),
        color: 'gray'
      },
      default: {
        label: 'related',
        color: 'gray'
      }
    };
    const theme = contentTypes[this.props.contentType];

    // When label prop is set, override theme label
    if (props.label) theme.label = props.label;
    const showVideoModal = props.youtubeId && props.contentType === 'video';
    const showVideoThumbnail = props.contentType === 'video' && props.youtubeId;
    const contentContainerClasses = classnames('', {
      'flex-ml flex--start-cross': showVideoThumbnail,
      'flex flex--row': !showVideoThumbnail
    });
    const imageClasses = classnames('', {
      'relative w-full wmin120 wmax240-ml mr18-ml mt-neg12': showVideoThumbnail,
      'pt6 mr18 none block-mm': !showVideoThumbnail
    });
    const contentClasses = classnames('', {
      wmin180: showVideoThumbnail
    });
    const Element = showVideoModal ? 'button' : 'a';
    const elementProps = {
      ...(showVideoModal && {
        onClick: this.handleClick
      }),
      ...(!showVideoModal && {
        href: props.url
      })
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Element, _extends({}, elementProps, {
      className: `unprose block cursor-pointer color-${theme.color} color-${theme.color}-dark-on-hover transition mb18`
    }), /*#__PURE__*/React.createElement("div", {
      className: `round flex flex--stretch-cross border border--${theme.color}-light border--${theme.color}-dark-on-hover border--2 transition`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-child-grow px18 pt30 pb18",
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: contentContainerClasses
    }, theme.image && /*#__PURE__*/React.createElement("div", {
      className: imageClasses
    }, theme.image), /*#__PURE__*/React.createElement("div", {
      className: contentClasses
    }, /*#__PURE__*/React.createElement("div", {
      className: `txt-fancy txt-uppercase txt-s txt-spacing1 mt-neg12 mb6 ${`color-${theme.color}-dark`}`
    }, theme.label), /*#__PURE__*/React.createElement("div", {
      className: "color-gray-dark color-black-on-hover transition"
    }, /*#__PURE__*/React.createElement("div", {
      className: "txt-bold"
    }, props.title), props.children)))), !showVideoModal && /*#__PURE__*/React.createElement("div", {
      className: "flex-child-no-shrink w30 flex flex--center-cross border-l",
      style: {
        borderColor: 'inherit',
        borderLeftWidth: '2px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 30
    })))), showVideoModal && this.renderModal());
  }
}
RelatedPage.defaultProps = {
  contentType: 'default'
};
export default RelatedPage;