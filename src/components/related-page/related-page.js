import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import TroubleshootImage from '../troubleshoot-image/troubleshoot-image';
import BookletImage from '../booklet-image/booklet-image';
import BookImage from '../book-image/book-image';

class RelatedPage extends React.Component {
  render() {
    const { props } = this;
    const contentTypes = {
      base: {
        // applied to every note
        padding: '18px',
        fontSize: '13px',
        lineHeight: '20px',
        borderRadius: '4px'
      },
      tutorial: {
        label: 'tutorial',
        image: <BookletImage />,
        color: 'green'
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
        image: <div className="round w60 h60 bg-orange-light" />,
        color: 'orange'
      },
      example: {
        label: 'example',
        image: <div className="round w60 h60 bg-pink-light" />,
        color: 'pink'
      },
      fallback: {
        label: 'related doc',
        image: <div />,
        color: 'gray'
      }
    };

    return (
      <div>
        <a
          href={props.url}
          className={`unprose block cursor-pointer color-${
            contentTypes[props.contentType || 'fallback'].color
          } color-${
            contentTypes[props.contentType || 'fallback'].color
          }-dark-on-hover`}
        >
          <div
            className={`flex-parent flex-parent--stretch-cross border border-color-${
              contentTypes[props.contentType || 'fallback'].color
            } border-color-${
              contentTypes[props.contentType || 'fallback'].color
            }-dark-on-hover`}
            style={{
              fontSize: '13px',
              lineHeight: '20px',
              borderRadius: '4px'
            }}
          >
            <div className="flex-child flex-child--grow px12 py12">
              <div className="flex-parent flex-parent--row">
                <div className="flex-child mr12">
                  {contentTypes[props.contentType || 'fallback'].image}
                </div>
                <div className="flex-child">
                  <div className="txt-fancy txt-uppercase">
                    {contentTypes[props.contentType || 'fallback'].label}
                  </div>
                  <div className="color-gray-dark color-black-on-hover">
                    <div className="txt-bold">{props.title}</div>
                    {props.description && props.description}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-child flex-child--no-shrink w30 flex-parent flex-parent--center-cross border-l">
              <Icon name="chevron-right" size={30} />
            </div>
          </div>
        </a>
      </div>
    );
  }
}

RelatedPage.propTypes = {
  contentType: PropTypes.oneOf([
    'example',
    'glossary',
    'guide',
    'tutorial',
    'troubleshooting'
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired
};

export default RelatedPage;
