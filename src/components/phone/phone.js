import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Phone extends React.PureComponent {
  render() {
    const { props } = this;

    const android = props.platform === 'android';
    const ios = props.platform === 'ios';
    const portrait = props.mode === 'portrait';
    const landscape = props.mode === 'landscape';

    const config = {
      containerClasses: classnames(
        'shadow-darken25 mx-auto border border--gray-dark relative bg-darken75',
        {
          wmax300: portrait,
          'wmax600 flex': landscape
        }
      ),
      containerStyles: {
        borderRadius: '30px',
        borderWidth: '12px'
      },
      notchContainerClasses: classnames('flex flex--center-cross z1 relative', {
        'h-auto': landscape,
        w18: landscape && ios,
        'bg-gray-dark w36 pl12': android && landscape,
        'round-t-full': portrait && ios
      }),
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
        }, transparent 0, transparent 75%, #23374d 75%, #23374d 100%)`,
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
          'radial-gradient(circle at bottom right, transparent 0, transparent 75%, #23374d 75%, #23374d 100%)',
        height: '10px',
        width: '10px',
        marginRight: portrait && '-10px',
        bottom: landscape && '-10px'
      },
      notchClasses: classnames('bg-gray-dark flex-child-grow flex relative', {
        'flex--center-main mx-auto': portrait,
        'h18 wmax120': portrait && ios,
        'h120 flex--center-main flex--column flex--column-reverse':
          landscape && ios,
        'w-full h36 pt12': android && portrait
      }),
      notchStyles: {
        borderRadius: portrait
          ? ios
            ? '0 0 12px 12px'
            : '0'
          : ios
          ? '0 12px 12px 0'
          : '0'
      },
      speakerClasses: classnames('bg-gray-deep round-full', {
        'w60 h6': portrait,
        'h60 w6': landscape
      }),
      cameraClasses: classnames('bg-gray-deep round-full w6 h6', {
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
      powerClasses: classnames('bg-gray-dark absolute', {
        'w3 round-r': portrait,
        'h3 round-t none block-mm': landscape
      }),
      powerStyles: portrait
        ? { top: android ? '180px' : '90px', right: '-15px', height: '80px' }
        : { top: '-15px', left: android ? '180px' : '60px', width: '90px' },

      otherButtonClasses: classnames('bg-gray-dark absolute', {
        'w3 round-r': portrait,
        'h3 round-t none block-mm': landscape
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
      soundClasses: classnames('bg-gray-dark', {
        'w3 round-l h24': portrait,
        'h3 round-b w24 none block-mm': landscape
      }),
      soundContainerClasses: classnames(
        'flex absolute flex--space-between-main',
        {
          'flex--column h60': portrait,
          w60: landscape
        }
      ),
      receiverClasses: classnames(
        'flex bg-gray-dark flex--center-main flex--center-cross',
        {
          h36: portrait,
          w36: landscape
        }
      ),
      screenClasses: classnames(
        'relative flex flex--center-cross flex--center-main ',
        {
          'hmin120-mm hmin60': landscape,
          hmin300: portrait
        }
      ),
      screenStyles: {
        overflow: 'hidden',
        borderRadius: ios ? '18px' : undefined,
        height: portrait ? `calc(100% - ${ios ? '18px' : '72px'})` : '100%',
        width: landscape ? (android ? `calc(100% - 36px)` : '100%') : undefined,
        marginTop: portrait && ios ? '-18px' : undefined,
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
        <div style={config.screenStyles} className={config.screenClasses}>
          <div className="loading mx-auto loading--dark absolute z0" />
          <div className="relative">{props.children}</div>
        </div>
        {/* receiver */}
        {android && (
          <div className={config.receiverClasses}>
            <div className={config.speakerClasses} />
          </div>
        )}
      </div>
    );
  }
}

Phone.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['portrait', 'landscape']).isRequired,
  platform: PropTypes.oneOf(['ios', 'android']).isRequired
};

export default Phone;
