"use strict";
const React = require("react");
module.exports = [
  {
    name: "AndroidLayoutCodeBlock",
    description: null,
    props: {
      filename: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      link: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      code: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/android-layout-code-block/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AndroidLayoutCodeBlock <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/android-layout-code-block'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Basic</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&lt;?xml version="1.0" encoding="utf-8"?>
&lt;android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
xmlns:mapbox="http://schemas.android.com/apk/res-auto"
android:layout_width="match_parent"
android:layout_height="match_parent">

&lt;com.mapbox.mapboxsdk.maps.MapView
android:id="@+id/mapView"
android:layout_width="match_parent"
android:layout_height="match_parent"
mapbox:mapbox_cameraTargetLat="38.9098"
mapbox:mapbox_cameraTargetLng="-77.0295"
mapbox:mapbox_cameraZoom="12" />

&lt;Button
android:id="@+id/startButton"
android:layout_width="fill_parent"
android:layout_height="wrap_content"
android:layout_marginStart="16dp"
android:layout_marginLeft="16dp"
android:layout_marginTop="16dp"
android:layout_marginEnd="16dp"
android:background="@color/mapboxGrayLight"
android:enabled="false"
android:text="Start navigation"
android:textColor="@color/mapboxWhite"
mapbox:layout_constraintStart_toStartOf="parent"
mapbox:layout_constraintTop_toTopOf="parent" />
&lt;/android.support.constraint.ConstraintLayout></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AndroidLayoutCodeBlock</span></span> <span class="token attr-name">code</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      },
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/android-layout-code-block/examples/custom.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AndroidLayoutCodeBlock <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/android-layout-code-block'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Custom</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&lt;android.support.constraint.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:mapbox="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    &lt;com.mapbox.mapboxsdk.maps.MapView
        android:id="@+id/runtime_mapview"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        mapbox:mapbox_cameraTargetLat="19.948045"
        mapbox:mapbox_cameraTargetLng="-84.654463"
        mapbox:mapbox_cameraZoom="3.371717" />

    &lt;android.support.design.widget.FloatingActionButton
        android:id="@+id/floatingActionButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginEnd="16dp"
        android:layout_marginRight="16dp"
        android:layout_marginBottom="16dp"
        mapbox:layout_constraintBottom_toBottomOf="parent"
        mapbox:layout_constraintEnd_toEndOf="parent" />

&lt;/android.support.constraint.ConstraintLayout></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AndroidLayoutCodeBlock</span></span>
        <span class="token attr-name">code</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>code<span class="token punctuation">}</span></span>
        <span class="token attr-name">filename</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>activity_styles_runtime_styling<span class="token punctuation">"</span></span>
        <span class="token attr-name">link</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://github.com/mapbox/<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>With filename and GitHub link.</p>
      }
    ]
  },
  {
    name: "BackToTopButton",
    description: null,
    props: null,
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/back-to-top-button/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> BackToTopButton <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/back-to-top-button'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Basic</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BackToTopButton</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
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
        type: { name: "number" },
        required: false,
        defaultValue: "60",
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/book-image/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> BookImage <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/book-image'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BookImage</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
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
        type: { name: "number" },
        required: false,
        defaultValue: "60",
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/booklet-image/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> BookletImage <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/booklet-image'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Basic</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BookletImage</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "Browser",
    description: null,
    props: {
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
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/browser/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Browser <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/browser'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Basic</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Browser</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
          <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>./assets/browser-example.png<span class="token punctuation">"</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>round-b<span class="token punctuation">"</span></span>
          <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Manage styles in Studio.<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Browser</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/card'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Basic</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>My cool card<span class="token punctuation">"</span></span>
        <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span>
        <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>JavaScript<span class="token punctuation">"</span></span>
        <span class="token attr-name">thumbnail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h120 mb12<span class="token punctuation">"</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              backgroundImage<span class="token operator">:</span>
                <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
              backgroundSize<span class="token operator">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
              backgroundPosition<span class="token operator">:</span> <span class="token string">'center'</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">}</span></span>
        <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This card is very cool.<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      },
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/card/examples/custom.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/card'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Basic</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>My cool card<span class="token punctuation">"</span></span>
        <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span>
        <span class="token attr-name">level</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>JavaScript<span class="token punctuation">"</span></span>
        <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>This card is still cool despite not having a thumbnail.<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>No image</p>
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
<span class="token keyword">import</span> CardContainer <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/card-container'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/card/card'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CardContainer</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Category<span class="token punctuation">"</span></span>
        <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#category<span class="token punctuation">"</span></span>
        <span class="token attr-name">fullWidthCards</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">cards</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token operator">&lt;</span>Card
            key<span class="token operator">=</span><span class="token string">"0"</span>
            title<span class="token operator">=</span><span class="token string">"Example one"</span>
            path<span class="token operator">=</span><span class="token string">"path"</span>
            description<span class="token operator">=</span><span class="token string">"description"</span>
            thumbnail<span class="token operator">=</span><span class="token punctuation">{</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
                <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h120 mb12<span class="token punctuation">"</span></span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                  backgroundImage<span class="token operator">:</span>
                    <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
                  backgroundSize<span class="token operator">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
                  backgroundPosition<span class="token operator">:</span> <span class="token string">'center'</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">/></span></span>
            <span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span>
            <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span>
            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Example two<span class="token punctuation">"</span></span>
            <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>path<span class="token punctuation">"</span></span>
            <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span>
            <span class="token attr-name">thumbnail</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
                <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h120 mb12<span class="token punctuation">"</span></span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                  backgroundImage<span class="token operator">:</span>
                    <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
                  backgroundSize<span class="token operator">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
                  backgroundPosition<span class="token operator">:</span> <span class="token string">'center'</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">/></span></span>
            <span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      },
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/card-container/examples/custom.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CardContainer <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/card-container'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/card/card'</span><span class="token punctuation">;</span>

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
        description: <p>Full-width cards, no image</p>
      }
    ]
  },
  {
    name: "CodeSnippet",
    description: null,
    props: {
      code: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      highlighter: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      filename: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      maxHeight: {
        type: { name: "number" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      edit: {
        type: {
          name: "shape",
          value: {
            css: { name: "string", required: true },
            js: { name: "string", required: true },
            html: { name: "string", required: true },
            head: { name: "string", required: false },
            frontMatter: {
              name: "shape",
              value: {
                title: { name: "string", required: true },
                description: { name: "string", required: true },
                pathname: { name: "string", required: true }
              },
              required: false
            },
            resources: {
              name: "shape",
              value: {
                js: { name: "array", required: false },
                css: { name: "array", required: false }
              },
              required: false
            }
          }
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: {
          css: { name: "string", required: true },
          js: { name: "string", required: true },
          html: { name: "string", required: true },
          head: { name: "string", required: false },
          frontMatter: {
            name: "shape",
            value: {
              title: { name: "string", required: true },
              description: { name: "string", required: true },
              pathname: { name: "string", required: true }
            },
            required: false
          },
          resources: {
            name: "shape",
            value: {
              js: { name: "array", required: false },
              css: { name: "array", required: false }
            },
            required: false
          }
        }
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/code-snippet/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CodeSnippet <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/code-snippet'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> highlightHtml <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/highlight/html'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Basic</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CodeSnippet</span></span>
        <span class="token attr-name">code</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&lt;h1>Hello world!&lt;/h1></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">}</span></span>
        <span class="token attr-name">highlighter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> highlightHtml<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      },
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/code-snippet/examples/everything.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CodeSnippet <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/code-snippet'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> highlightHtml <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/highlight/html'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Everything</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CodeSnippet</span></span>
        <span class="token attr-name">code</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&lt;h1>Hello world!&lt;/h1></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">}</span></span>
        <span class="token attr-name">highlighter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> highlightHtml<span class="token punctuation">}</span></span>
        <span class="token attr-name">filename</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>index.html<span class="token punctuation">"</span></span>
        <span class="token attr-name">edit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          html<span class="token operator">:</span> <span class="token string">'&lt;h1>Hello world!&lt;/h1>'</span><span class="token punctuation">,</span>
          css<span class="token operator">:</span> <span class="token string">'h1 {color: red}'</span><span class="token punctuation">,</span>
          js<span class="token operator">:</span> <span class="token string">"console.log('hello!')"</span><span class="token punctuation">,</span>
          resources<span class="token operator">:</span> <span class="token punctuation">{</span>
            js<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            css<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          frontMatter<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'My Code'</span><span class="token punctuation">,</span>
            description<span class="token operator">:</span> <span class="token string">'cool code by mapbox'</span><span class="token punctuation">,</span>
            pathname<span class="token operator">:</span> <span class="token string">'/dr-ui'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>CodeSnippet with every feature</p>
      }
    ]
  },
  {
    name: "CodeSnippetTitle",
    description: null,
    props: {
      filename: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      link: {
        type: {
          name: "custom",
          raw:
            "function(props, propName, componentName) {\n  if (props[propName] && !/^https:\\/\\/github\\.com\\//.test(props[propName])) {\n    return new Error(\n      'Invalid prop `' +\n        propName +\n        '` supplied to' +\n        ' `' +\n        componentName +\n        '`. Validation failed.'\n    );\n  }\n}"
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      toggle: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/code-snippet-title/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CodeSnippetTitle <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/code-snippet-title'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Basic</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CodeSnippetTitle</span></span>
        <span class="token attr-name">filename</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>MainActivity.java<span class="token punctuation">"</span></span>
        <span class="token attr-name">link</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://github.com/mapbox/<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      },
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/code-snippet-title/examples/custom.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CodeSnippetTitle <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/code-snippet-title'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CodeToggle <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/code-toggle'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Custom</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CodeSnippetTitle</span></span>
        <span class="token attr-name">filename</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ViewController<span class="token punctuation">"</span></span>
        <span class="token attr-name">link</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://github.com/mapbox/<span class="token punctuation">"</span></span>
        <span class="token attr-name">toggle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CodeToggle</span></span>
            <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>some-id<span class="token punctuation">"</span></span>
            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                label<span class="token operator">:</span> <span class="token string">'Swift'</span><span class="token punctuation">,</span>
                language<span class="token operator">:</span> <span class="token string">'swift'</span><span class="token punctuation">,</span>
                preferredLanguage<span class="token operator">:</span> <span class="token boolean">true</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                label<span class="token operator">:</span> <span class="token string">'Objective-C'</span><span class="token punctuation">,</span>
                language<span class="token operator">:</span> <span class="token string">'objectiveC'</span><span class="token punctuation">,</span>
                preferredLanguage<span class="token operator">:</span> <span class="token boolean">false</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">/></span></span>
        <span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>With toggle</p>
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
              label: { name: "string", required: true },
              language: { name: "string", required: true },
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
            label: { name: "string", required: true },
            language: { name: "string", required: true },
            preferredLanguage: { name: "bool", required: true }
          }
        }
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/code-toggle/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CodeToggle <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/code-toggle'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Basic</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CodeToggle</span></span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>one<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'Swift'</span><span class="token punctuation">,</span>
            language<span class="token operator">:</span> <span class="token string">'swift'</span><span class="token punctuation">,</span>
            preferredLanguage<span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'Objective-C'</span><span class="token punctuation">,</span>
            language<span class="token operator">:</span> <span class="token string">'objectiveC'</span><span class="token punctuation">,</span>
            preferredLanguage<span class="token operator">:</span> <span class="token boolean">false</span>
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
        type: { name: "number" },
        required: false,
        defaultValue: "60",
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/contact-image/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ContactImage <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/contact-image'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Basic</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ContactImage</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "ContextlessAndroidActivityToggle",
    description: null,
    props: {
      context: {
        type: {
          name: "shape",
          value: {
            languages: {
              name: "shape",
              value: {
                android: {
                  name: "arrayOf",
                  value: {
                    name: "shape",
                    value: {
                      label: {
                        name: "enum",
                        value: [
                          { value: "'Kotlin'", computed: false },
                          { value: "'Java'", computed: false }
                        ],
                        required: true
                      },
                      value: {
                        name: "enum",
                        value: [
                          { value: "'kotlin'", computed: false },
                          { value: "'java'", computed: false }
                        ],
                        required: true
                      }
                    }
                  },
                  required: true
                }
              },
              required: true
            },
            preferredLanguage: {
              name: "shape",
              value: {
                android: {
                  name: "enum",
                  value: [
                    { value: "'kotlin'", computed: false },
                    { value: "'java'", computed: false }
                  ],
                  required: true
                }
              },
              required: true
            },
            changeLanguage: {
              name: "shape",
              value: { android: { name: "func", required: true } },
              required: true
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: {
          languages: {
            name: "shape",
            value: {
              android: {
                name: "arrayOf",
                value: {
                  name: "shape",
                  value: {
                    label: {
                      name: "enum",
                      value: [
                        { value: "'Kotlin'", computed: false },
                        { value: "'Java'", computed: false }
                      ],
                      required: true
                    },
                    value: {
                      name: "enum",
                      value: [
                        { value: "'kotlin'", computed: false },
                        { value: "'java'", computed: false }
                      ],
                      required: true
                    }
                  }
                },
                required: true
              }
            },
            required: true
          },
          preferredLanguage: {
            name: "shape",
            value: {
              android: {
                name: "enum",
                value: [
                  { value: "'kotlin'", computed: false },
                  { value: "'java'", computed: false }
                ],
                required: true
              }
            },
            required: true
          },
          changeLanguage: {
            name: "shape",
            value: { android: { name: "func", required: true } },
            required: true
          }
        }
      },
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      java: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      kotlin: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      copyRanges: {
        type: {
          name: "shape",
          value: {
            java: { name: "array", required: false },
            kotlin: { name: "array", required: false }
          }
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: {
          java: { name: "array", required: false },
          kotlin: { name: "array", required: false }
        }
      },
      filename: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      link: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      limitHeight: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/contextless-android-activity-toggle/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ContextlessAndroidActivityToggle <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/contextless-android-activity-toggle'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Basic</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> contextJava <span class="token operator">=</span> <span class="token punctuation">{</span>
      languages<span class="token operator">:</span> <span class="token punctuation">{</span>
        android<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'Java'</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token string">'java'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'Kotlin'</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token string">'kotlin'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      preferredLanguage<span class="token operator">:</span> <span class="token punctuation">{</span>
        android<span class="token operator">:</span> <span class="token string">'java'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      changeLanguage<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">android</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> java <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">map.getStyle(new Style.OnStyleLoaded() {
      @Override
      public void onStyleLoaded(@NonNull Style style) {

        Layer settlementLabelLayer = style.getLayer("settlement-label");

        if (settlementLabelLayer != null) {
          settlementLabelLayer.setProperties(textField("{name_ru}"));
        }
      }
    });</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ContextlessAndroidActivityToggle</span></span>
        <span class="token attr-name">context</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>contextJava<span class="token punctuation">}</span></span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test-java-only<span class="token punctuation">"</span></span>
        <span class="token attr-name">java</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>java<span class="token punctuation">}</span></span>
        <span class="token attr-name">limitHeight</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onCopy</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "ContextlessIosViewControllerToggle",
    description: null,
    props: {
      context: {
        type: {
          name: "shape",
          value: {
            languages: {
              name: "shape",
              value: {
                ios: {
                  name: "arrayOf",
                  value: {
                    name: "shape",
                    value: {
                      label: {
                        name: "enum",
                        value: [
                          { value: "'Objective-C'", computed: false },
                          { value: "'Swift'", computed: false }
                        ],
                        required: true
                      },
                      value: {
                        name: "enum",
                        value: [
                          { value: "'objectiveC'", computed: false },
                          { value: "'swift'", computed: false }
                        ],
                        required: true
                      }
                    }
                  },
                  required: true
                }
              },
              required: true
            },
            preferredLanguage: {
              name: "shape",
              value: {
                ios: {
                  name: "enum",
                  value: [
                    { value: "'objectiveC'", computed: false },
                    { value: "'swift'", computed: false }
                  ],
                  required: true
                }
              },
              required: true
            },
            changeLanguage: {
              name: "shape",
              value: { ios: { name: "func", required: true } },
              required: true
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: {
          languages: {
            name: "shape",
            value: {
              ios: {
                name: "arrayOf",
                value: {
                  name: "shape",
                  value: {
                    label: {
                      name: "enum",
                      value: [
                        { value: "'Objective-C'", computed: false },
                        { value: "'Swift'", computed: false }
                      ],
                      required: true
                    },
                    value: {
                      name: "enum",
                      value: [
                        { value: "'objectiveC'", computed: false },
                        { value: "'swift'", computed: false }
                      ],
                      required: true
                    }
                  }
                },
                required: true
              }
            },
            required: true
          },
          preferredLanguage: {
            name: "shape",
            value: {
              ios: {
                name: "enum",
                value: [
                  { value: "'objectiveC'", computed: false },
                  { value: "'swift'", computed: false }
                ],
                required: true
              }
            },
            required: true
          },
          changeLanguage: {
            name: "shape",
            value: { ios: { name: "func", required: true } },
            required: true
          }
        }
      },
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      swift: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      objectiveC: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      copyRanges: {
        type: {
          name: "shape",
          value: {
            swift: { name: "array", required: false },
            objectiveC: { name: "array", required: false }
          }
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: {
          swift: { name: "array", required: false },
          objectiveC: { name: "array", required: false }
        }
      },
      filename: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      link: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      limitHeight: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/contextless-ios-view-controller-toggle/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ContextlessIosViewControllerToggle <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/contextless-ios-view-controller-toggle'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Basic</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> contextSwift <span class="token operator">=</span> <span class="token punctuation">{</span>
      languages<span class="token operator">:</span> <span class="token punctuation">{</span>
        ios<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'Swift'</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token string">'swift'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'Objective-C'</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token string">'objectiveC'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      preferredLanguage<span class="token operator">:</span> <span class="token punctuation">{</span>
        ios<span class="token operator">:</span> <span class="token string">'swift'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      changeLanguage<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">ios</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> swift <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">// 'style' in this case refers to an MGLStyle object.
    let layer = style.layer(withIdentifier: "place-city-sm") as! MGLSymbolStyleLayer
    let spanish = Locale(identifier: "es")
    layer.text = layer.text.mgl_expressionLocalized(into: spanish)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ContextlessIosViewControllerToggle</span></span>
        <span class="token attr-name">context</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>contextSwift<span class="token punctuation">}</span></span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test-swift-only<span class="token punctuation">"</span></span>
        <span class="token attr-name">swift</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>swift<span class="token punctuation">}</span></span>
        <span class="token attr-name">limitHeight</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onCopy</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "DemoIframe",
    description: null,
    props: {
      src: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      gl: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: <div />,
        options: undefined
      },
      MapboxAccessToken: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: []
  },
  {
    name: "Edit",
    description: null,
    props: {
      css: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      js: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      html: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      head: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      frontMatter: {
        type: {
          name: "shape",
          value: {
            title: { name: "string", required: true },
            description: { name: "string", required: true },
            pathname: { name: "string", required: true }
          }
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: {
          title: { name: "string", required: true },
          description: { name: "string", required: true },
          pathname: { name: "string", required: true }
        }
      },
      resources: {
        type: {
          name: "shape",
          value: {
            js: { name: "array", required: false },
            css: { name: "array", required: false }
          }
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: {
          js: { name: "array", required: false },
          css: { name: "array", required: false }
        }
      }
    },
    examples: []
  },
  {
    name: "ExampleImage",
    description: null,
    props: {
      size: {
        type: { name: "number" },
        required: false,
        defaultValue: "60",
        description: <div />,
        options: undefined
      }
    },
    examples: []
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
<span class="token keyword">import</span> ExamplesPage <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/examples-page'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/card/card'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CardContainer <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/card-container/card-container'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ExamplesPage</span></span>
        <span class="token attr-name">frontMatter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'Title'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'Description.'</span>
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
                      backgroundImage<span class="token operator">:</span>
                        <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
                      backgroundSize<span class="token operator">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
                      backgroundPosition<span class="token operator">:</span> <span class="token string">'center'</span>
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
                      backgroundImage<span class="token operator">:</span>
                        <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
                      backgroundSize<span class="token operator">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
                      backgroundPosition<span class="token operator">:</span> <span class="token string">'center'</span>
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
                      backgroundImage<span class="token operator">:</span>
                        <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
                      backgroundSize<span class="token operator">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
                      backgroundPosition<span class="token operator">:</span> <span class="token string">'center'</span>
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
                      backgroundImage<span class="token operator">:</span>
                        <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
                      backgroundSize<span class="token operator">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
                      backgroundPosition<span class="token operator">:</span> <span class="token string">'center'</span>
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
                      backgroundImage<span class="token operator">:</span>
                        <span class="token string">"url('https://i.giphy.com/media/A9lgUYVqLeRb2/giphy.gif')"</span><span class="token punctuation">,</span>
                      backgroundSize<span class="token operator">:</span> <span class="token string">'100% auto'</span><span class="token punctuation">,</span>
                      backgroundPosition<span class="token operator">:</span> <span class="token string">'center'</span>
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
    name: "Feedback",
    description: null,
    props: {
      type: {
        type: { name: "string" },
        required: false,
        defaultValue: "'page'",
        description: <div />,
        options: undefined
      },
      site: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      section: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      location: {
        type: { name: "object" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      webhook: {
        type: {
          name: "shape",
          value: {
            staging: { name: "string", required: true },
            production: { name: "string", required: true }
          }
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: {
          staging: { name: "string", required: true },
          production: { name: "string", required: true }
        }
      },
      user: {
        type: {
          name: "shape",
          value: {
            id: { name: "string", required: false },
            email: { name: "string", required: false },
            plan: {
              name: "shape",
              value: { id: { name: "string", required: false } },
              required: false
            }
          }
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: {
          id: { name: "string", required: false },
          email: { name: "string", required: false },
          plan: {
            name: "shape",
            value: { id: { name: "string", required: false } },
            required: false
          }
        }
      },
      preferredLanguage: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      feedbackSentryDsn: {
        type: { name: "union", value: [{ name: "string" }, { name: "bool" }] },
        required: false,
        defaultValue:
          "'https://eccc8b561b9a461990309b01d33d54e3@sentry.io/1848287'",
        description: <div />,
        options: [{ name: "string" }, { name: "bool" }]
      }
    },
    examples: []
  },
  {
    name: "GLWrapper",
    description: null,
    props: {
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
    name: "GlossaryCard",
    description: null,
    props: {
      entryTitle: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      entryUrl: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      entryDescription: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: []
  },
  {
    name: "GlossaryImage",
    description: null,
    props: {
      size: {
        type: { name: "number" },
        required: false,
        defaultValue: "60",
        description: <div />,
        options: undefined
      }
    },
    examples: []
  },
  {
    name: "GlossaryPage",
    description: null,
    props: {
      entries: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              path: { name: "string", required: true },
              title: { name: "string", required: true },
              description: { name: "string", required: true }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: {
          name: "shape",
          value: {
            path: { name: "string", required: true },
            title: { name: "string", required: true },
            description: { name: "string", required: true }
          }
        }
      }
    },
    examples: []
  },
  {
    name: "GlossarySection",
    description: null,
    props: {
      letter: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      entries: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              path: { name: "string", required: true },
              title: { name: "string", required: true },
              description: { name: "string", required: true }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: {
          name: "shape",
          value: {
            path: { name: "string", required: true },
            title: { name: "string", required: true },
            description: { name: "string", required: true }
          }
        }
      }
    },
    examples: []
  },
  {
    name: "Highlight",
    description: null,
    props: null,
    examples: []
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
<span class="token keyword">import</span> LevelIndicator <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/level-indicator'</span><span class="token punctuation">;</span>

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
<span class="token keyword">import</span> LevelIndicator <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/level-indicator'</span><span class="token punctuation">;</span>

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
<span class="token keyword">import</span> LevelIndicator <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/level-indicator'</span><span class="token punctuation">;</span>

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
                  tag: {
                    name: "enum",
                    value: [
                      { value: "'legacy'", computed: false },
                      { value: "'beta'", computed: false },
                      { value: "'fundamentals'", computed: false },
                      { value: "'new'", computed: false },
                      { value: "'custom'", computed: false }
                    ],
                    required: false
                  },
                  customTagProps: {
                    name: "shape",
                    value: {
                      customLabel: { name: "string", required: true },
                      customTooltipText: { name: "string", required: true },
                      customStyles: {
                        name: "shape",
                        value: {
                          background: { name: "string", required: true },
                          color: { name: "string", required: true },
                          borderColor: { name: "string", required: true }
                        },
                        required: true
                      }
                    },
                    required: false
                  },
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
                  tag: {
                    name: "enum",
                    value: [
                      { value: "'legacy'", computed: false },
                      { value: "'beta'", computed: false },
                      { value: "'fundamentals'", computed: false },
                      { value: "'new'", computed: false },
                      { value: "'custom'", computed: false }
                    ],
                    required: false
                  },
                  customTagProps: {
                    name: "shape",
                    value: {
                      customLabel: { name: "string", required: true },
                      customTooltipText: { name: "string", required: true },
                      customStyles: {
                        name: "shape",
                        value: {
                          background: { name: "string", required: true },
                          color: { name: "string", required: true },
                          borderColor: { name: "string", required: true }
                        },
                        required: true
                      }
                    },
                    required: false
                  },
                  path: { name: "string", required: true },
                  thirdLevelItems: {
                    name: "arrayOf",
                    value: {
                      name: "shape",
                      value: {
                        title: { name: "string", required: true },
                        icon: { name: "string", required: false },
                        tag: {
                          name: "enum",
                          value: [
                            { value: "'legacy'", computed: false },
                            { value: "'beta'", computed: false },
                            { value: "'fundamentals'", computed: false },
                            { value: "'new'", computed: false },
                            { value: "'custom'", computed: false }
                          ],
                          required: false
                        },
                        customTagProps: {
                          name: "shape",
                          value: {
                            customLabel: { name: "string", required: true },
                            customTooltipText: {
                              name: "string",
                              required: true
                            },
                            customStyles: {
                              name: "shape",
                              value: {
                                background: { name: "string", required: true },
                                color: { name: "string", required: true },
                                borderColor: { name: "string", required: true }
                              },
                              required: true
                            }
                          },
                          required: false
                        },
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
                tag: {
                  name: "enum",
                  value: [
                    { value: "'legacy'", computed: false },
                    { value: "'beta'", computed: false },
                    { value: "'fundamentals'", computed: false },
                    { value: "'new'", computed: false },
                    { value: "'custom'", computed: false }
                  ],
                  required: false
                },
                customTagProps: {
                  name: "shape",
                  value: {
                    customLabel: { name: "string", required: true },
                    customTooltipText: { name: "string", required: true },
                    customStyles: {
                      name: "shape",
                      value: {
                        background: { name: "string", required: true },
                        color: { name: "string", required: true },
                        borderColor: { name: "string", required: true }
                      },
                      required: true
                    }
                  },
                  required: false
                },
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
                tag: {
                  name: "enum",
                  value: [
                    { value: "'legacy'", computed: false },
                    { value: "'beta'", computed: false },
                    { value: "'fundamentals'", computed: false },
                    { value: "'new'", computed: false },
                    { value: "'custom'", computed: false }
                  ],
                  required: false
                },
                customTagProps: {
                  name: "shape",
                  value: {
                    customLabel: { name: "string", required: true },
                    customTooltipText: { name: "string", required: true },
                    customStyles: {
                      name: "shape",
                      value: {
                        background: { name: "string", required: true },
                        color: { name: "string", required: true },
                        borderColor: { name: "string", required: true }
                      },
                      required: true
                    }
                  },
                  required: false
                },
                path: { name: "string", required: true },
                thirdLevelItems: {
                  name: "arrayOf",
                  value: {
                    name: "shape",
                    value: {
                      title: { name: "string", required: true },
                      icon: { name: "string", required: false },
                      tag: {
                        name: "enum",
                        value: [
                          { value: "'legacy'", computed: false },
                          { value: "'beta'", computed: false },
                          { value: "'fundamentals'", computed: false },
                          { value: "'new'", computed: false },
                          { value: "'custom'", computed: false }
                        ],
                        required: false
                      },
                      customTagProps: {
                        name: "shape",
                        value: {
                          customLabel: { name: "string", required: true },
                          customTooltipText: { name: "string", required: true },
                          customStyles: {
                            name: "shape",
                            value: {
                              background: { name: "string", required: true },
                              color: { name: "string", required: true },
                              borderColor: { name: "string", required: true }
                            },
                            required: true
                          }
                        },
                        required: false
                      },
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
<span class="token keyword">import</span> NavigationAccordion <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/navigation-accordion'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavigationAccordion</span></span>
        <span class="token attr-name">currentPath</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>page-one<span class="token punctuation">"</span></span>
        <span class="token attr-name">contents</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          firstLevelItems<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              title<span class="token operator">:</span> <span class="token string">'Title one'</span><span class="token punctuation">,</span>
              path<span class="token operator">:</span> <span class="token string">'page-one'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              title<span class="token operator">:</span> <span class="token string">'Title two'</span><span class="token punctuation">,</span>
              path<span class="token operator">:</span> <span class="token string">'page-two'</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          secondLevelItems<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              title<span class="token operator">:</span> <span class="token string">'Heading one'</span><span class="token punctuation">,</span>
              path<span class="token operator">:</span> <span class="token string">'heading-one'</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              title<span class="token operator">:</span> <span class="token string">'Heading two'</span><span class="token punctuation">,</span>
              path<span class="token operator">:</span> <span class="token string">'heading-two'</span>
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
<span class="token keyword">import</span> NavigationDropdown <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/navigation-dropdown'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavigationDropdown</span></span>
        <span class="token attr-name">currentPath</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>page-one<span class="token punctuation">"</span></span>
        <span class="token attr-name">dropdownOptions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Title one'</span><span class="token punctuation">,</span>
            path<span class="token operator">:</span> <span class="token string">'page-one'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Title two'</span><span class="token punctuation">,</span>
            path<span class="token operator">:</span> <span class="token string">'page-two'</span>
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
      theme: {
        type: {
          name: "enum",
          value: [
            { value: "'warning'", computed: false },
            { value: "'error'", computed: false },
            { value: "'download'", computed: false },
            { value: "'legacy'", computed: false },
            { value: "'beta'", computed: false },
            { value: "'default'", computed: false },
            { value: "'new'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'default'",
        description: <div />,
        options: [
          { value: "'warning'", computed: false },
          { value: "'error'", computed: false },
          { value: "'download'", computed: false },
          { value: "'legacy'", computed: false },
          { value: "'beta'", computed: false },
          { value: "'default'", computed: false },
          { value: "'new'", computed: false }
        ]
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/note/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Note <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/note'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Note</span></span><span class="token punctuation">></span></span><span class="token plain-text">Here is a little thing to note.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Note</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "NumberedCodeSnippet",
    description: null,
    props: {
      code: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: (
          <p>
            Raw (unhighlighted) code. When the user clicks a copy button, this
            is what they'll get. If no <code>highlightedCode</code> is provided,{" "}
            <code>code</code> is displayed.
          </p>
        ),
        options: undefined
      },
      highlightedCode: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            The HTML output of running code through a syntax highlighter. If
            this is not provided,
            <code>code</code> is displayed, instead. The default theme CSS
            assumes the highlighter is
            <a href="https://github.com/isagalaev/highlight.js">
              <code>highlight.js</code>
            </a>
            . If you are using another highlighter, provide your own theme.
          </p>
        ),
        options: undefined
      },
      copyRanges: {
        type: {
          name: "arrayOf",
          value: { name: "arrayOf", value: { name: "number" } }
        },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            Specific line ranges that should be independently copiable. Each
            range is a two-value array, consisting of the starting and ending
            line. If this is not provided, the entire snippet is copiable.
          </p>
        ),
        options: { name: "arrayOf", value: { name: "number" } }
      },
      maxHeight: {
        type: { name: "number" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            A maximum height for the snippet. If the code exceeds this height,
            the snippet will scroll internally.
          </p>
        ),
        options: undefined
      },
      onCopy: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: (
          <p>
            A callback that is invoked when the snippet (or a chunk of the
            snippet) is copied. If <code>copyRanges</code>
            are provided, the callback is passed the index (0-based) of the
            chunk that was copied.
          </p>
        ),
        options: undefined
      },
      highlightThemeCss: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <p>CSS that styles the highlighted code.</p>,
        options: undefined
      },
      characterWidth: {
        type: { name: "number" },
        required: false,
        defaultValue: "7.225",
        description: (
          <p>
            The width of a character in the theme's monospace font, used for
            indentation. If you use a font or font-size different than the
            default theme, you may need to change this value.
          </p>
        ),
        options: undefined
      },
      collapseLines: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: (
          <div>
            <p>
              Determines if non-copiable lines (when using{" "}
              <code>copyRanges</code>) should be collapsed. Default is true.
            </p>
            <p>
              If false, a <code>maxHeight</code> is defined, and the first live
              chunk (from the <code>copyRanges</code> prop) is not visible in
              the snippet given the <code>maxHeight</code>, the component will
              autoscroll to make sure the live chunk is in view when the page
              loads.
            </p>
          </div>
        ),
        options: undefined
      }
    },
    examples: []
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
      tag: {
        type: {
          name: "enum",
          value: [
            { value: "'legacy'", computed: false },
            { value: "'beta'", computed: false },
            { value: "'fundamentals'", computed: false },
            { value: "'new'", computed: false },
            { value: "'custom'", computed: false }
          ]
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: [
          { value: "'legacy'", computed: false },
          { value: "'beta'", computed: false },
          { value: "'fundamentals'", computed: false },
          { value: "'new'", computed: false },
          { value: "'custom'", computed: false }
        ]
      },
      customTagProps: {
        type: {
          name: "shape",
          value: {
            customLabel: { name: "string", required: true },
            customTooltipText: { name: "string", required: true },
            customStyles: {
              name: "shape",
              value: {
                background: { name: "string", required: true },
                color: { name: "string", required: true },
                borderColor: { name: "string", required: true }
              },
              required: true
            }
          }
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: {
          customLabel: { name: "string", required: true },
          customTooltipText: { name: "string", required: true },
          customStyles: {
            name: "shape",
            value: {
              background: { name: "string", required: true },
              color: { name: "string", required: true },
              borderColor: { name: "string", required: true }
            },
            required: true
          }
        }
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
<span class="token keyword">import</span> OverviewHeader <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/overview-header'</span><span class="token punctuation">;</span>

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
    name: "Phone",
    description: null,
    props: {
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      mode: {
        type: {
          name: "enum",
          value: [
            { value: "'portrait'", computed: false },
            { value: "'landscape'", computed: false }
          ]
        },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: [
          { value: "'portrait'", computed: false },
          { value: "'landscape'", computed: false }
        ]
      },
      platform: {
        type: {
          name: "enum",
          value: [
            { value: "'ios'", computed: false },
            { value: "'android'", computed: false }
          ]
        },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: [
          { value: "'ios'", computed: false },
          { value: "'android'", computed: false }
        ]
      }
    },
    examples: []
  },
  {
    name: "PlaygroundImage",
    description: null,
    props: {
      size: {
        type: { name: "number" },
        required: false,
        defaultValue: "60",
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
      tag: {
        type: {
          name: "enum",
          value: [
            { value: "'legacy'", computed: false },
            { value: "'beta'", computed: false },
            { value: "'fundamentals'", computed: false },
            { value: "'new'", computed: false },
            { value: "'custom'", computed: false }
          ]
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: [
          { value: "'legacy'", computed: false },
          { value: "'beta'", computed: false },
          { value: "'fundamentals'", computed: false },
          { value: "'new'", computed: false },
          { value: "'custom'", computed: false }
        ]
      },
      customTagProps: {
        type: {
          name: "shape",
          value: {
            customLabel: { name: "string", required: true },
            customTooltipText: { name: "string", required: true },
            customStyles: {
              name: "shape",
              value: {
                background: { name: "string", required: true },
                color: { name: "string", required: true },
                borderColor: { name: "string", required: true }
              },
              required: true
            }
          }
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: {
          customLabel: { name: "string", required: true },
          customTooltipText: { name: "string", required: true },
          customStyles: {
            name: "shape",
            value: {
              background: { name: "string", required: true },
              color: { name: "string", required: true },
              borderColor: { name: "string", required: true }
            },
            required: true
          }
        }
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
<span class="token keyword">import</span> ProductMenu <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/product-menu'</span><span class="token punctuation">;</span>

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
<span class="token keyword">import</span> ProductMenu <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/product-menu'</span><span class="token punctuation">;</span>

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
    name: "RelatedPage",
    description: null,
    props: {
      contentType: {
        type: {
          name: "enum",
          value: [
            { value: "'example'", computed: false },
            { value: "'glossary'", computed: false },
            { value: "'guide'", computed: false },
            { value: "'tutorial'", computed: false },
            { value: "'troubleshooting'", computed: false },
            { value: "'playground'", computed: false },
            { value: "'video'", computed: false },
            { value: "'default'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'default'",
        description: <div />,
        options: [
          { value: "'example'", computed: false },
          { value: "'glossary'", computed: false },
          { value: "'guide'", computed: false },
          { value: "'tutorial'", computed: false },
          { value: "'troubleshooting'", computed: false },
          { value: "'playground'", computed: false },
          { value: "'video'", computed: false },
          { value: "'default'", computed: false }
        ]
      },
      title: {
        type: { name: "string" },
        required: true,
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
      url: {
        type: {
          name: "custom",
          raw:
            "(props, propName, componentName) => {\n  if (props[propName] && typeof props[propName] !== 'string') {\n    return new Error(\n      `\\`${propName}\\` expected a string, but received ${typeof props[\n        propName\n      ]}.`\n    );\n  }\n  if (props.contentType !== 'video' && !props[propName]) {\n    return new Error(\n      `\\`${propName}\\` is required when contentType=${props.contentType}.`\n    );\n  }\n  if (\n    (!props.vimeoId && !props[propName]) ||\n    (props.vimeoId && props[propName])\n  ) {\n    return new Error(\n      `\\`url\\` or \\`vimeoId\\` must be supplied to ${componentName}.`\n    );\n  }\n}"
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      vimeoId: {
        type: {
          name: "custom",
          raw:
            "(props, propName, componentName) => {\n  if (props[propName] && typeof props[propName] !== 'string') {\n    return new Error(\n      `\\`${propName}\\` expected a string, but received ${typeof props[\n        propName\n      ]}.`\n    );\n  }\n  if ((!props.url && !props[propName]) || (props.url && props[propName])) {\n    return new Error(\n      `\\`url\\` or \\`vimeoId\\` must be supplied to ${componentName}.`\n    );\n  }\n}"
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      vimeoThumbnail: {
        type: {
          name: "custom",
          raw:
            "(props, propName, componentName) => {\n  if (\n    props.contentType &&\n    props.contentType !== 'video' &&\n    props.vimeoThumbnail\n  )\n    return new Error(\n      `\\`${propName}\\` only works with \\`contentType=video\\` in ${componentName}`\n    );\n}"
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
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
      },
      connector: {
        type: { name: "instanceOf", value: "SiteSearchAPIConnector" },
        required: false,
        defaultValue:
          "new SiteSearchAPIConnector({\n  engineKey: 'zpAwGSb8YMXtF9yDeS5K', // public engine key\n  engineName: 'docs',\n  documentType: ['page']\n})",
        description: <div />,
        options: "SiteSearchAPIConnector"
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/search/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Search <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/search'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span> <span class="token attr-name">site</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>API<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: (
          <p>
            Basic. Pass the name of the <code>site</code> to the component to
            enable the site/"All docs" filter.
          </p>
        )
      },
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/search/examples/diabled.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Search <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/search'</span><span class="token punctuation">;</span>

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
<span class="token keyword">import</span> Search <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/search'</span><span class="token punctuation">;</span>

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
<span class="token keyword">import</span> SectionedNavigation <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/sectioned-navigation'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SectionedNavigation</span></span>
        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Examples<span class="token punctuation">"</span></span>
        <span class="token attr-name">sections</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Getting started'</span><span class="token punctuation">,</span>
            url<span class="token operator">:</span> <span class="token string">'#getting-started'</span><span class="token punctuation">,</span>
            items<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">'Camera animation'</span><span class="token punctuation">,</span>
                url<span class="token operator">:</span> <span class="token string">'#foo'</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">'Mark a place'</span><span class="token punctuation">,</span>
                url<span class="token operator">:</span> <span class="token string">'#footoo'</span><span class="token punctuation">,</span>
                active<span class="token operator">:</span> <span class="token boolean">true</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">'Apply a style'</span><span class="token punctuation">,</span>
                url<span class="token operator">:</span> <span class="token string">'#fooandyou'</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Markers and callouts'</span><span class="token punctuation">,</span>
            url<span class="token operator">:</span> <span class="token string">'#markers'</span><span class="token punctuation">,</span>
            items<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">'Annotation models'</span><span class="token punctuation">,</span>
                url<span class="token operator">:</span> <span class="token string">'#fooboo'</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">'Callouts'</span><span class="token punctuation">,</span>
                url<span class="token operator">:</span> <span class="token string">'#foocrew'</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Getting started again'</span><span class="token punctuation">,</span>
            url<span class="token operator">:</span> <span class="token string">'#getting-started-again'</span><span class="token punctuation">,</span>
            items<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">'Apply a style'</span><span class="token punctuation">,</span>
                url<span class="token operator">:</span> <span class="token string">'#fooblue'</span>
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
    name: "Tag",
    description: null,
    props: {
      theme: {
        type: {
          name: "enum",
          value: [
            { value: "'beta'", computed: false },
            { value: "'fundamentals'", computed: false },
            { value: "'legacy'", computed: false },
            { value: "'new'", computed: false },
            { value: "'custom'", computed: false }
          ]
        },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: [
          { value: "'beta'", computed: false },
          { value: "'fundamentals'", computed: false },
          { value: "'legacy'", computed: false },
          { value: "'new'", computed: false },
          { value: "'custom'", computed: false }
        ]
      },
      customLabel: {
        type: {
          name: "custom",
          raw:
            "(props, componentName) => {\n  if (props.theme === 'custom' && !props.customLabel) {\n    return new Error(\n      `The \"customLabel\" prop is required when using the \"custom\" theme in '${componentName}'.`\n    );\n  } else if (\n    props.theme === 'custom' &&\n    typeof props.customLabel !== 'string'\n  ) {\n    return new Error(\n      `The \"customLabel\" prop in '${componentName} must be a string'.`\n    );\n  }\n}"
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      customTooltipText: {
        type: {
          name: "custom",
          raw:
            "(props, componentName) => {\n  if (props.theme === 'custom' && !props.customTooltipText) {\n    return new Error(\n      `The \"customTooltipText\" prop is required when using the \"custom\" theme in '${componentName}'.`\n    );\n  } else if (\n    props.theme === 'custom' &&\n    typeof props.customTooltipText !== 'string'\n  ) {\n    return new Error(\n      `The \"customTooltipText\" prop in '${componentName} must be a string'.`\n    );\n  }\n}"
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      customStyles: {
        type: {
          name: "custom",
          raw:
            "(props, componentName) => {\n  if (props.theme === 'custom') {\n    if (!props.customStyles) {\n      return new Error(\n        `The \"customStyles\" prop is required when using the \"custom\" theme in '${componentName}'.`\n      );\n    } else if (typeof props.customStyles !== 'object') {\n      return new Error(\n        `The \"customStyles\" prop in '${componentName} must be an object'.`\n      );\n    } else if (\n      !props.customStyles.background ||\n      typeof props.customStyles.background !== 'string'\n    ) {\n      return new Error(\n        `The \"customStyles.background\" prop in '${componentName} is required when using the \"custom\" theme and must be a string'.`\n      );\n    } else if (\n      !props.customStyles.color ||\n      typeof props.customStyles.color !== 'string'\n    ) {\n      return new Error(\n        `The \"customStyles.color\" prop in '${componentName} is required when using the \"custom\" theme and must be a string'.`\n      );\n    } else if (\n      !props.customStyles.borderColor ||\n      typeof props.customStyles.borderColor !== 'string'\n    ) {\n      return new Error(\n        `The \"customStyles.borderColor\" prop in '${componentName} is required when using the \"custom\" theme and must be a string'.`\n      );\n    }\n  }\n}"
        },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: []
  },
  {
    name: "ToggleableCodeBlock",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      selectedLanguage: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      code: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      highlightedCode: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      copyRanges: {
        type: { name: "object" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      options: {
        type: { name: "array" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      changeLanguage: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      filename: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      link: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      limitHeight: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/toggleable-code-block/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ToggleableCodeBlock <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/toggleable-code-block'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> highlightJava <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/highlight/java'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> javaCodeSnippet <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">
    public class MainActivity extends AppCompatActivity {
      private MapView mapView;

      @Override
      protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      Mapbox.getInstance(this, "your-token");
      setContentView(R.layout.activity_main);
      mapView = (MapView) findViewById(R.id.mapView);
      mapView.onCreate(savedInstanceState);
    }
    </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ToggleableCodeBlock</span></span>
        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>test-java-filename<span class="token punctuation">"</span></span>
        <span class="token attr-name">selectedLanguage</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>java<span class="token punctuation">"</span></span>
        <span class="token attr-name">code</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>javaCodeSnippet<span class="token punctuation">}</span></span>
        <span class="token attr-name">highlightedCode</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">highlightJava</span><span class="token punctuation">(</span>javaCodeSnippet<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">copyRanges</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          java<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">changeLanguage</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">filename</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ThisIsAFile.extension<span class="token punctuation">"</span></span>
        <span class="token attr-name">link</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://github.com/mapbox/<span class="token punctuation">"</span></span>
        <span class="token attr-name">limitHeight</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">options</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'JavaScript'</span><span class="token punctuation">,</span>
            language<span class="token operator">:</span> <span class="token string">'javascript'</span><span class="token punctuation">,</span>
            preferredLanguage<span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'Swift'</span><span class="token punctuation">,</span>
            language<span class="token operator">:</span> <span class="token string">'swift'</span><span class="token punctuation">,</span>
            preferredLanguage<span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'Objective-C'</span><span class="token punctuation">,</span>
            language<span class="token operator">:</span> <span class="token string">'objectiveC'</span><span class="token punctuation">,</span>
            preferredLanguage<span class="token operator">:</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'Java'</span><span class="token punctuation">,</span>
            language<span class="token operator">:</span> <span class="token string">'java'</span><span class="token punctuation">,</span>
            preferredLanguage<span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            label<span class="token operator">:</span> <span class="token string">'Kotlin'</span><span class="token punctuation">,</span>
            language<span class="token operator">:</span> <span class="token string">'kotlin'</span><span class="token punctuation">,</span>
            preferredLanguage<span class="token operator">:</span> <span class="token boolean">false</span>
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
    name: "Topbar",
    description: null,
    props: {
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
<span class="token keyword">import</span> TopbarSticker <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/topbar-sticker'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> background<span class="token operator">:</span> <span class="token string">'pink'</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">3000</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
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
        type: { name: "number" },
        required: false,
        defaultValue: "60",
        description: <div />,
        options: undefined
      }
    },
    examples: [
      {
        exampleModule: require("/Users/katydecorah/Documents/GitHub/dr-ui/src/components/troubleshoot-image/examples/basic.js"),
        code: `<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TroubleshootImage <span class="token keyword">from</span> <span class="token string">'@mapbox/dr-ui/troubleshoot-image'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TroubleshootImage</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`,
        description: <p>Basic.</p>
      }
    ]
  },
  {
    name: "Video",
    description: null,
    props: {
      src: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      },
      title: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />,
        options: undefined
      }
    },
    examples: []
  }
];
