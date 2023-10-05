import React from 'react';
import PropTypes from 'prop-types';
import slug from 'slugg';
import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';
import md from '../md';
import entries from 'object.entries';
import IconText from '@mapbox/mr-ui/icon-text';
export default class Plugins extends React.PureComponent {
  render() {
    const {
      AppropriateImage
    } = this.props;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      id: "plugins",
      className: "plugins-page",
      "data-swiftype-index": "true"
    }, entries(this.props.pluginData).map((_ref, i) => {
      let [title, plugins] = _ref;
      return /*#__PURE__*/React.createElement("div", {
        key: i
      }, /*#__PURE__*/React.createElement("h2", {
        className: "anchor"
      }, /*#__PURE__*/React.createElement("a", {
        className: `unprose color-blue-on-hover`,
        href: `#${slug(title)}`,
        style: {
          marginTop: '-30px'
        },
        id: slug(title)
      }, title, " (", entries(plugins.plugins).length, ")")), /*#__PURE__*/React.createElement("div", {
        className: "pb24"
      }, md(plugins.description)), entries(plugins.plugins).map((_ref2, i) => {
        let [name, plugin] = _ref2;
        return /*#__PURE__*/React.createElement("div", {
          key: i,
          className: "pb18 mb18 border-b border--darken10 flex flex--column flex--row-mm"
        }, /*#__PURE__*/React.createElement("div", {
          className: "round relative mr24-mm flex-child-no-shrink mb12 mb0-mm h180 w-full w-1/3-mm"
          // style={{ height: 115, width: 160 }}
        }, plugin.image && /*#__PURE__*/React.createElement(AppropriateImage, {
          imageId: plugin.image,
          alt: `thumbnail image for Mapbox GL JS plugin ${name}`,
          background: true
        })), /*#__PURE__*/React.createElement("div", {
          className: "flex-child-grow"
        }, /*#__PURE__*/React.createElement("div", {
          className: "mb6 txt-bold"
        }, name), /*#__PURE__*/React.createElement("div", {
          className: "color-gray color-gray-on-hover mb6 prose"
        }, md(plugin.description)), /*#__PURE__*/React.createElement("div", {
          className: ""
        }, plugin.website && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
          className: "link link--blue",
          href: plugin.website
        }, /*#__PURE__*/React.createElement(IconText, {
          iconBefore: plugin.website.includes('github') ? 'github' : 'globe'
        }, "View this project"))), plugin.example && /*#__PURE__*/React.createElement("div", {
          className: "mt6"
        }, /*#__PURE__*/React.createElement("a", {
          className: "link link--blue",
          href: prefixUrl(`/example/${plugin.example}`)
        }, /*#__PURE__*/React.createElement(IconText, {
          iconBefore: "code"
        }, "View example"))))));
      }));
    })));
  }
}