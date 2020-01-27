import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import TroubleshootImage from '../troubleshoot-image/troubleshoot-image';
import BookletImage from '../booklet-image/booklet-image';
import BookImage from '../book-image/book-image';
import GlossaryImage from '../glossary-image/glossary-image';
import ExampleImage from '../example-image/example-image';

class PlaygroundImage extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.size}
        height={this.props.size}
      >
        <circle fill="#3F5B75" cx="30.3" cy="29.9" r="25" />
        <path
          fill="#0E1519"
          d="M44.9 48s0-.1 0 0c0-.7-.1-1.5-.5-2.4L34 25.5h-3.7l-3.7-.1-10.4 20.1c-.4 1-.6 1.8-.5 2.5 0 2.4 6.5 4.4 14.7 4.4 7.9 0 14.4-1.9 14.5-4.4z"
        />
        <path
          fill="#CDDCE8"
          d="M43.9 43.7L33.8 24.4v-7.5h.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-7.9c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h.3v7.6l-10 19.4c-.3.8-.5 1.4-.4 2V46.2c.4 2.3 6.5 4.1 14.1 4.1 7.8 0 14.1-2 14.1-4.3 0-.6-.1-1.5-.5-2.3z"
        />
        <path
          fill="#FFF"
          d="M39.8 41.9l-6.9-13.4H28l-7 13.4c-.3.6-.4 1.2-.4 1.6 0 1.7 4.4 3 9.8 3 5.3 0 9.7-1.3 9.7-3 0-.5-.1-1-.3-1.6z"
        />
        <circle fill="#FFF" cx="31.6" cy="19.5" r="1.2" />
        <circle fill="#FFF" cx="27.5" cy="8.5" r="1.2" />
        <circle fill="#FFF" cx="29.5" cy="23.9" r="1.2" />
        <circle fill="#FFF" cx="29.5" cy="14.9" r="1.8" />
        <circle fill="#FFF" cx="32.9" cy="11" r="1.4" />
      </svg>
    );
  }
}

PlaygroundImage.propTypes = {
  size: PropTypes.number
};

PlaygroundImage.defaultProps = {
  size: 60
};

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
      playground: {
        label: 'playground',
        image: <PlaygroundImage />,
        color: 'gray'
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
                  {props.description && props.description}
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
    'playground',
    'default'
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired
};

export default RelatedPage;
