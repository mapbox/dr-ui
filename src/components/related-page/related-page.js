import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';
import TroubleshootImage from '../troubleshoot-image/troubleshoot-image';
import BookletImage from '../booklet-image/booklet-image';
import BookImage from '../book-image/book-image';
import GlossaryImage from '../glossary-image/glossary-image';
import ExampleImage from '../example-image/example-image';
import PlaygroundImage from '../playground-image/playground-image';
import { VimeoModal, VimeoThumbnail, VimeoPlayImage } from './vimeo';
import classnames from 'classnames';

class RelatedPage extends React.PureComponent {
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
          <VimeoThumbnail>{props.vimeoThumbnail}</VimeoThumbnail>
        ) : (
          <VimeoPlayImage fallbackIcon={true} />
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

    const showVideoModal = props.vimeoId && props.contentType === 'video';
    const showVideoThumbnail =
      this.props.contentType === 'video' && props.vimeoThumbnail;

    const contentContainerClasses = classnames('', {
      'flex-parent-ml flex-parent--start-cross': showVideoThumbnail,
      'flex-parent flex-parent--row': !showVideoThumbnail
    });

    const imageClasses = classnames('flex-child', {
      'relative w-full wmin120 wmax240-ml mr18-ml mt-neg12': showVideoThumbnail,
      'pt6 mr18 none block-mm': !showVideoThumbnail
    });

    const contentClasses = classnames('flex-child', {
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
            className={`round flex-parent flex-parent--stretch-cross border border--${theme.color}-light border--${theme.color}-dark-on-hover border--2 transition`}
          >
            <div
              className="flex-child flex-child--grow px18 pt30 pb18"
              style={{ flex: 1 }}
            >
              <div className={contentContainerClasses}>
                {theme.image && (
                  <div className={imageClasses}>{theme.image}</div>
                )}
                <div className={contentClasses}>
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
            {!showVideoModal && (
              <div
                className="flex-child flex-child--no-shrink w30 flex-parent flex-parent--center-cross border-l"
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
  /** Title of the related page in the context of the current page. */
  title: PropTypes.string.isRequired,
  /** Description of the related page in the context of the current page. */
  children: PropTypes.node.isRequired,
  /** The link to the related page. Required if `vimeoId` is not set.  */
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
  /** The vimeoId of the video. Required if `url` is not set. */
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
  /** A thumbnail image of the video (using AppropriateImage). If undefined a play button icon will be the fallback. */
  vimeoThumbnail: (props, propName, componentName) => {
    if (
      props.contentType &&
      props.contentType !== 'video' &&
      props.vimeoThumbnail
    )
      return new Error(
        `\`${propName}\` only works with \`contentType=video\` in ${componentName}`
      );
    else if (props.vimeoThumbnail && typeof props.vimeoThumbnail === 'string') {
      return new Error(`\`${propName}\` must be an AppropriateImage instance`);
    }
  }
};

export default RelatedPage;
