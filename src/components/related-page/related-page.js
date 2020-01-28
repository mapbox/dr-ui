import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import TroubleshootImage from '../troubleshoot-image/troubleshoot-image';
import BookletImage from '../booklet-image/booklet-image';
import BookImage from '../book-image/book-image';
import GlossaryImage from '../glossary-image/glossary-image';
import ExampleImage from '../example-image/example-image';

class RelatedPage extends React.Component {
  render() {
    const { props } = this;
    const contentTypes = {
      tutorial: {
        label: 'tutorial',
        image: <BookletImage />,
        color: 'green',
        a11yColor: '#1b7d4f'
      },
      troubleshooting: {
        label: 'troubleshooting',
        image: <TroubleshootImage />,
        color: 'red'
      },
      guide: {
        label: 'guide',
        image: <BookImage />,
        color: 'blue'
      },
      glossary: {
        label: 'glossary',
        image: <GlossaryImage />,
        color: 'orange',
        a11yColor: '#a7662c'
      },
      example: {
        label: 'example',
        image: <ExampleImage />,
        color: 'pink'
      },
      default: {
        label: 'related',
        color: 'gray'
      }
    };

    const theme = contentTypes[this.props.contentType];

    return (
      <a
        href={props.url}
        className={`unprose block cursor-pointer color-${theme.color} color-${
          theme.color
        }-dark-on-hover transition mb18`}
      >
        <div
          className={`round flex-parent flex-parent--stretch-cross border border--${
            theme.color
          }-light border--${theme.color}-dark-on-hover border--2 transition`}
        >
          <div className="flex-child flex-child--grow px18 pt30 pb18">
            <div className="flex-parent flex-parent--row">
              {theme.image && (
                <div className="flex-child pt6 mr18 none block-mm">
                  {theme.image}
                </div>
              )}
              <div className="flex-child">
                <div
                  style={{ color: theme.a11yColor }}
                  className={`txt-fancy txt-uppercase txt-s txt-spacing1 mt-neg12 mb6 ${
                    !theme.a11yColor ? `color-${theme.color}-dark` : ''
                  }`}
                >
                  {theme.label}
                </div>
                <div className="color-gray-dark color-black-on-hover transition">
                  <div className="txt-bold">{props.title}</div>
                  {props.children}
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-child flex-child--no-shrink w30 flex-parent flex-parent--center-cross border-l"
            style={{ borderColor: 'inherit', borderLeftWidth: '2px' }}
          >
            <Icon name="chevron-right" size={30} />
          </div>
        </div>
      </a>
    );
  }
}

RelatedPage.defaultProps = {
  contentType: 'default'
};

RelatedPage.propTypes = {
  contentType: PropTypes.oneOf([
    'example',
    'glossary',
    'guide',
    'tutorial',
    'troubleshooting',
    'default'
  ]),
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired
};

export default RelatedPage;
