(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"57yy":function(e,t,r){"use strict";r.r(t),r.d(t,"feedbackLimit",(function(){return g})),r.d(t,"feedbackMinimum",(function(){return k})),r.d(t,"FeedbackTextarea",(function(){return O})),r.d(t,"FeedbackButton",(function(){return w}));var n=r("q1tI"),o=r.n(n),i=r("hLhG"),a=r.n(i),c=r("TSYQ"),u=r.n(c);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(o=n.key,i=void 0,i=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===l(i)?i:String(i)),n)}var o,i}function p(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}function m(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=1e3,k=3,O=function(e){b(r,e);var t=y(r);function r(e){var n;return s(this,r),(n=t.call(this,e)).state={feedback:""},n.handleFeedback=n.handleFeedback.bind(h(n)),n}return p(r,[{key:"handleFeedback",value:function(e){var t=this;this.setState({feedback:e},(function(){t.props.onChange({value:e,overLimit:t.isOverLimit()})}))}},{key:"isOverLimit",value:function(){return this.state.feedback.length>g}},{key:"render",value:function(){var e=this.props,t=e.id,r=e.label,n=e.placeholder,i=e.validationErrorMinimum,c=this.state.feedback,l=this.state.feedback?g-this.state.feedback.length:g;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"relative"},o.a.createElement(a.a,{themeControlTextarea:"textarea hmin120 bg-white",themeLabel:"txt-m mb6",id:t,label:r,value:c,onChange:this.handleFeedback,placeholder:n,validationError:(i?"Tell us more!":"")||(this.isOverLimit()?"Your feedback is over the limit":"")}),o.a.createElement("div",{id:"feedback-length",className:u()("absolute bottom right mb6 mr18 txt-mono bg-lighten75 px3 txt-s",{"color-red-dark":this.isOverLimit()})},l)))}}]),r}(o.a.PureComponent),w=function(e){b(r,e);var t=y(r);function r(){return s(this,r),t.apply(this,arguments)}return p(r,[{key:"render",value:function(){var e=this.props,t=e.onClick,r=e.disabled;return o.a.createElement("button",{id:"feedback-submit-button",onClick:t,disabled:r,className:"btn btn--gray mt6"},"Submit feedback")}}]),r}(o.a.PureComponent)},"5LOC":function(e){e.exports=JSON.parse('{"SITE":"Dr. UI","BASEURL":"/dr-ui","FORWARD_EVENT_WEBHOOK":{"production":"null","staging":"null"}}')},"6RjT":function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),i=r("MWWb"),a=r("UJnQ"),c=r.n(a),u=r("5sBR"),l=r.n(u),s=r("57yy"),f=r("kuLW"),p=r.n(f);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(o=n.key,i=void 0,i=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===b(i)?i:String(i)),n)}var o,i}function y(e,t){return(y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=g(e);if(t){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return h(this,r)}}function h(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,r,n,i=m(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={value:[],feedback:"",overLimit:!1,validationErrorMinimum:!1},t.handleChange=t.handleChange.bind(v(t)),t.handleFeedback=t.handleFeedback.bind(v(t)),t.submit=t.submit.bind(v(t)),t}return t=a,(r=[{key:"handleChange",value:function(e){this.setState({value:e})}},{key:"handleFeedback",value:function(e){var t=this,r=e.value,n=e.overLimit,o=this.state,i=o.validationErrorMinimum,a=o.feedback;this.setState({feedback:r,overLimit:n},(function(){i&&a.length>=s.feedbackMinimum&&t.setState({validationErrorMinimum:!1})}))}},{key:"submit",value:function(){var e=this.state,t=e.feedback,r=e.value,n=this.props.submitFeedback;t.trim().length<s.feedbackMinimum&&this.onlySomethingElse()?this.setState({validationErrorMinimum:!0}):n({categoryType:r.join(","),feedback:t})}},{key:"onlySomethingElse",value:function(){return 1===this.state.value.length&&"Something else"===this.state.value[0]}},{key:"render",value:function(){var e=this.state,t=e.value,r=e.feedback,n=e.overLimit,i=e.validationErrorMinimum,a=this.props,c=a.options,u=a.leadText,l=a.placeholder;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,u),o.a.createElement(p.a,{legend:"Select all that apply",value:t,themeCheckbox:"mr6 inline-block checkbox--gray checkbox--s-label",id:"feedback-category-like",onChange:this.handleChange,options:c}),t.length>0&&o.a.createElement(s.FeedbackTextarea,{value:r,onChange:this.handleFeedback,id:"feedback-category-like-textarea",placeholder:l,validationErrorMinimum:i}),o.a.createElement(s.FeedbackButton,{onClick:this.submit,disabled:!t.length||!r&&this.onlySomethingElse()||n}))}}])&&d(t.prototype,r),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.a.Component),O=r("zkL+"),w=r.n(O);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(o=n.key,i=void 0,i=function(e,t){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===S(i)?i:String(i)),n)}var o,i}function E(e,t){return(E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=F(e);if(t){var o=F(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return T(this,r)}}function T(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return x(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,r,n,i=P(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={value:void 0,feedback:void 0,overLimit:!1,validationErrorMinimum:!1},t.handleRadios=t.handleRadios.bind(x(t)),t.handleFeedback=t.handleFeedback.bind(x(t)),t.submit=t.submit.bind(x(t)),t}return t=a,(r=[{key:"handleRadios",value:function(e){this.setState({value:e})}},{key:"handleFeedback",value:function(e){var t=this,r=e.value,n=e.overLimit,o=this.state,i=o.validationErrorMinimum,a=o.feedback;this.setState({feedback:r,overLimit:n},(function(){i&&a.length>=s.feedbackMinimum&&t.setState({validationErrorMinimum:!1})}))}},{key:"submit",value:function(){var e=this.state,t=e.feedback,r=e.value,n=this.props.submitFeedback;t.trim().length<s.feedbackMinimum?this.setState({validationErrorMinimum:!0}):n({categoryType:r,feedback:t})}},{key:"render",value:function(){var e=this.state,t=e.value,r=e.feedback,n=e.overLimit,i=e.validationErrorMinimum,a=this.props,c=a.options,u=a.leadText;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,u),o.a.createElement("div",{className:"mb6"},o.a.createElement(w.a,{id:"feedback-problem-options",onChange:this.handleRadios,themeRadio:"mr6 radio--gray radio--s-label inline-block",value:t,options:Object.keys(c).map((function(e){return{value:e,label:e}}))})),void 0!==t&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.FeedbackTextarea,{id:"feedback-problem-textarea",label:c[t].question,value:r,onChange:this.handleFeedback,placeholder:c[t].placeholder,validationErrorMinimum:i}),o.a.createElement(s.FeedbackButton,{onClick:this.submit,disabled:!r||n})))}}])&&j(t.prototype,r),n&&j(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.a.PureComponent);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(o=n.key,i=void 0,i=function(e,t){if("object"!==R(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===R(i)?i:String(i)),n)}var o,i}function L(e,t){return(L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=I(e);if(t){var o=I(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return N(this,r)}}function N(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return D(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,r,n,i=M(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={feedback:void 0,overLimit:!1,validationErrorMinimum:!1},t.handleFeedback=t.handleFeedback.bind(D(t)),t.submit=t.submit.bind(D(t)),t}return t=a,(r=[{key:"handleFeedback",value:function(e){var t=this,r=e.value,n=e.overLimit,o=this.state,i=o.validationErrorMinimum,a=o.feedback;this.setState({feedback:r,overLimit:n},(function(){i&&a.length>=s.feedbackMinimum&&t.setState({validationErrorMinimum:!1})}))}},{key:"submit",value:function(){var e=this.state.feedback,t=this.props.submitFeedback;e.trim().length<s.feedbackMinimum?this.setState({validationErrorMinimum:!0}):t({feedback:e})}},{key:"render",value:function(){var e=this.state,t=e.feedback,r=e.overLimit,n=e.validationErrorMinimum,i=this.props,a=i.option,c=i.placeholder;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.FeedbackTextarea,{id:"feedback-problem-textarea",label:a,value:t,onChange:this.handleFeedback,placeholder:c,validationErrorMinimum:n}),o.a.createElement(s.FeedbackButton,{onClick:this.submit,disabled:!t||r}))}}])&&_(t.prototype,r),n&&_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.a.PureComponent);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==W(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==W(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===W(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var z=r("gtzJ"),A=r("C1e6");function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){Q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==J(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==J(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===J(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function V(e){var t=e.state,r=e.props;!function(e,t,r){if(r=r||function(){},"undefined"!=typeof window){if(!e)throw new Error("event argument required");var n=/(^|\S+\.)mapbox\.com/.test(window.location.host)?t.production:t.staging,o=new XMLHttpRequest;n?(o.open("POST",n),o.setRequestHeader("Accept","application/json"),o.setRequestHeader("Content-Type","application/json"),o.onerror=i,o.onload=function(){if(200===o.status)return void r();var e;try{var t=JSON.parse(o.response);e=t.message}catch(t){e=o.response}var n=new Error("["+o.status+" HTTP error] "+e);n.statusCode=o.status,n.response=o.response,i(n)},o.send(JSON.stringify(e))):i("forward-event missing POST url")}function i(e){r(e)}}(function(e){var t=e.state,r=e.props,n=t.user,o=t.anonymousId,i=t.helpful,a=t.feedback,c=t.sessionId,u=t.category,l=t.categoryType,s=t.contactSupport,f=t.exited,p=r.site,b=r.section,d=r.location,y=U({},n&&n.id?{userId:n.id}:{anonymousId:o});return U(U({event:"Sent docs feedback"},y),{},{properties:U(U(U({helpful:i,sessionId:c,category:u,categoryType:l,contactSupport:s},a&&{feedback:a}),{},{exited:f,site:p,section:b,page:d||void 0,userId:n&&n.id?n.id:void 0,anonymousId:o},n&&n.plan&&{plan:n.plan.id}),{},{environment:Object(A.a)()})})}({state:t,props:r}),r.webhook,(function(e){e&&z.a(e)}))}var Y=r("3CEA");function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==G(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===G(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var $=r("57yy").feedbackLimit;var ee=r("7Cbv");function te(e){return(te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function re(){return(re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){fe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ie(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,pe(n.key),n)}}function ae(e,t){return(ae=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function ce(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=se(e);if(t){var o=se(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return ue(this,r)}}function ue(e,t){if(t&&("object"===te(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return le(e)}function le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fe(e,t,r){return(t=pe(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pe(e){var t=function(e,t){if("object"!==te(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==te(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===te(t)?t:String(t)}var be=Object(ee.a)(),de={user:void 0,anonymousId:void 0,sessionId:void 0,isOpen:!1,category:void 0,categoryType:void 0,feedback:void 0,sentFeedback:!1,contactSupport:!1,helpful:void 0,exited:!1},ye=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ae(e,t)}(u,e);var t,r,n,a=ce(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),fe(le(t=a.call(this,e)),"categories",(function(){return e={type:t.props.type,submitFeedback:t.submitFeedback},r=e.type,n=e.submitFeedback,i=function(e){return["page","example","playground"].includes(e)?e:"content"}(r),q({"Report a problem":{helpful:!1,children:o.a.createElement(C,{leadText:"Tell us more about what's happening".concat("page"!==r?" with this ".concat(r):"","."),options:{"Something is incorrect or doesn't work":{question:"What is incorrect or doesn't work and where on the ".concat(i," does it appear?"),placeholder:"Let us know what is incorrect or doesn't work."},"I see an error message":{question:"What error do you see and when did you encounter it?",placeholder:"Let us know about the error message you see."},"Something is missing":{question:"What information are you looking for?",placeholder:"Let us know what is missing."},"Something else":{question:"Describe the problem.",placeholder:"Let us know more about the problem."}},submitFeedback:n})},"Something is confusing":{helpful:!1,children:o.a.createElement(B,{option:"What about this ".concat(r," is confusing? How can we improve the content?"),placeholder:"Let us know what is confusing.",submitFeedback:n})}},"I like this ".concat(i),{helpful:!0,children:o.a.createElement(k,{leadText:"Tell us what you like about this ".concat(r,"."),placeholder:"What did you like?",options:[{label:"I found what I need",value:"I found what I need"},{label:"The information is accurate",value:"The information is accurate"},{label:"The ".concat(i," is easy to understand"),value:"Easy to understand"},{label:"Something else",value:"Something else"}],submitFeedback:n})});var e,r,n,i})),t.state=oe({},de),t.openFeedback=t.openFeedback.bind(le(t)),t.submitFeedback=t.submitFeedback.bind(le(t)),t.closeFeedback=t.closeFeedback.bind(le(t)),t.selectCategory=t.selectCategory.bind(le(t)),t.categories=t.categories.bind(le(t)),t.selectSupport=t.selectSupport.bind(le(t)),t.renderWrapper=t.renderWrapper.bind(le(t)),t}return t=u,(r=[{key:"openFeedback",value:function(){var e=this;void 0===this.state.user&&"undefined"!=typeof MapboxPageShell&&MapboxPageShell.afterUserCheck((function(){e.setState({user:MapboxPageShell.getUser()||void 0})})),this.setState({anonymousId:be,sessionId:"".concat(Date.now(),"-").concat(be),isOpen:!0},(function(){V({state:e.state,props:e.props})}))}},{key:"selectCategory",value:function(e){var t=this,r=e.target.value,n=this.categories()[r].helpful;this.setState({category:r,helpful:n},(function(){V({state:t.state,props:t.props})}))}},{key:"selectSupport",value:function(){var e=this;this.setState({contactSupport:!0},(function(){V({state:e.state,props:e.props}),window.location.assign("https://support.mapbox.com/")}))}},{key:"submitFeedback",value:function(e){var t=this,r=e.categoryType,n=e.feedback;this.setState({categoryType:r,feedback:n,sentFeedback:!0},(function(){var e=t.state,r=t.props;V({state:e,props:r}),n&&function(e){var t=e.state,r=e.props,n=r.site,o=r.section,i=r.preferredLanguage,a=r.feedbackSentryDsn;if(!1!==a){var c=t.helpful,u=t.user,l=t.feedback,s=t.category,f=t.categoryType,p=t.anonymousId,b="referrer"in document;Y.a({dsn:a,maxValueLength:$,environment:Object(A.a)()}),u&&z.d(X(X({},u.id&&{username:u.id}),u.plan&&u.plan.id&&{data:{plan:u.plan.id}})),z.e((function(e){e.setTag("site",n),e.setTag("category",s),f&&e.setTag("categoryType",f),b&&e.setTag("referrer",document.referrer),e.setTag("helpful",c),o&&e.setTag("section",o),i&&e.setTag("preferredLanguage",i),u&&u.plan&&u.plan.id&&e.setTag("plan",u.plan.id),e.setLevel("info"),e.setFingerprint([n,s,p,new Date]),z.b(l)}))}}({state:e,props:r})}))}},{key:"closeFeedback",value:function(){var e=this.state,t=this.props;e.sentFeedback||V({state:oe(oe({},e),{},{exited:!0}),props:t}),this.setState(oe({},de))}},{key:"renderWrapper",value:function(e){var t=e.children,r=e.title,n=e.helpful,i=!this.state.sentFeedback&&!n;return o.a.createElement("div",{className:"dr-ui--feedback wmax300"},o.a.createElement("div",{className:"bg-gray-faint round py12 px12"},o.a.createElement("div",{className:"flex flex--column"},o.a.createElement("div",{className:"flex flex--space-between-main w-full mb12"},o.a.createElement("div",{className:"txt-bold"},r),o.a.createElement("div",null,o.a.createElement(c.a,{content:"Close"},o.a.createElement("button",{id:"feedback-close-button","aria-label":"Close feedback",onClick:this.closeFeedback,className:"link--gray"},o.a.createElement(l.a,{name:"close"}))))),o.a.createElement("div",{className:"mb6 prose"},t),i&&o.a.createElement("div",{className:"color-text"},"Need help?"," ",o.a.createElement("button",{className:"link",value:"Contact support",onClick:this.selectSupport},"Contact support")))))}},{key:"render",value:function(){var e=this,t=this.state,r=t.isOpen,n=t.category,a=t.sentFeedback,c=this.props.type,u=function(t){return e.renderWrapper(t)};return r?r&&!n?o.a.createElement(u,{title:"Share your feedback".concat("page"!==c?" for this ".concat(c):"")},Object.keys(this.categories()).map((function(t){return o.a.createElement("button",{value:t,onClick:e.selectCategory,className:"btn btn--gray w-full mb6",key:t},t)}))):r&&n&&a?o.a.createElement(u,null,o.a.createElement("div",{className:"align-center prose relative"},o.a.createElement("div",{className:"mt-neg30 inline-block"},o.a.createElement(i.a,{size:75})),o.a.createElement("p",null,o.a.createElement("strong",null,"Thank you!")),o.a.createElement("p",null,"Our documentation team will read your feedback. Thank you for helping us improve this ",this.props.type,"."))):o.a.createElement(u,re({title:n},this.categories()[n])):o.a.createElement("button",{value:"Share",onClick:this.openFeedback,className:"btn btn--gray btn--stroke"},"Share your feedback")}}])&&ie(t.prototype,r),n&&ie(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o.a.PureComponent);ye.defaultProps={type:"page",feedbackSentryDsn:"https://eccc8b561b9a461990309b01d33d54e3@sentry.io/1848287"};t.a=ye},C1e6:function(e,t,r){"use strict";function n(){return"undefined"!=typeof window?/(^|\S+\.)mapbox\.com/.test(window.location.host)?"production":"staging":void 0}r.d(t,"a",(function(){return n}))},MWWb:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("q1tI"),o=r.n(n);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(o=n.key,a=void 0,a=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===i(a)?a:String(a)),n)}var o,a}function u(e,t){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(s,e);var t,r,n,i=l(s);function s(){return a(this,s),i.apply(this,arguments)}return t=s,(r=[{key:"render",value:function(){var e=this.props;return o.a.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 108 108"},o.a.createElement("circle",{cx:"53",cy:"55",r:"45",fill:"#47b9f3"}),o.a.createElement("rect",{x:"27.273",y:"41.204",width:"52.254",height:"34.501",rx:"5.219",ry:"5.219",transform:"rotate(.605 53.4 58.455)",fill:"#1274c6"}),o.a.createElement("path",{d:"M64.1 34.848s-9.912-.76-10.008 8.42-.093 24.736-.093 24.736S58.822 64.96 62.79 65l15.404.163A1.788 1.788 0 0 0 80 63.393l.281-26.601A1.773 1.773 0 0 0 78.527 35z",fill:"#309ef9"}),o.a.createElement("path",{d:"M43.971 34.157s10.21-.563 10.11 8.821S53.998 68 53.998 68s-5.25-2.957-9.331-3L28.78 64.83A1.786 1.786 0 0 1 27 63.04l.288-27.286A1.786 1.786 0 0 1 29.106 34z",fill:"#0d84fd"}))}}])&&c(t.prototype,r),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.a.PureComponent);p.defaultProps={size:60}}}]);