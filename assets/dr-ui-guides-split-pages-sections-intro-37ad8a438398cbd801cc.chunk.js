(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"5LOC":function(e){e.exports=JSON.parse('{"SITE":"Dr. UI","BASEURL":"/dr-ui","FORWARD_EVENT_WEBHOOK":{"production":"null","staging":"null"}}')},"6RjT":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("hLhG"),i=n.n(a);n("17x9");var c=n("xk4V"),u=n.n(c),s=n("5sBR"),l=n.n(s),f=n("3CEA"),p=n("gtzJ"),d=n("TSYQ"),m=n.n(d),b=n("NmYn"),h=n.n(b),y=n("C1e6");function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t&&E(e.prototype,t),n&&E(e,n),e}function k(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=u()(),I=Object(y.a)(),C="undefined"!=typeof window?window.location:void 0,D=function(e){k(n,e);var t=P(n);function n(e){var r;return O(this,n),R(_(r=t.call(this,e)),"createId",(function(e){var t=h()(r.props.section||"page",{replacement:"-",lower:!0});return"dr-ui--feedback-".concat(t,"-").concat(e)})),R(_(r),"handleText",(function(e){r.setState({feedback:e})})),R(_(r),"handleYesNo",(function(e){r.setState({helpful:e},(function(){r.setState({event:r.createSegmentEvent()},(function(){r.sendToSegment()}))}))})),R(_(r),"handleSubmitFeedback",(function(){r.setState({feedbackSent:!0,event:r.createSegmentEvent()},(function(){r.sendToSegment(),!1!==r.props.feedbackSentryDsn&&r.sendToSentry()}))})),R(_(r),"createSegmentEvent",(function(){return w(w({event:"Sent docs feedback"},r.state.user&&r.state.user.id?{userId:r.state.user.id}:{anonymousId:N}),{},{properties:w(w(w(w(w({helpful:r.state.helpful},r.state.feedback&&{feedback:r.state.feedback}),{},{site:r.props.site,section:r.props.section||void 0,page:r.props.location||void 0},r.state.user&&r.state.user.id?{userId:r.state.user.id}:{anonymousId:N}),!r.state.user&&{anonymousId:N}),r.state.user&&r.state.user.plan&&{plan:r.state.user.plan.id}),{},{environment:I,location:{hash:C.hash,host:C.host,hostname:C.hostname,href:C.href,origin:C.origin,pathname:C.pathname,search:C.search}})})})),R(_(r),"sendToSegment",(function(){!function(e,t,n){if(n=n||function(){},"undefined"!=typeof window){if(!e)throw new Error("event argument required");var r=/(^|\S+\.)mapbox\.com/.test(window.location.host)?t.production:t.staging,o=new XMLHttpRequest;r?(o.open("POST",r),o.setRequestHeader("Accept","application/json"),o.setRequestHeader("Content-Type","application/json"),o.onerror=a,o.onload=function(){if(200===o.status)return void n();var e;try{var t=JSON.parse(o.response);e=t.message}catch(t){e=o.response}var r=new Error("["+o.status+" HTTP error] "+e);r.statusCode=o.status,r.response=o.response,a(r)},o.send(JSON.stringify(e))):a("forward-event missing POST url")}function a(e){n(e)}}(r.state.event,r.props.webhook,(function(e){e&&r.sendToSentry("error",e)}))})),R(_(r),"sendToSentry",(function(e,t){f.a({dsn:r.props.feedbackSentryDsn,maxValueLength:1e3,environment:I}),p.c((function(n){n.setTag("site",r.props.site),"referrer"in document&&n.setTag("referrer",document.referrer),n.setTag("helpful",r.state.helpful),r.props.section&&n.setTag("section",r.props.section),r.props.preferredLanguage&&n.setTag("preferredLanguage",r.props.preferredLanguage),r.state.user&&r.state.user.plan&&r.state.user.plan.id&&n.setTag("plan",r.state.user.plan.id),r.state.user&&p.e(w(w(w({},r.state.user.id&&{username:r.state.user.id}),r.state.user.email&&{email:r.state.user.email}),r.state.user.plan&&r.state.user.plan.id&&{data:{plan:r.state.user.plan.id}})),t&&p.d("error",t),n.setLevel(e||"info")})),p.b(r.state.feedback)})),r.state={helpful:void 0,feedback:void 0,feedbackSent:void 0,event:void 0,user:void 0},r}return S(n,[{key:"componentDidMount",value:function(){var e=this;"undefined"!=typeof MapboxPageShell&&MapboxPageShell.afterUserCheck((function(){e.setState({user:MapboxPageShell.getUser()||void 0})}))}},{key:"render",value:function(){var e=this,t=this.state.feedback?1e3-this.state.feedback.length:1e3,n=t<0;return o.a.createElement("div",{className:"bg-gray-faint py12 px18 round color-gray"},o.a.createElement("div",null,void 0===this.state.helpful&&o.a.createElement("div",null,o.a.createElement("div",{className:"mb6"},"Was this ",this.props.type," helpful?"),o.a.createElement("button",{id:this.createId("yes"),onClick:function(){return e.handleYesNo(!0)},className:"btn btn--s"},"Yes"),o.a.createElement("button",{id:this.createId("no"),onClick:function(){return e.handleYesNo(!1)},className:"btn btn--s ml6"},"No")),void 0!==this.state.helpful&&o.a.createElement("div",null,o.a.createElement("div",{className:"inline-block bg-green color-white round-full w18 h18 align-middle mr3 mb3"},o.a.createElement(l.a,{name:"check"}))," ","Thanks for your feedback."),void 0!==this.state.helpful&&void 0===this.state.feedbackSent&&o.a.createElement("div",{className:"mt12"},o.a.createElement("div",{className:"mb6"},"If you have more specific feedback",!1===this.state.helpful&&" on how we can improve this ".concat(this.props.type),", you can provide it below (optional):"),o.a.createElement("div",{className:"relative"},o.a.createElement(i.a,{id:this.createId("text"),themeControlWrapper:"bg-white mb6",onChange:this.handleText,value:this.state.feedback}),o.a.createElement(L,{createId:this.createId,feedbackOverLimit:n,feedbackLength:t})),o.a.createElement("div",{className:"mb12"},o.a.createElement("button",{id:this.createId("submit"),disabled:void 0===this.state.feedback||this.state.feedback.length<3||n,className:"btn btn--s mb6 mr12 inline-block",onClick:this.handleSubmitFeedback},"Send feedback"),n&&o.a.createElement(M,{createId:this.createId,feedbackLimit:1e3})),o.a.createElement("div",{className:"txt-s txt-em"},"This form is for documentation feedback. If you have a technical question about how to use a Mapbox product,"," ",o.a.createElement("a",{href:"https://support.mapbox.com/hc/en-us",className:"link"},"contact Support"),"."))))}}]),n}(o.a.Component),L=function(e){k(n,e);var t=P(n);function n(){return O(this,n),t.apply(this,arguments)}return S(n,[{key:"render",value:function(){return o.a.createElement("div",{id:this.props.createId("counter"),className:m()("absolute bottom right mb6 mr18 txt-mono bg-lighten75 px3 txt-s",{"color-red":this.props.feedbackOverLimit})},this.props.feedbackLength)}}]),n}(o.a.Component),M=function(e){k(n,e);var t=P(n);function n(){return O(this,n),t.apply(this,arguments)}return S(n,[{key:"render",value:function(){return o.a.createElement("span",{id:this.props.createId("overlimit"),className:"color-red txt-s bg-red-faint round inline-block py3 px12"},o.a.createElement(l.a,{name:"alert",inline:!0})," Your message is over the"," ",this.props.feedbackLimit," character limit.")}}]),n}(o.a.Component);D.defaultProps={type:"page",feedbackSentryDsn:"https://eccc8b561b9a461990309b01d33d54e3@sentry.io/1848287"};t.a=D},C1e6:function(e,t,n){"use strict";function r(){return"undefined"!=typeof window?/(^|\S+\.)mapbox\.com/.test(window.location.host)?"production":"staging":void 0}n.d(t,"a",(function(){return r}))},C5U3:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n("q1tI"),o=n.n(r),a=(n("17x9"),n("6RjT"));function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(f,e);var t,n,r,i=l(f);function f(){var e;c(this,f);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(p(e=i.call.apply(i,[this].concat(n))),"renderFeedback",(function(){var t=e.props,n=t.frontMatter,r=t.location,i=t.constants;return o.a.createElement("div",{className:"mt18"},o.a.createElement(a.a,{site:i.SITE,type:"section on ".concat(n.title),section:n.title,location:r,webhook:i.FORWARD_EVENT_WEBHOOK}))})),e}return t=f,(n=[{key:"render",value:function(){var e=this.props,t=e.frontMatter,n=e.children;return o.a.createElement(o.a.Fragment,null,n,t.hideFeedback?" ":this.renderFeedback())}}])&&u(t.prototype,n),r&&u(t,r),f}(o.a.Component),h=n("5LOC");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(i,e);var t,n,r,a=E(i);function i(){return g(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props.children;return o.a.createElement(b,v({},this.props,{constants:h}),e)}}])&&w(t.prototype,n),r&&w(t,r),i}(o.a.Component)},OVoB:function(e,t,n){var r=n("x7NB");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Introduction to split pages",description:"An introduction to use split pages.",order:1,splitPage:!0,hideFeedback:!0,products:["Documentation"],contentType:"guide"}}}},x7NB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=(n("yr+R"),n("cQZ0"),a(n("C5U3")));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m={title:"Introduction to split pages",description:"An introduction to use split pages.",order:1,splitPage:!0,hideFeedback:!0,products:["Documentation"],contentType:"guide",headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(p,e);var t,n,a,i=f(p);function p(){return u(this,p),i.apply(this,arguments)}return t=p,(n=[{key:"render",value:function(){var e=this.props;return r.default.createElement(o.default,c({},e,{frontMatter:m}),r.default.createElement("div",{className:"section section-h2"},r.default.createElement("div",{className:"body h3-section-list"},r.default.createElement("div",{className:"section section-h3"},r.default.createElement("div",{className:"body"},r.default.createElement("p",null,"This page demonstrates the split page pattern and provides steps on how to implement it on a site."),r.default.createElement("p",null,"To improve internal developer experience, the pattern splits a longer page into multiple markdown files (also known as markdown partial files) and then imports the markdown files into a single page (also known as the main page)."),r.default.createElement("p",null,"This split page pattern is used by the following pages:"),r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement("a",{href:"https://docs.mapbox.com/api/maps/"},"API documentation")),r.default.createElement("li",null,r.default.createElement("a",{href:"https://docs.mapbox.com/studio-manual/reference/"},"Studio manual reference")),r.default.createElement("li",null,r.default.createElement("a",{href:"https://docs.mapbox.com/accounts/overview/pricing/"},"Accounts pricing page")),r.default.createElement("li",null,r.default.createElement("a",{href:"https://docs.mapbox.com/vector-tiles/specification/"},"Vector Tiles Specification"))))))))}}])&&s(t.prototype,n),a&&s(t,a),p}(r.default.PureComponent);t.default=b}}]);