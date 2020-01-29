import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import TroubleshootImage from '../troubleshoot-image/troubleshoot-image';
import BookletImage from '../booklet-image/booklet-image';
import BookImage from '../book-image/book-image';
import GlossaryImage from '../glossary-image/glossary-image';
import ExampleImage from '../example-image/example-image';
import { VimeoModal, VimeoThumbnail, VimeoPlayImage } from './vimeo';

class RelatedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  handleClick = () => {
    if (this.props.vimeoId) {
      this.setState({ modalOpen: true });
      if (window && window.analytics) {
        analytics.track('Opened video from RelatedPage');
      }
    }
  };

  closeModal = () => this.setState({ modalOpen: false });

  renderModal() {
    if (!this.state.modalOpen) {
      return null;
    }
    return (
      <VimeoModal
        title={this.props.title}
        closeModal={this.closeModal}
        vimeoId={this.props.vimeoId}
      />
    );
  }
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
      video: {
        label: 'video',
        color: 'purple',
        image: props.vimeoThumbnail ? (
          <VimeoThumbnail image={props.vimeoThumbnail} />
        ) : (
          <VimeoPlayImage fill="#7753eb" fallbackIcon={true} />
        )
      },
      default: {
        label: 'related',
        color: 'gray'
      }
    };

    const theme = contentTypes[this.props.contentType];

    const showVideoModal = props.vimeoId && props.contentType === 'video';
    const showVideoThumbnail =
      this.props.contentType === 'video' && props.vimeoThumbnail;

    return (
      <React.Fragment>
        <a
          onClick={showVideoModal ? this.handleClick : undefined}
          href={showVideoModal ? undefined : props.url}
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
              <div
                className={`flex-parent${
                  showVideoThumbnail ? '-ml' : ''
                } flex-parent--start-cross`}
              >
                {theme.image && (
                  <div
                    className={
                      showVideoThumbnail
                        ? 'flex-child relative w-full wmin120 wmax240-ml mr18-ml mt18-ml mt-neg12'
                        : 'flex-child pt6 mr18 none block-mm'
                    }
                  >
                    {theme.image}
                  </div>
                )}
                <div
                  className={`flex-child${
                    showVideoThumbnail ? ' wmin180' : ''
                  }`}
                >
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
            {!showVideoModal && (
              <div
                className="flex-child flex-child--no-shrink w30 flex-parent flex-parent--center-cross border-l"
                style={{ borderColor: 'inherit', borderLeftWidth: '2px' }}
              >
                <Icon name="chevron-right" size={30} />
              </div>
            )}
          </div>
        </a>
        {showVideoModal && this.renderModal()}
      </React.Fragment>
    );
  }
}

RelatedPage.defaultProps = {
  contentType: 'default'
};

RelatedPage.propTypes = {
  // Required. The content-type of the related page.
  contentType: PropTypes.oneOf([
    'example',
    'glossary',
    'guide',
    'tutorial',
    'troubleshooting',
    'video',
    'default'
  ]),
  // Required. Title of the related page in the context of the current page.
  title: PropTypes.string.isRequired,
  // Required. Description of the related page in the context of the current page.
  description: PropTypes.string,
  // Required if `vimeoId` is not set. The link to the related page.
  url: (props, propName, componentName) => {
    if (props[propName] && typeof props[propName] !== 'string') {
      return new Error(
        `\`${propName}\` expected a string, but received ${typeof props[
          propName
        ]}.`
      );
    }
    if (props.contentType !== 'video' && !props[propName]) {
      return new Error(
        `\`${propName}\` is required when contentType=${props.contentType}.`
      );
    }
    if (
      (!props.vimeoId && !props[propName]) ||
      (props.vimeoId && props[propName])
    ) {
      return new Error(
        `\`url\` or \`vimeoId\` must be supplied to ${componentName}.`
      );
    }
  },
  // Required if `url` is not set. Pass a vimeoId to open the video in a modal.
  vimeoId: (props, propName, componentName) => {
    if (props[propName] && typeof props[propName] !== 'string') {
      return new Error(
        `\`${propName}\` expected a string, but received ${typeof props[
          propName
        ]}.`
      );
    }
    if ((!props.url && !props[propName]) || (props.url && props[propName])) {
      return new Error(
        `\`url\` or \`vimeoId\` must be supplied to ${componentName}.`
      );
    }
  },
  // Optional. Pass a thumbnail image of the video or an play button icon will be the fallback.
  vimeoThumbnail: (props, propName, componentName) => {
    if (
      props.contentType &&
      props.contentType !== 'video' &&
      props.vimeoThumbnail
    )
      return new Error(
        `\`${propName}\` only works with \`contentType=video\` in ${componentName}`
      );
  }
};

export default RelatedPage;
