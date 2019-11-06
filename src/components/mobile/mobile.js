import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Video from '../video';

class MobileIllustration extends React.PureComponent {
  render() {
    const { props } = this;

    const android = props.platform === 'android';
    const ios = props.platform === 'ios';
    const portrait = props.mode === 'portrait';
    const landscape = props.mode === 'landscape';

    const config = {
      containerClasses: classnames(
        'shadow-darken25 mx-auto border border--gray relative',
        {
          wmax300: portrait,
          'wmax600 h300 flex-parent': landscape
        }
      ),
      containerStyles: {
        borderRadius: '30px',
        borderWidth: '12px',
        height: portrait ? '550px' : undefined
      },
      notchContainerClasses: classnames(
        'flex-parent flex-parent--center-cross',
        {
          'h-auto': landscape,
          w18: landscape && ios,
          'bg-gray w36 pl12': android && landscape
        }
      ),
      notchContainerStyles: {
        borderRadius:
          portrait || (android && landscape) ? '0' : '18px 18px 0 0 '
      },
      notchCurveLeftClasses: classnames('absolute  ', {
        'top left': portrait
      }),
      notchCurveLeftStyles: {
        background: `radial-gradient(circle at ${
          portrait ? 'bottom left' : 'right top'
        }, transparent 0, transparent 75%, #5b7897 75%, #5b7897 100%)`,
        height: '10px',
        width: '10px',
        marginLeft: portrait && '-10px',
        top: landscape && '-10px'
      },
      notchCurveRightClasses: classnames('absolute ', {
        'top right': portrait
      }),
      notchCurveRightStyles: {
        background:
          'radial-gradient(circle at bottom right, transparent 0, transparent 75%, #5b7897 75%, #5b7897 100%)',
        height: '10px',
        width: '10px',
        marginRight: portrait && '-10px',
        bottom: landscape && '-10px'
      },
      notchClasses: classnames(
        'bg-gray flex-child flex-child--grow flex-parent relative',
        {
          ' flex-parent--center-main  mx-auto': portrait,
          'h18 wmax120': portrait && ios,
          'h120 flex-parent--center-main flex-parent--column flex-parent--column-reverse':
            landscape && ios,
          'w-full h36 pt12': android && portrait,
          '': android && landscape
        }
      ),
      notchStyles: {
        borderRadius: portrait
          ? ios
            ? '0 0 12px 12px'
            : '0'
          : ios
          ? '0 12px 12px 0'
          : '0',
        height: landscape && android && 'calc(300 - 24px)'
      },
      speakerClasses: classnames('bg-lighten10 round-full flex-child', {
        'w60 h6': portrait,
        'h60 w6': landscape
      }),
      cameraClasses: classnames('bg-lighten10 round-full w6 h6 flex-child', {
        'ml6 mr-neg12': portrait && ios,
        'mb6 mt-neg12': landscape && ios,
        relative: android && portrait,
        absolute: android && landscape
      }),
      cameraStyles: {
        order: android && portrait ? -1 : undefined,
        left: android && portrait ? '-12px' : undefined,
        bottom: android && landscape ? '-12px' : undefined
      },
      powerClasses: classnames('bg-gray absolute', {
        'w3 round-r': portrait,
        'h3 round-t': landscape
      }),
      powerStyles: portrait
        ? { top: android ? '180px' : '90px', right: '-15px', height: '80px' }
        : { top: '-15px', left: android ? '180px' : '60px', width: '90px' },

      otherButtonClasses: classnames('bg-gray absolute', {
        'w3 round-r': portrait,
        'h3 round-t': landscape
      }),
      otherButtonStyles: portrait
        ? { top: '90px', right: '-15px', height: '45px' }
        : { top: '-15px', left: '90px', width: '45px' },

      soundStyles: portrait
        ? { top: '75px', left: '-15px' }
        : {
            left: '55px',
            bottom: '-15px'
          },
      soundClasses: classnames('bg-gray', {
        'w3 round-l h24': portrait,
        'h3 round-b w24': landscape
      }),
      soundContainerClasses: classnames(
        'flex-parent absolute flex-parent--space-between-main',
        {
          'flex-parent--column h60': portrait,
          w60: landscape
        }
      ),
      receiverClasses: classnames(
        'flex-parent   bg-gray flex-parent--center-main flex-parent--center-cross',
        {
          'h36  ': portrait,
          'w36  ': landscape
        }
      ),
      receiverStyles: {},
      screenStyles: {
        ...(props.videoPath && { overflow: 'hidden' }),
        ...(props.imagePath && {
          backgroundImage: `url(${props.imagePath})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }),
        borderRadius: portrait
          ? ios
            ? '0 0 18px 18px'
            : undefined
          : ios
          ? '18px'
          : undefined,
        height: portrait ? `calc(100% - ${ios ? '18px' : '72px'})` : '100%',
        width: landscape ? (android ? `calc(100% - 36px)` : '100%') : undefined,
        marginLeft: landscape && ios ? '-18px' : undefined
      }
    };

    return (
      <div className={config.containerClasses} style={config.containerStyles}>
        {/* power button */}
        <div className={config.powerClasses} style={config.powerStyles} />
        {/* other android button */}
        {android && (
          <div
            className={config.otherButtonClasses}
            style={config.otherButtonStyles}
          />
        )}
        {/* sound buttons */}
        {ios && (
          <div
            className={config.soundContainerClasses}
            style={config.soundStyles}
          >
            <div className={config.soundClasses} />
            <div className={config.soundClasses} />
          </div>
        )}
        {/* notch */}
        <div
          className={config.notchContainerClasses}
          style={config.notchContainerStyles}
        >
          <div className={config.notchClasses} style={config.notchStyles}>
            {ios && (
              <div
                className={config.notchCurveLeftClasses}
                style={config.notchCurveLeftStyles}
              />
            )}
            {/* speaker */}
            <div className={config.speakerClasses} />
            {/* camera */}
            <div className={config.cameraClasses} style={config.cameraStyles} />
            {/* top notch */}
            {ios && (
              <div
                className={config.notchCurveRightClasses}
                style={config.notchCurveRightStyles}
              />
            )}
          </div>
        </div>
        {/* screen */}
        <div style={config.screenStyles}>
          {props.videoPath && <Video src={props.videoPath} title={props.alt} />}
        </div>
        {/* receiver */}
        {android && (
          <div className={config.receiverClasses} style={config.receiverStyles}>
            <div className={config.speakerClasses} />
          </div>
        )}
      </div>
    );
  }
}

MobileIllustration.propTypes = {
  imagePath: PropTypes.string,
  videoPath: PropTypes.string,
  alt: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['portrait', 'landscape']).isRequired,
  platform: PropTypes.oneOf(['ios', 'android']).isRequired
};

export default MobileIllustration;
