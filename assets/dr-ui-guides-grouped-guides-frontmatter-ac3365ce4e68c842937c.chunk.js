(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{ffls:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}function i(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var f=p(r("q1tI")),d=(r("yr+R"),r("cQZ0"),p(r("ks1d")));function p(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var y={title:"Frontmatter",description:"There are two frontmatter fields needed to make grouped guides work: group and groupOrder.",groupOrder:2,contentType:"guide",layout:"page",products:["Documentation"],headings:[]},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,r,n,i=a(c);function c(){return o(this,c),i.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){var e=this.props;return f.default.createElement(d.default,s({},e,{frontMatter:y}),f.default.createElement("div",null,f.default.createElement("p",null,"There are two frontmatter fields needed to make grouped guides work:"),f.default.createElement("ul",null,f.default.createElement("li",null,f.default.createElement("strong",null,f.default.createElement("code",null,"group")," (bool)"),": The ",f.default.createElement("code",null,"index.md")," file should include ",f.default.createElement("code",null,"group: true")," in the frontmatter. This will signal to the Batfish helper ",f.default.createElement("code",null,"navigation.js")," to include an array of subpages and to the ",f.default.createElement("code",null,"PageLayout")," component to use the ",f.default.createElement("code",null,"GuideGroupIndex")," layout for the content."),f.default.createElement("li",null,f.default.createElement("strong",null,f.default.createElement("code",null,"groupOrder")," (int)"),": In all other Markdown files in the group, specify the order in which the guides should appear in the sidebar (and in the guide group index) by including ",f.default.createElement("code",null,"groupOrder: ","{","number","}")," in the frontmatter for each page."))))}}])&&u(t.prototype,r),n&&u(t,n),c}(f.default.PureComponent);t.default=h},xEmN:function(e,t,r){var n=r("ffls");n=n.default||n,e.exports={component:n,props:{frontMatter:{title:"Frontmatter",description:"There are two frontmatter fields needed to make grouped guides work: group and groupOrder.",groupOrder:2,contentType:"guide",layout:"page",products:["Documentation"]}}}}}]);