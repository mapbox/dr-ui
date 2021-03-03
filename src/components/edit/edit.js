/* eslint-disable xss/no-mixed-html */

import React from 'react';
import PropTypes from 'prop-types';
import stripMd from 'remove-markdown';

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

// creates a form wrapper for each platform
class Form extends React.PureComponent {
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
class Button extends React.PureComponent {
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

export default class Edit extends React.PureComponent {
  render() {
    let { css, js, html, head, resources, frontMatter } = this.props;
    const projectMeta = meta(frontMatter);
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
              html_pre_processor: 'none',
              description: projectMeta.description,
              tags: projectMeta.tags,
              css: css,
              css_pre_processor: 'none',
              js: js,
              js_pre_processor: 'none',
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
  css: PropTypes.string, // CSS panel contents
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
