/* eslint-disable xss/no-mixed-html */

import React from 'react';
import PropTypes from 'prop-types';
import prettier from 'prettier/standalone';
import parserCss from 'prettier/parser-postcss';
import parserJs from 'prettier/parser-babylon';
import parserHtml from 'prettier/parser-html';
import stripMd from 'remove-markdown';
import * as Sentry from '@sentry/browser';

// formats the metadata
function meta(frontMatter) {
  let description = frontMatter.description,
    path = `https://docs.mapbox.com/${frontMatter.pathname}`;
  description += `\n\nSee the example: [${path}](${path})`;
  return {
    title: frontMatter.title,
    description,
    tags: ['mapbox', 'maps']
  };
}

// formats the code with prettier
function format(code, parser, plugin) {
  try {
    return prettier.format(code, { parser: parser, plugins: [plugin] });
  } catch (err) {
    Sentry.configureScope(scope => {
      scope.setTag('type', 'edit buttons');
    });
    Sentry.captureException(new Error(err));
    return code;
  }
}

// creates a form wrapper for each platform
class Form extends React.Component {
  render() {
    let classes = `inline-block`;
    if (this.props.classes) classes += ` ${this.props.classes}`;
    return (
      <form
        className={classes}
        method="POST"
        action={this.props.action}
        target="_blank"
      >
        {this.props.children}
      </form>
    );
  }
}

// creates the actual button that the user can click
class Button extends React.Component {
  render() {
    const platform = this.props.platform;
    const btnClass = 'btn btn--s cursor-pointer round';
    return (
      <input
        style={{ border: 0 }}
        type="submit"
        className={btnClass}
        value={`Edit in ${platform}`}
        onClick={() => {
          if (window && window.analytics) {
            analytics.track(`Clicked Edit in ${platform}`);
          }
        }}
      />
    );
  }
}

export default class Edit extends React.Component {
  render() {
    let { css, js, html, head, resources, frontMatter } = this.props;
    const projectMeta = meta(frontMatter);
    css = format(css, 'css', parserCss);
    js = format(js, 'babel', parserJs);
    html = format(html, 'html', parserHtml);
    return (
      <>
        <Form action="https://jsfiddle.net/api/post/library/pure/">
          <Button platform="JSFiddle" />
          <input type="hidden" name="wrap" value="b" />
          <input type="hidden" name="css" value={css} />
          <input type="hidden" name="html" value={html} />
          <input type="hidden" name="js" value={js} />
          <input type="hidden" name="title" value={projectMeta.title} />
          <input
            type="hidden"
            name="resources"
            value={resources ? resources.js.concat(resources.css) : []}
          />
          <input
            type="hidden"
            name="description"
            value={stripMd(projectMeta.description)}
          />
        </Form>

        <Form classes="ml6" action="https://codepen.io/pen/define">
          <input
            type="hidden"
            name="data"
            value={JSON.stringify({
              title: projectMeta.title,
              html: html,
              description: projectMeta.description,
              tags: projectMeta.tags,
              css: css,
              js: js,
              css_external:
                resources && resources.css ? resources.css.join(';') : '',
              js_external:
                resources && resources.js ? resources.js.join(';') : '',
              head: head
            })}
          />
          <Button platform="CodePen" />
        </Form>
      </>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.string.isRequired,
  classes: PropTypes.string
};

Button.propTypes = {
  platform: PropTypes.oneOf(['JSFiddle', 'CodePen']).isRequired
};

Edit.propTypes = {
  css: PropTypes.string.isRequired, // CSS panel contents
  js: PropTypes.string.isRequired, // JS panel contents
  html: PropTypes.string.isRequired, // HTML panel contents
  head: PropTypes.string, // extra html to add to the head of the document (CodePen)
  frontMatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired
  }),
  resources: PropTypes.shape({
    // absolute URLs to CDNs
    js: PropTypes.array,
    css: PropTypes.array
  })
};
