"use strict";
const React = require("react");
module.exports = [
  {
    name: "BackToTopButton",
    description: null,
    props: null,
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/back-to-top-button/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> BackToTopButton <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/back-to-top-button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BackToTopButton</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "BetaFlag",
    description: null,
    props: {
      tooltipText: {
        type: { name: "string" },
        required: false,
        defaultValue:
          "'This feature is in public beta and is subject to potential changes.'",
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/beta-flag/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> BetaFlag <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/beta-flag'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BetaFlag</span></span> <span class="token attr-name">tooltipText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cool!<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "BookImage",
    description: null,
    props: {
      size: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/book-image/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> BookImage <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/book-image'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BookImage</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "BookletImage",
    description: null,
    props: {
      size: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/booklet-image/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> BookletImage <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/booklet-image'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BookletImage</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "Card",
    description: null,
    props: {
      title: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      path: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      description: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      thumbnail: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      level: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      language: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/card/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/card'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cupidatat<span class="token punctuation">"</span></span>
        <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/api/<span class="token punctuation">"</span></span>
        <span class="token attr-name">thumbnail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h120 mb12<span class="token punctuation">"</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              backgroundImage<span class="token punctuation">:</span>
                <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
              backgroundSize<span class="token punctuation">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
              backgroundPosition<span class="token punctuation">:</span> <span class="token string">'center'</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">}</span></span>
        <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span class="token punctuation">"</span></span>
        <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>JavaScript<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "CardContainer",
    description: null,
    props: {
      title: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      path: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      fullWidthCards: {
        type: { name: "bool" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      cards: {
        type: { name: "arrayOf", value: { name: "node" } },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: { name: "node" }
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/card-container/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CardContainer <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/card-container'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/card/card'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CardContainer</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Another category<span class="token punctuation">"</span></span>
        <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#another-category<span class="token punctuation">"</span></span>
        <span class="token attr-name">fullWidthCards</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">cards</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span>
            <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span>
            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Example one<span class="token punctuation">"</span></span>
            <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>path<span class="token punctuation">"</span></span>
            <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span>
            <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>
            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Example two<span class="token punctuation">"</span></span>
            <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>path<span class="token punctuation">"</span></span>
            <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "CodeToggle",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      onChange: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      options: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              language: {
                name: "enum",
                value: [
                  { value: "'swift'", computed: false },
                  { value: "'objective-c'", computed: false },
                  { value: "'java'", computed: false },
                  { value: "'kotlin'", computed: false },
                  { value: "'javascript'", computed: false }
                ],
                required: true
              },
              preferredLanguage: { name: "bool", required: true }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: {
          name: "shape",
          value: {
            language: {
              name: "enum",
              value: [
                { value: "'swift'", computed: false },
                { value: "'objective-c'", computed: false },
                { value: "'java'", computed: false },
                { value: "'kotlin'", computed: false },
                { value: "'javascript'", computed: false }
              ],
              required: true
            },
            preferredLanguage: { name: "bool", required: true }
          }
        }
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/code-toggle/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CodeToggle <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/code-toggle'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CodeToggle</span></span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>one<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            language<span class="token punctuation">:</span> <span class="token string">'swift'</span><span class="token punctuation">,</span>
            preferredLanguage<span class="token punctuation">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            language<span class="token punctuation">:</span> <span class="token string">'objective-c'</span><span class="token punctuation">,</span>
            preferredLanguage<span class="token punctuation">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "ContactImage",
    description: null,
    props: {
      size: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/contact-image/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ContactImage <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/contact-image'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ContactImage</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "ExamplesPage",
    description: null,
    props: {
      frontMatter: {
        type: {
          name: "shape",
          value: {
            title: { name: "string", required: true },
            description: { name: "string", required: true }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: {
          title: { name: "string", required: true },
          description: { name: "string", required: true }
        }
      },
      cardContainers: {
        type: { name: "arrayOf", value: { name: "node" } },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: { name: "node" }
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/examples-page/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ExamplesPage <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/examples-page'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/card/card'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CardContainer <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/card-container/card-container'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ExamplesPage</span></span>
        <span class="token attr-name">frontMatter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          title<span class="token punctuation">:</span> <span class="token string">'Title'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'Description.'</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">cardContainers</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token operator">&lt;</span>CardContainer
            title<span class="token operator">=</span><span class="token string">"Container title one"</span>
            path<span class="token operator">=</span><span class="token string">"#container-title-one"</span>
            fullWidthCards<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>
            cards<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
              <span class="token operator">&lt;</span>Card
                key<span class="token operator">=</span><span class="token string">"0"</span>
                title<span class="token operator">=</span><span class="token string">"Example one"</span>
                path<span class="token operator">=</span><span class="token string">"path"</span>
                description<span class="token operator">=</span><span class="token string">"Lorem ipsum dolor sit amet."</span>
                thumbnail<span class="token operator">=</span><span class="token punctuation">{</span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
                    <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h120 mb12<span class="token punctuation">"</span></span>
                    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                      backgroundImage<span class="token punctuation">:</span>
                        <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
                      backgroundSize<span class="token punctuation">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
                      backgroundPosition<span class="token punctuation">:</span> <span class="token string">'center'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
                  <span class="token punctuation">/></span></span>
                <span class="token punctuation">}</span></span>
              <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span>
                <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>
                <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Example two<span class="token punctuation">"</span></span>
                <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>path<span class="token punctuation">"</span></span>
                <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Consectetur adipisicing elit<span class="token punctuation">"</span></span>
                <span class="token attr-name">thumbnail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
                    <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h120 mb12<span class="token punctuation">"</span></span>
                    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                      backgroundImage<span class="token punctuation">:</span>
                        <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
                      backgroundSize<span class="token punctuation">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
                      backgroundPosition<span class="token punctuation">:</span> <span class="token string">'center'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
                  <span class="token punctuation">/></span></span>
                <span class="token punctuation">}</span></span>
              <span class="token punctuation">/></span></span>
            <span class="token punctuation">]</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CardContainer</span></span>
            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Container title two<span class="token punctuation">"</span></span>
            <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#container-title-two<span class="token punctuation">"</span></span>
            <span class="token attr-name">fullWidthCards</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">cards</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
              <span class="token operator">&lt;</span>Card
                key<span class="token operator">=</span><span class="token string">"0"</span>
                title<span class="token operator">=</span><span class="token string">"Example one"</span>
                path<span class="token operator">=</span><span class="token string">"path"</span>
                description<span class="token operator">=</span><span class="token string">"Ded do eiusmod tempor incididunt ut labore et dolore magna aliqua."</span>
                thumbnail<span class="token operator">=</span><span class="token punctuation">{</span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
                    <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h120 mb12<span class="token punctuation">"</span></span>
                    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                      backgroundImage<span class="token punctuation">:</span>
                        <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
                      backgroundSize<span class="token punctuation">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
                      backgroundPosition<span class="token punctuation">:</span> <span class="token string">'center'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
                  <span class="token punctuation">/></span></span>
                <span class="token punctuation">}</span></span>
              <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span>
                <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>
                <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Example two<span class="token punctuation">"</span></span>
                <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>path<span class="token punctuation">"</span></span>
                <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span class="token punctuation">"</span></span>
                <span class="token attr-name">thumbnail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
                    <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h120 mb12<span class="token punctuation">"</span></span>
                    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                      backgroundImage<span class="token punctuation">:</span>
                        <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
                      backgroundSize<span class="token punctuation">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
                      backgroundPosition<span class="token punctuation">:</span> <span class="token string">'center'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
                  <span class="token punctuation">/></span></span>
                <span class="token punctuation">}</span></span>
              <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span>
                <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
                <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Example two<span class="token punctuation">"</span></span>
                <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>path<span class="token punctuation">"</span></span>
                <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<span class="token punctuation">"</span></span>
                <span class="token attr-name">thumbnail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
                    <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h120 mb12<span class="token punctuation">"</span></span>
                    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                      backgroundImage<span class="token punctuation">:</span>
                        <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
                      backgroundSize<span class="token punctuation">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
                      backgroundPosition<span class="token punctuation">:</span> <span class="token string">'center'</span>
                    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
                  <span class="token punctuation">/></span></span>
                <span class="token punctuation">}</span></span>
              <span class="token punctuation">/></span></span>
            <span class="token punctuation">]</span><span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "LevelIndicator",
    description: null,
    props: {
      level: {
        type: {
          name: "enum",
          value: [
            { value: "1", computed: false },
            { value: "2", computed: false },
            { value: "3", computed: false }
          ]
        },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: [
          { value: "1", computed: false },
          { value: "2", computed: false },
          { value: "3", computed: false }
        ]
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/level-indicator/examples/advanced.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LevelIndicator <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/level-indicator'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LevelIndicator</span></span> <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Advanced.</p>
      },
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/level-indicator/examples/beginner.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LevelIndicator <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/level-indicator'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LevelIndicator</span></span> <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Beginner.</p>
      },
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/level-indicator/examples/interm.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LevelIndicator <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/level-indicator'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LevelIndicator</span></span> <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Intermediate.</p>
      }
    ]
  },
  {
    name: "NavigationAccordion",
    description: null,
    props: {
      currentPath: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      contents: {
        type: {
          name: "shape",
          value: {
            firstLevelItems: {
              name: "arrayOf",
              value: {
                name: "shape",
                value: {
                  title: { name: "string", required: true },
                  tag: { name: "node", required: false },
                  path: { name: "string", required: true }
                }
              },
              required: true
            },
            secondLevelItems: {
              name: "arrayOf",
              value: {
                name: "shape",
                value: {
                  title: { name: "string", required: true },
                  path: { name: "string", required: true },
                  thirdLevelItems: {
                    name: "arrayOf",
                    value: {
                      name: "shape",
                      value: {
                        title: { name: "string", required: true },
                        path: { name: "string", required: true }
                      }
                    },
                    required: false
                  }
                }
              },
              required: false
            }
          }
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: {
          firstLevelItems: {
            name: "arrayOf",
            value: {
              name: "shape",
              value: {
                title: { name: "string", required: true },
                tag: { name: "node", required: false },
                path: { name: "string", required: true }
              }
            },
            required: true
          },
          secondLevelItems: {
            name: "arrayOf",
            value: {
              name: "shape",
              value: {
                title: { name: "string", required: true },
                path: { name: "string", required: true },
                thirdLevelItems: {
                  name: "arrayOf",
                  value: {
                    name: "shape",
                    value: {
                      title: { name: "string", required: true },
                      path: { name: "string", required: true }
                    }
                  },
                  required: false
                }
              }
            },
            required: false
          }
        }
      },
      onDropdownChange: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/navigation-accordion/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> NavigationAccordion <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/navigation-accordion'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavigationAccordion</span></span>
        <span class="token attr-name">currentPath</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>page-one<span class="token punctuation">"</span></span>
        <span class="token attr-name">contents</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          firstLevelItems<span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              title<span class="token punctuation">:</span> <span class="token string">'Title one'</span><span class="token punctuation">,</span>
              path<span class="token punctuation">:</span> <span class="token string">'page-one'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              title<span class="token punctuation">:</span> <span class="token string">'Title two'</span><span class="token punctuation">,</span>
              path<span class="token punctuation">:</span> <span class="token string">'page-two'</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          secondLevelItems<span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              title<span class="token punctuation">:</span> <span class="token string">'Heading one'</span><span class="token punctuation">,</span>
              path<span class="token punctuation">:</span> <span class="token string">'heading-one'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              title<span class="token punctuation">:</span> <span class="token string">'Heading two'</span><span class="token punctuation">,</span>
              path<span class="token punctuation">:</span> <span class="token string">'heading-two'</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onDropdownChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "NavigationDropdown",
    description: null,
    props: {
      currentPath: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      dropdownOptions: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              title: { name: "string", required: true },
              path: { name: "string", required: true }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: {
          name: "shape",
          value: {
            title: { name: "string", required: true },
            path: { name: "string", required: true }
          }
        }
      },
      onChange: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/navigation-dropdown/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> NavigationDropdown <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/navigation-dropdown'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavigationDropdown</span></span>
        <span class="token attr-name">currentPath</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>page-one<span class="token punctuation">"</span></span>
        <span class="token attr-name">dropdownOptions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token punctuation">:</span> <span class="token string">'Title one'</span><span class="token punctuation">,</span>
            path<span class="token punctuation">:</span> <span class="token string">'page-one'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token punctuation">:</span> <span class="token string">'Title two'</span><span class="token punctuation">,</span>
            path<span class="token punctuation">:</span> <span class="token string">'page-two'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "Note",
    description: null,
    props: {
      title: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      imageComponent: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      theme: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/note/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Note <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/note'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> BookImage <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/book-image/book-image'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Note</span></span> <span class="token attr-name">imageComponent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BookImage</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        Here is a little thing to note.
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Note</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "OverviewHeader",
    description: null,
    props: {
      features: {
        type: { name: "arrayOf", value: { name: "string" } },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: { name: "string" }
      },
      title: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      beta: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />,
        options: undefined
      },
      image: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      version: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      changelogLink: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      installLink: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      ghLink: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      contactLink: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/overview-header/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> OverviewHeader <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/overview-header'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">OverviewHeader</span></span>
        <span class="token attr-name">features</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token string">'Smooth scrambled eggs'</span><span class="token punctuation">,</span>
          <span class="token string">'Vegetarian sausage'</span><span class="token punctuation">,</span>
          <span class="token string">'Fruit syrups'</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Mapbox SDK for Breakfast<span class="token punctuation">"</span></span>
        <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0.1.0<span class="token punctuation">"</span></span>
        <span class="token attr-name">changelogLink</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://keepachangelog.com/en/0.3.0/<span class="token punctuation">"</span></span>
        <span class="token attr-name">installLink</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://www.mapbox.com/install<span class="token punctuation">"</span></span>
        <span class="token attr-name">ghLink</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://github.com/mapbox<span class="token punctuation">"</span></span>
        <span class="token attr-name">image</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
            <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">300</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg<span class="token punctuation">"</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "PageLayout",
    description: null,
    props: {
      sidebarContent: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      sidebarTitle: {
        type: { name: "union", value: [{ name: "node" }, { name: "string" }] },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: [{ name: "node" }, { name: "string" }]
      },
      sidebarTheme: {
        type: { name: "string" },
        required: false,
        defaultValue: "'bg-gray-faint'",
        description: <div />,
        options: undefined
      },
      sidebarContentStickyTop: {
        type: { name: "number" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      sidebarContentStickyTopNarrow: {
        type: { name: "number" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      sidebarStackedOnNarrowScreens: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />,
        options: undefined
      },
      sideBarColSize: {
        type: { name: "number" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      interactiveClass: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: []
  },
  {
    name: "ProductMenu",
    description: null,
    props: {
      productName: {
        type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: [{ name: "string" }, { name: "node" }]
      },
      beta: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />,
        options: undefined
      },
      lightText: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />,
        options: undefined
      },
      homePage: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/product-menu/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ProductMenu <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/product-menu'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProductMenu</span></span> <span class="token attr-name">productName</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Egg SDK<span class="token punctuation">"</span></span> <span class="token attr-name">homePage</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/egg-sdk/<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      },
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/product-menu/examples/beta.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ProductMenu <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/product-menu'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ProductMenu</span></span> <span class="token attr-name">productName</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Egg SDK<span class="token punctuation">"</span></span> <span class="token attr-name">homePage</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/egg-sdk/<span class="token punctuation">"</span></span> <span class="token attr-name">beta</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Beta.</p>
      }
    ]
  },
  {
    name: "Search",
    description: null,
    props: {
      placeholder: {
        type: { name: "string" },
        required: false,
        defaultValue: "'Search docs.mapbox.com'",
        description: <div />,
        options: undefined
      },
      narrow: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      background: {
        type: {
          name: "enum",
          value: [
            { value: "'light'", computed: false },
            { value: "'dark'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'light'",
        description: <div />,
        options: [
          { value: "'light'", computed: false },
          { value: "'dark'", computed: false }
        ]
      },
      inputId: {
        type: { name: "string" },
        required: false,
        defaultValue: "'docs-search'",
        description: <div />,
        options: undefined
      },
      disableModal: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      site: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/search/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Search <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/search'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span> <span class="token attr-name">site</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>API<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      },
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/search/examples/diabled.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Search <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/search'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span> <span class="token attr-name">disableModal</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Disable modal, only show input.</p>
      },
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/search/examples/narrow.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Search <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/search'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span> <span class="token attr-name">narrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Narrow.</p>
      }
    ]
  },
  {
    name: "SectionedNavigation",
    description: null,
    props: {
      sections: {
        type: { name: "arrayOf", value: { name: "object" } },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: { name: "object" }
      },
      title: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      includeCount: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: <div />,
        options: undefined
      },
      includeFilterBar: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />,
        options: undefined
      },
      hideSubItems: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/sectioned-navigation/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> SectionedNavigation <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/sectioned-navigation'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SectionedNavigation</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Examples<span class="token punctuation">"</span></span>
        <span class="token attr-name">sections</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token punctuation">:</span> <span class="token string">'Getting started'</span><span class="token punctuation">,</span>
            url<span class="token punctuation">:</span> <span class="token string">'#getting-started'</span><span class="token punctuation">,</span>
            items<span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                text<span class="token punctuation">:</span> <span class="token string">'Camera animation'</span><span class="token punctuation">,</span>
                url<span class="token punctuation">:</span> <span class="token string">'#foo'</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                text<span class="token punctuation">:</span> <span class="token string">'Mark a place'</span><span class="token punctuation">,</span>
                url<span class="token punctuation">:</span> <span class="token string">'#footoo'</span><span class="token punctuation">,</span>
                active<span class="token punctuation">:</span> <span class="token boolean">true</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                text<span class="token punctuation">:</span> <span class="token string">'Apply a style'</span><span class="token punctuation">,</span>
                url<span class="token punctuation">:</span> <span class="token string">'#fooandyou'</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token punctuation">:</span> <span class="token string">'Markers and callouts'</span><span class="token punctuation">,</span>
            url<span class="token punctuation">:</span> <span class="token string">'#markers'</span><span class="token punctuation">,</span>
            items<span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                text<span class="token punctuation">:</span> <span class="token string">'Annotation models'</span><span class="token punctuation">,</span>
                url<span class="token punctuation">:</span> <span class="token string">'#fooboo'</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                text<span class="token punctuation">:</span> <span class="token string">'Callouts'</span><span class="token punctuation">,</span>
                url<span class="token punctuation">:</span> <span class="token string">'#foocrew'</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token punctuation">:</span> <span class="token string">'Getting started again'</span><span class="token punctuation">,</span>
            url<span class="token punctuation">:</span> <span class="token string">'#getting-started-again'</span><span class="token punctuation">,</span>
            items<span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                text<span class="token punctuation">:</span> <span class="token string">'Apply a style'</span><span class="token punctuation">,</span>
                url<span class="token punctuation">:</span> <span class="token string">'#fooblue'</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "ToggleableCodeBlock",
    description: null,
    props: {
      codeSnippet: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              language: {
                name: "enum",
                value: [
                  { value: "'swift'", computed: false },
                  { value: "'objective-c'", computed: false },
                  { value: "'java'", computed: false },
                  { value: "'kotlin'", computed: false },
                  { value: "'javascript'", computed: false }
                ],
                required: false
              },
              rawCode: { name: "string", required: true },
              highlightedCode: { name: "string", required: true },
              preferredLanguage: { name: "bool", required: true }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: {
          name: "shape",
          value: {
            language: {
              name: "enum",
              value: [
                { value: "'swift'", computed: false },
                { value: "'objective-c'", computed: false },
                { value: "'java'", computed: false },
                { value: "'kotlin'", computed: false },
                { value: "'javascript'", computed: false }
              ],
              required: false
            },
            rawCode: { name: "string", required: true },
            highlightedCode: { name: "string", required: true },
            preferredLanguage: { name: "bool", required: true }
          }
        }
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/toggleable-code-block/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ToggleableCodeBlock <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/toggleable-code-block'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> highlightCodeBlock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/../util/highlight-code-block'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> swiftCodeSnippet <span class="token operator">=</span> <span class="token template-string"><span class="token string">&#96;
    import Mapbox
      class ViewController: UIViewController {
      override func viewDidLoad() {
      super.viewDidLoad()

      let url = URL(string: "mapbox://styles/mapbox/streets-v10")
      let mapView = MGLMapView(frame: view.bounds, styleURL: url)
      mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
      mapView.setCenter(CLLocationCoordinate2D(latitude: 59.31, longitude: 18.06), zoomLevel: 9, animated: false)
      view.addSubview(mapView)
    }
    &#96;</span></span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> objectiveCCodeSnippet <span class="token operator">=</span> <span class="token template-string"><span class="token string">&#96;
    #import "ViewController.h"
    @import Mapbox;

    @implementation ViewController

    - (void)viewDidLoad {
      [super viewDidLoad];

      NSURL *url = [NSURL URLWithString:@"mapbox://styles/mapbox/streets-v10"];
      MGLMapView *mapView = [[MGLMapView alloc] initWithFrame:self.view.bounds styleURL:url];
      mapView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
      [mapView setCenterCoordinate:CLLocationCoordinate2DMake(59.31, 18.06)
      zoomLevel:9
      animated:NO];
      [self.view addSubview:mapView];
    }

    @end
    &#96;</span></span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ToggleableCodeBlock</span></span>
        <span class="token attr-name">codeSnippet</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            language<span class="token punctuation">:</span> <span class="token string">'swift'</span><span class="token punctuation">,</span>
            rawCode<span class="token punctuation">:</span> swiftCodeSnippet<span class="token punctuation">,</span>
            highlightedCode<span class="token punctuation">:</span> <span class="token function">highlightCodeBlock</span><span class="token punctuation">(</span>swiftCodeSnippet<span class="token punctuation">)</span><span class="token punctuation">,</span>
            preferredLanguage<span class="token punctuation">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            language<span class="token punctuation">:</span> <span class="token string">'objective-c'</span><span class="token punctuation">,</span>
            rawCode<span class="token punctuation">:</span> objectiveCCodeSnippet<span class="token punctuation">,</span>
            highlightedCode<span class="token punctuation">:</span> <span class="token function">highlightCodeBlock</span><span class="token punctuation">(</span>objectiveCCodeSnippet<span class="token punctuation">)</span><span class="token punctuation">,</span>
            preferredLanguage<span class="token punctuation">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "TopbarSticker",
    description: null,
    props: {
      unStickWidth: {
        type: { name: "number" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/topbar-sticker/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TopbarSticker <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/topbar-sticker'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token punctuation">:</span> <span class="token string">'pink'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">3000</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>px24 py12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Above the bar.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TopbarSticker</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>px24 py12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            Here's some content that sticks to the top.
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">TopbarSticker</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>px24 py12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          Below the bar, with lots of space to scroll.
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "TroubleshootImage",
    description: null,
    props: {
      size: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/troubleshoot-image/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TroubleshootImage <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/troubleshoot-image'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TroubleshootImage</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "WarningImage",
    description: null,
    props: {
      size: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      color: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/warning-image/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> WarningImage <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/warning-image'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">WarningImage</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  }
];
