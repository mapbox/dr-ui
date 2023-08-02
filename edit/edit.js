/* eslint-disable xss/no-mixed-html */

import React from 'react';
import PropTypes from 'prop-types';
import stripMd from 'remove-markdown';

// formats the metadata
function meta(frontMatter) {
  let description = frontMatter.description;
  const path = `https://docs.mapbox.com/${frontMatter.pathname}`;
  description += `\n\nSee the example: [${path}](${path})`;
  return {
    title: frontMatter.title,
    description,
    tags: ['mapbox', 'maps']
  };
}

// creates a form wrapper for each platform
class Form extends React.PureComponent {
  render() {
    let classes = `inline-block`;
    if (this.props.classes) classes += ` ${this.props.classes}`;
    return /*#__PURE__*/React.createElement("form", {
      className: classes,
      method: "POST",
      action: this.props.action,
      target: "_blank"
    }, this.props.children);
  }
}

// creates the actual button that the user can click
class Button extends React.PureComponent {
  render() {
    const platform = this.props.platform;
    const btnClass = 'btn btn--s cursor-pointer round';
    function onClick() {
      if (window && window.analytics) {
        analytics.track(`Clicked Edit in ${platform}`);
      }
    }
    return /*#__PURE__*/React.createElement("input", {
      style: {
        border: 0
      },
      type: "submit",
      className: btnClass,
      value: `Edit in ${platform}`,
      onClick: onClick
    });
  }
}
export default class Edit extends React.PureComponent {
  render() {
    const {
      css,
      js,
      html,
      head,
      resources,
      frontMatter
    } = this.props;
    const projectMeta = meta(frontMatter);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Form, {
      action: "https://jsfiddle.net/api/post/library/pure/"
    }, /*#__PURE__*/React.createElement(Button, {
      platform: "JSFiddle"
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "wrap",
      value: "b"
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "css",
      value: css
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "html",
      value: html
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "js",
      value: js
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "title",
      value: projectMeta.title
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "resources",
      value: resources ? resources.js.concat(resources.css) : []
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "description",
      value: stripMd(projectMeta.description)
    })), /*#__PURE__*/React.createElement(Form, {
      classes: "ml6",
      action: "https://codepen.io/pen/define"
    }, /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "data",
      value: JSON.stringify({
        title: projectMeta.title,
        html: html,
        html_pre_processor: 'none',
        description: projectMeta.description,
        tags: projectMeta.tags,
        css: css,
        css_pre_processor: 'none',
        js: js,
        js_pre_processor: 'none',
        css_external: resources && resources.css ? resources.css.join(';') : '',
        js_external: resources && resources.js ? resources.js.join(';') : '',
        head: head
      })
    }), /*#__PURE__*/React.createElement(Button, {
      platform: "CodePen"
    })));
  }
}