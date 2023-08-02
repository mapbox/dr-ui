function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint react/no-unused-state: off */
/* eslint react/no-unused-prop-types: off */

import React from 'react';
import PropTypes from 'prop-types';
import BookImage from '../book-image/book-image';
import Tooltip from '@mapbox/mr-ui/tooltip';
import Icon from '@mapbox/mr-ui/icon';
import { categories } from './categories';
import { sendToSegment } from './segment';
import { sendToSentry } from './sentry';
import { v4 as uuidv4 } from 'uuid';
const anonymousId = uuidv4();

// Store the initial state so that we can quickly reset it when the user closes feedback
const INITIAL_STATE = {
  user: undefined,
  // Mapbox user id
  anonymousId: undefined,
  // generated annonymousid
  sessionId: undefined,
  // unique session id
  isOpen: false,
  // the user click the button
  category: undefined,
  // the selected feedback category
  categoryType: undefined,
  // the select feedback category type
  feedback: undefined,
  // the value of the textarea
  sentFeedback: false,
  // the user submitted feedback
  contactSupport: false,
  // the users clicked contact support
  helpful: undefined,
  // helpfulness rating as assigned by the selected category
  exited: false // if true, the user clicked "close" before submitting feedback
};

class Feedback extends React.PureComponent {
  constructor(props) {
    super(props);
    // This function returns data for each category and its corresponding category component.
    // By having the data in one place, we can make updates faster.
    // We can also replace "page" for Feedback with `type` in one place for sectioned feedback.
    _defineProperty(this, "categories", () => categories({
      type: this.props.type,
      submitFeedback: this.submitFeedback
    }));
    this.state = {
      ...INITIAL_STATE
    };
    this.openFeedback = this.openFeedback.bind(this);
    this.submitFeedback = this.submitFeedback.bind(this);
    this.closeFeedback = this.closeFeedback.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.categories = this.categories.bind(this);
    this.selectSupport = this.selectSupport.bind(this);
    this.renderWrapper = this.renderWrapper.bind(this);
  }
  // User opens feedback
  openFeedback() {
    if (this.state.user === undefined && typeof MapboxPageShell !== 'undefined') {
      MapboxPageShell.afterUserCheck(() => {
        this.setState({
          user: MapboxPageShell.getUser() || undefined
        });
      });
    }
    this.setState({
      anonymousId: anonymousId,
      sessionId: `${Date.now()}-${anonymousId}`,
      isOpen: true
    }, () => {
      const {
        state,
        props
      } = this;
      // Add row to Segment
      sendToSegment({
        state: state,
        props
      });
    });
  }

  // User select the feedback category
  // Set helpfulness rating based on category
  selectCategory(event) {
    const category = event.target.value;
    // Retrieve value of "helpful" for the selected category
    const {
      helpful
    } = this.categories()[category];
    this.setState({
      category,
      helpful
    }, () => {
      // Add row to Segment
      const {
        state,
        props
      } = this;
      sendToSegment({
        state,
        props
      });
    });
  }

  // User clicks the "Contact support" linke
  selectSupport() {
    this.setState({
      contactSupport: true
    }, () => {
      // Add row to Segment
      const {
        state,
        props
      } = this;
      sendToSegment({
        state,
        props
      });
      window.location.assign('https://support.mapbox.com/');
    });
  }

  // User submits feedback
  submitFeedback(_ref) {
    let {
      categoryType,
      feedback
    } = _ref;
    this.setState({
      categoryType,
      feedback,
      sentFeedback: true
    }, () => {
      const {
        state,
        props
      } = this;
      sendToSegment({
        state,
        props
      });
      if (feedback) sendToSentry({
        state,
        props
      });
    });
  }

  // User closes feedback
  closeFeedback() {
    const {
      state,
      props
    } = this;
    // do not send to Segment if they sent feedback
    // otherwise their data will get sent twice (once from submitFeedback and then again here)
    if (!state.sentFeedback) {
      sendToSegment({
        state: {
          ...state,
          exited: true
        },
        props
      });
    }
    // reset state
    this.setState({
      ...INITIAL_STATE
    });
  }

  // Creates a wrapper for the Feedback component
  renderWrapper(_ref2) {
    let {
      children,
      title,
      helpful
    } = _ref2;
    const {
      sentFeedback
    } = this.state;
    // show "Contact support" only when the user hasn't submitted feedback
    // and the chosen category infers not helpful feedbak
    const showContactSupport = !sentFeedback && !helpful;
    return /*#__PURE__*/React.createElement("div", {
      className: "dr-ui--feedback wmax300"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-gray-faint round py12 px12"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex--column"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex--space-between-main w-full mb12"
    }, /*#__PURE__*/React.createElement("div", {
      className: "txt-bold"
    }, title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
      content: "Close"
    }, /*#__PURE__*/React.createElement("button", {
      id: "feedback-close-button",
      "aria-label": "Close feedback",
      onClick: this.closeFeedback,
      className: "link--gray"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "close"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "mb6 prose"
    }, children), showContactSupport && /*#__PURE__*/React.createElement("div", {
      className: "color-text"
    }, "Need help?", ' ', /*#__PURE__*/React.createElement("button", {
      className: "link",
      value: "Contact support",
      onClick: this.selectSupport
    }, "Contact support")))));
  }
  render() {
    const {
      isOpen,
      category,
      sentFeedback
    } = this.state;
    const {
      type
    } = this.props;
    const FeedbackWrapper = props => this.renderWrapper(props);

    /** This component returns early to improve code clarity **/

    // Initial stage: the user has not clicked on feedback
    if (!isOpen) {
      return /*#__PURE__*/React.createElement("button", {
        value: "Share",
        onClick: this.openFeedback,
        className: "btn btn--gray btn--stroke"
      }, "Share your feedback");
    }
    // Second stage: select the category
    if (isOpen && !category) {
      return /*#__PURE__*/React.createElement(FeedbackWrapper, {
        title: `Share your feedback${type !== 'page' ? ` for this ${type}` : ''}`
      }, Object.keys(this.categories()).map(category => /*#__PURE__*/React.createElement("button", {
        value: category,
        onClick: this.selectCategory,
        className: "btn btn--gray w-full mb6",
        key: category
      }, category)));
    }
    // Final stage: a confirmation after the user sends feedback
    if (isOpen && category && sentFeedback) {
      return /*#__PURE__*/React.createElement(FeedbackWrapper, null, /*#__PURE__*/React.createElement("div", {
        className: "align-center prose relative"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mt-neg30 inline-block"
      }, /*#__PURE__*/React.createElement(BookImage, {
        size: 75
      })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Thank you!")), /*#__PURE__*/React.createElement("p", null, "Our documentation team will read your feedback. Thank you for helping us improve this ", this.props.type, ".")));
    }
    // Middle stages: Select category and complete the category workflow
    return /*#__PURE__*/React.createElement(FeedbackWrapper, _extends({
      title: category
    }, this.categories()[category]));
  }
}
Feedback.defaultProps = {
  type: 'page',
  feedbackSentryDsn: 'https://eccc8b561b9a461990309b01d33d54e3@sentry.io/1848287'
};
export default Feedback;