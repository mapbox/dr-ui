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
          <VimeoPlayImage fill="#7753eb" icon={true} />
        )
      },
      default: {
        label: 'related',
        color: 'gray'
      }
    };

    const theme = contentTypes[this.props.contentType];

    return (
      <React.Fragment>
        <a
          onClick={props.vimeoId ? this.handleClick : undefined}
          href={props.vimeoId ? undefined : props.url}
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
              <div className="flex-parent-mm flex-parent--row">
                {theme.image && (
                  <div
                    className={
                      props.vimeoThumbnail
                        ? 'relative mr18 h-full wmin180'
                        : 'flex-child pt6 mr18 none block-mm'
                    }
                  >
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
            {!props.vimeoId && (
              <div
                className="flex-child flex-child--no-shrink w30 flex-parent flex-parent--center-cross border-l"
                style={{ borderColor: 'inherit', borderLeftWidth: '2px' }}
              >
                <Icon name="chevron-right" size={30} />
              </div>
            )}
          </div>
        </a>
        {this.props.vimeoId && this.renderModal()}
      </React.Fragment>
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
    'video',
    'default'
  ]), // Required. The content-type of the related page.
  title: PropTypes.string.isRequired, // Required. Title of the related page in the context of the current page.
  description: PropTypes.string, // Required. Description of the related page in the context of the current page.
  url: PropTypes.string, // Required if `vimeoId` is not set. The link to the related page.
  vimeoId: PropTypes.string, // Required if `url` is not set. Pass a vimeoId to open the video in a modal.
  vimeoThumbnail: PropTypes.string // Optional. Pass a thumbnail image of the video or an play button icon will be the fallback.
};

export default RelatedPage;
