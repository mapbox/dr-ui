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
        description: <div />
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
        description: <div />
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
        description: <div />
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
        description: <div />
      },
      path: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      description: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      thumbnail: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      level: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      language: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
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
        description: <div />
      },
      path: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      fullWidthCards: {
        type: { name: "bool" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      cards: {
        type: { name: "arrayOf", value: { name: "node" } },
        required: true,
        defaultValue: undefined,
        description: <div />
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
        description: <div />
      },
      onChange: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: <div />
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
        description: <div />
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
        description: <div />
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
        description: <div />
      },
      cardContainers: {
        type: { name: "arrayOf", value: { name: "node" } },
        required: true,
        defaultValue: undefined,
        description: <div />
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
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ExamplesPage frontMatter<span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>
      <span class="token string">"title"</span><span class="token punctuation">:</span> <span class="token string">'Title'</span><span class="token punctuation">,</span>
      <span class="token string">"description"</span><span class="token punctuation">:</span> <span class="token string">'Description.'</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span>
    cardContainers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CardContainer</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Container title one<span class="token punctuation">"</span></span>
        <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#container-title-one<span class="token punctuation">"</span></span>
        <span class="token attr-name">fullWidthCards</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">cards</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
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
    <span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
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
        description: <div />
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
        description: <div />
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
        description: <div />
      },
      onDropdownChange: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/navigation-accordion/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> NavigationAccordion <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/navigation-accordion'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavigationAccordion</span></span> <span class="token attr-name">currentPath</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">'</span>page-one<span class="token punctuation">'</span></span>
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
    <span class="token attr-name">onDropdownChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Intermediate.</p>
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
        description: <div />
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
        description: <div />
      },
      onChange: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/navigation-dropdown/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> NavigationDropdown <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/navigation-dropdown'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>NavigationDropdown
      currentPath<span class="token operator">=</span> <span class="token string">'page-one'</span>
      dropdownOptions<span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          title<span class="token punctuation">:</span> <span class="token string">'Title one'</span><span class="token punctuation">,</span>
          path<span class="token punctuation">:</span> <span class="token string">'page-one'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          title<span class="token punctuation">:</span> <span class="token string">'Title two'</span><span class="token punctuation">,</span>
          path<span class="token punctuation">:</span> <span class="token string">'page-two'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span>
      onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
     <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Intermediate.</p>
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
        description: <div />
      },
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      imageComponent: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      theme: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
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
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Note</span></span> <span class="token attr-name">imageComponent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BookImage</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
     <span class="token punctuation">></span></span><span class="token plain-text">

       Here is a little thing to note.

     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Note</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Intermediate.</p>
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
        description: <div />
      },
      title: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      beta: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />
      },
      image: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      version: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      changelogLink: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      installLink: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      ghLink: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      contactLink: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/overview-header/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> OverviewHeader <span class="token keyword">from</span> <span class="token string">'@mapbox/mr-ui/overview-header'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>OverviewHeader

      features<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token string">'Smooth scrambled eggs'</span><span class="token punctuation">,</span> <span class="token string">'Vegetarian sausage'</span><span class="token punctuation">,</span> <span class="token string">'Fruit syrups'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
      title<span class="token operator">=</span><span class="token string">'Mapbox SDK for Breakfast'</span>
      version<span class="token operator">=</span><span class="token string">'0.1.0'</span>
      changelogLink<span class="token operator">=</span><span class="token string">'https://keepachangelog.com/en/0.3.0/'</span>
      installLink<span class="token operator">=</span><span class="token string">'https://www.mapbox.com/install'</span>
      ghLink<span class="token operator">=</span><span class="token string">'https://github.com/mapbox'</span>
      image<span class="token operator">=</span>
        <span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
          <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">300</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://farm2.staticflickr.com/1790/29050447978_41e671dcd5_o.jpg<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token punctuation">}</span>


    <span class="token operator">/</span><span class="token operator">></span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Intermediate.</p>
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
        description: <div />
      },
      sidebarTitle: {
        type: { name: "union", value: [{ name: "node" }, { name: "string" }] },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      sidebarTheme: {
        type: { name: "string" },
        required: false,
        defaultValue: "'bg-gray-faint'",
        description: <div />
      },
      sidebarContentStickyTop: {
        type: { name: "number" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      sidebarContentStickyTopNarrow: {
        type: { name: "number" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      sidebarStackedOnNarrowScreens: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />
      },
      sideBarColSize: {
        type: { name: "number" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      interactiveClass: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />
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
        description: <div />
      },
      beta: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />
      },
      lightText: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />
      },
      homePage: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "Search",
    description: null,
    props: {
      placeholder: {
        type: { name: "string" },
        required: false,
        defaultValue: "'Search docs.mapbox.com'",
        description: <div />
      },
      narrow: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: <div />
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
        description: <div />
      },
      inputId: {
        type: { name: "string" },
        required: false,
        defaultValue: "'docs-search'",
        description: <div />
      },
      disableModal: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "SectionedNavigation",
    description: null,
    props: {
      sections: {
        type: { name: "arrayOf", value: { name: "object" } },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      title: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      includeCount: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: <div />
      },
      includeFilterBar: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />
      },
      hideSubItems: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />
      }
    },
    examples: []
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
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "TopbarSticker",
    description: null,
    props: {
      unStickWidth: {
        type: { name: "number" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "TroubleshootImage",
    description: null,
    props: {
      size: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
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
        description: <div />
      },
      color: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
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
