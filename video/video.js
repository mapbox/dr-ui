function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import { VideoPlayImage } from '../related-page/video';
import * as Sentry from '@sentry/browser';

/*
 * The state defines the user's preferences for the video settings (autoplay and loop).
 * The props for Video will only be taken into account if the user does not prefer reduced motion.
 * In `componentDidMount`, Video will determine the user's settings.
 *  - If the user prefers reduced motion, then Video will use the `state` for the video settings.
 *  - If the user does not prefer reduced motion, then Video will use the props for the video settings.
 */
export default class Video extends React.PureComponent {
  constructor(props) {
    super(props);
    // By default, Video will assume that the user prefers reduced motion
    // show video controls on hover
    _defineProperty(this, "onHover", () => {
      this.video.current.controls = true;
    });
    // hide video controls when user leaves the video container
    _defineProperty(this, "onOut", () => {
      this.video.current.controls = false;
    });
    // check if video is playing (helps us detect if user has autoplay enabled or disabled)
    _defineProperty(this, "onPlay", () => {
      this.setState({
        isPlaying: true
      });
    });
    // check when video stops
    _defineProperty(this, "onStop", () => {
      this.setState({
        isPlaying: false
      });
    });
    // play the video
    _defineProperty(this, "playVideo", () => {
      const playPromise = this.video.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => this.setState({
          isPlaying: true
        })).catch(error => Sentry.captureException(error));
      }
    });
    this.state = {
      isPlaying: false,
      // The video is not playing
      autoPlay: undefined,
      // Turn off autoplay
      loop: undefined // Turn off loop
    };

    this.video = /*#__PURE__*/React.createRef();
  }
  componentDidMount() {
    // check the users preference
    const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    // if `prefers-reduced-motion: reduce` is not set, use props to override state defaults
    if (!prefersReducedMotion) {
      this.setState({
        autoPlay: this.props.autoplay,
        loop: this.props.loop
      });
    }
  }
  render() {
    const {
      src,
      title,
      muted,
      playsInline,
      poster
    } = this.props;
    const {
      isPlaying,
      autoPlay,
      loop
    } = this.state;
    const videoProps = {
      autoPlay,
      loop,
      muted,
      playsInline,
      poster
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "relative flex flex--center-main flex--center-cross bg-gray",
      onMouseOver: this.onHover,
      onMouseLeave: this.onOut,
      onFocus: this.onHover
    }, !isPlaying && /*#__PURE__*/React.createElement("button", {
      onClick: this.playVideo,
      className: "bg-darken75 bg-darken50-on-hover w60 h60 py12 px12 w120-mm h120-mm py18-mm px18-mm round cursor-pointer z1 absolute"
    }, /*#__PURE__*/React.createElement(VideoPlayImage, null)), /*#__PURE__*/React.createElement("video", _extends({}, videoProps, {
      width: "100%",
      className: "block mx-auto",
      src: src,
      type: "video/mp4",
      title: title,
      ref: this.video,
      onPlay: this.onPlay,
      onEnded: this.onStop,
      onPause: this.onStop
    }), /*#__PURE__*/React.createElement("p", null, "Your browser doesn't support HTML5 video. Open", ' ', /*#__PURE__*/React.createElement("a", {
      href: this.props.src
    }, "link to the video"), ".")));
  }
}

// Video will use props if the user does not prefer reduced motion, otherwise it will default to the values in the state. The component will determine if the user prefers reduced motion in componentDidMount and either use the state or props to apply the Video settings.
Video.defaultProps = {
  autoplay: true,
  loop: true,
  muted: true,
  playsInline: true,
  poster: undefined
};