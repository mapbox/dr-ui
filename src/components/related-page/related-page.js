import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import TroubleshootImage from '../troubleshoot-image/troubleshoot-image';
import BookletImage from '../booklet-image/booklet-image';
import BookImage from '../book-image/book-image';
import GlossaryImage from '../glossary-image/glossary-image';
import ExampleImage from '../example-image/example-image';
import PlaygroundImage from '../playground-image/playground-image';
import VideoModal from '../video-modal/video-modal';
import classnames from 'classnames';
import { VideoThumbnail, VideoPlayImage } from './video';

class RelatedPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  handleClick = () => {
    if (this.props.youtubeId) {
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
      <VideoModal
        title={this.props.title}
        closeModal={this.closeModal}
        youtubeId={this.props.youtubeId}
      />
    );
  }
  render() {
    const { props } = this;
    const contentTypes = {
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
        image: <GlossaryImage />,
        color: 'orange'
      },
      example: {
        label: 'example',
        image: <ExampleImage />,
        color: 'pink'
      },
      video: {
        label: 'video',
        color: 'purple',
        image: props.youtubeId ? (
          <VideoThumbnail>
            <img
              src={`https://img.youtube.com/vi/${this.props.youtubeId}/maxresdefault.jpg`}
              alt="Youtube Video Thumbnail"
            />
          </VideoThumbnail>
        ) : (
          <VideoPlayImage fallbackIcon={true} />
        )
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

    // When label prop is set, override theme label
    if (props.label) theme.label = props.label;

    const showVideoModal = props.youtubeId && props.contentType === 'video';
    const showVideoThumbnail = props.contentType === 'video' && props.youtubeId;

    const contentContainerClasses = classnames('', {
      'flex-ml flex--start-cross': showVideoThumbnail,
      'flex flex--row': !showVideoThumbnail
    });

    const imageClasses = classnames('', {
      'relative w-full wmin120 wmax240-ml mr18-ml mt-neg12': showVideoThumbnail,
      'pt6 mr18 none block-mm': !showVideoThumbnail
    });

    const contentClasses = classnames('', {
      wmin180: showVideoThumbnail
    });

    const Element = showVideoModal ? 'button' : 'a';
    const elementProps = {
      ...(showVideoModal && { onClick: this.handleClick }),
      ...(!showVideoModal && { href: props.url })
    };

    return (
      <React.Fragment>
        <Element
          {...elementProps}
          className={`unprose block cursor-pointer color-${theme.color} color-${theme.color}-dark-on-hover transition mb18`}
        >
          <div
            className={`round flex flex--stretch-cross border border--${theme.color}-light border--${theme.color}-dark-on-hover border--2 transition`}
          >
            <div className="flex-child-grow px18 pt30 pb18" style={{ flex: 1 }}>
              <div className={contentContainerClasses}>
                {theme.image && (
                  <div className={imageClasses}>{theme.image}</div>
                )}
                <div className={contentClasses}>
                  <div
                    className={`txt-fancy txt-uppercase txt-s txt-spacing1 mt-neg12 mb6 ${`color-${theme.color}-dark`}`}
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
            {!showVideoModal && (
              <div
                className="flex-child-no-shrink w30 flex flex--center-cross border-l"
                style={{ borderColor: 'inherit', borderLeftWidth: '2px' }}
              >
                <Icon name="chevron-right" size={30} />
              </div>
            )}
          </div>
        </Element>
        {showVideoModal && this.renderModal()}
      </React.Fragment>
    );
  }
}

RelatedPage.defaultProps = {
  contentType: 'default'
};

RelatedPage.propTypes = {
  /** The content-type of the related page. */
  contentType: PropTypes.oneOf([
    'example',
    'glossary',
    'guide',
    'tutorial',
    'troubleshooting',
    'playground',
    'video',
    'default'
  ]),
  /** Override the label name. This value is set by the `contentType`, but you can override it when needed. */
  label: PropTypes.string,
  /** Title of the related page in the context of the current page. */
  title: PropTypes.string.isRequired,
  /** Description of the related page in the context of the current page. */
  children: PropTypes.node.isRequired,
  /** The link to the related page. Required if `youtubeId` is not set.  */
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
      (!props.youtubeId && !props[propName]) ||
      (props.youtubeId && props[propName])
    ) {
      return new Error(
        `\`url\` or \`youtubeId\` must be supplied to ${componentName}.`
      );
    }
  },
  /** The youtubeId of the video. Required if `url` is not set. */
  youtubeId: (props, propName, componentName) => {
    if (props[propName] && typeof props[propName] !== 'string') {
      return new Error(
        `\`${propName}\` expected a string, but received ${typeof props[
          propName
        ]}.`
      );
    }
    if ((!props.url && !props[propName]) || (props.url && props[propName])) {
      return new Error(
        `\`url\` or \`youtubeId\` must be supplied to ${componentName}.`
      );
    }
  }
};

export default RelatedPage;
