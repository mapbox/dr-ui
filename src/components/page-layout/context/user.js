import React from 'react';
import PropTypes from 'prop-types';
import ContextConsumer, { languageOptions } from './user-context';
import ControlToggleSet from '@mapbox/mr-ui/control-toggle-set';

export const UserName = () => (
  <ContextConsumer>{({ userName }) => userName}</ContextConsumer>
);

export const UserAccessToken = () => (
  <ContextConsumer>{({ userAccessToken }) => userAccessToken}</ContextConsumer>
);

export const UserLanguage = ({ platform }) => (
  <ContextConsumer>
    {({ userPreferredLanguage }) => {
      return userPreferredLanguage[platform];
    }}
  </ContextConsumer>
);

UserLanguage.defaultProps = {
  platform: 'android'
};

UserLanguage.propTypes = {
  platform: PropTypes.oneOf(['ios', 'android'])
};

export const SwitchUserLanguage = ({ platform, id }) => (
  <ContextConsumer>
    {({ setLanguage, userPreferredLanguage }) => {
      return (
        <ControlToggleSet
          id={id}
          value={userPreferredLanguage[platform]}
          onChange={(language) => setLanguage(createObj(platform, language))}
          options={languageOptions[platform]}
        />
      );
    }}
  </ContextConsumer>
);

SwitchUserLanguage.defaultProps = {
  platform: 'android',
  id: 'toggle-language'
};

SwitchUserLanguage.propTypes = {
  platform: PropTypes.oneOf(['ios', 'android']),
  id: PropTypes.string
};

function createObj(key, value) {
  if (!key) return {};
  const obj = {};
  obj[key] = value;
  return obj;
}
