/* eslint-disable xss/no-mixed-html */

import React from 'react';
import PropTypes from 'prop-types';
import prettier from 'prettier/standalone';
import parserCss from 'prettier/parser-postcss';
import parserJs from 'prettier/parser-babylon';
import parserHtml from 'prettier/parser-html';
import stripMd from 'remove-markdown';

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

function format(code, parser, plugin) {
  try {
    return prettier.format(code, { parser: parser, plugins: [plugin] });
  } catch (err) {
    // return unformatted code, but send error to sentry for us to fix
    // TODO: SEND TO SENTRY
    return code;
  }
}

export default class Edit extends React.Component {
  render() {
    let { css, js, html, head, resources, frontMatter } = this.props;

    const projectMeta = meta(frontMatter);

    css = format(css, 'css', parserCss);
    js = format(js, 'babel', parserJs);
    html = format(html, 'html', parserHtml);

    const btnClass = 'btn btn--s cursor-pointer round';

    return (
      <>
        <form
          className="inline-block"
          method="post"
          action="http://jsfiddle.net/api/post/library/pure/"
        >
          <input
            style={{ border: 0 }}
            type="submit"
            className={btnClass}
            value="Edit in JSFiddle"
            onClick={() => {
              if (window && window.analytics) {
                analytics.track('Clicked Edit in JSFiddle');
              }
            }}
          />
          <input type="hidden" name="wrap" value="b" />
          <input type="hidden" name="css" value={css} />
          <input type="hidden" name="html" value={html} />
          <input type="hidden" name="js" value={js} />
          <input type="hidden" name="title" value={projectMeta.title} />
          <input
            type="hidden"
            name="resources"
            value={resources.js.concat(resources.css)}
          />
          <input
            type="hidden"
            name="description"
            value={stripMd(projectMeta.description)}
          />
        </form>

        <form
          className="inline-block ml6"
          action="https://codepen.io/pen/define"
          method="POST"
        >
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
              css_external: resources.css.join(';'),
              js_external: resources.js.join(';'),
              head: head
            })}
          />

          <input
            style={{ border: 0 }}
            type="submit"
            className={btnClass}
            value="Edit in CodePen"
            onClick={() => {
              if (window && window.analytics) {
                analytics.track('Clicked Edit in CodePen');
              }
            }}
          />
        </form>
      </>
    );
  }
}

Edit.propTypes = {
  css: PropTypes.string.isRequired, // CSS panel contents
  js: PropTypes.string.isRequired, // JS panel contents
  html: PropTypes.string.isRequired, // html panel contents
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
