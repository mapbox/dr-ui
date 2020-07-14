import React from 'react';
import PropTypes from 'prop-types';

const defaultUserContext = {
  userName: 'YOUR_MAPBOX_USERNAME',
  userAccessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
  userPreferredLanguage: {
    ios: 'swift',
    android: 'java'
  }
};

const languageOptions = {
  ios: [
    {
      label: 'Swift',
      value: 'swift'
    },
    {
      label: 'Objective-C',
      value: 'objectiveC'
    }
  ],
  android: [
    {
      label: 'Java',
      value: 'java'
    },
    {
      label: 'Kotlin',
      value: 'kotlin'
    }
  ]
};

const { Provider, Consumer } = React.createContext(defaultUserContext);

class UserContextProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      ...defaultUserContext,
      setLanguage: this.setPreferredLanguage
    };
  }

  setPreferredLanguage = (language) => {
    this.setState((state) => ({
      userPreferredLanguage: {
        ...state.userPreferredLanguage,
        ...language
      }
    }));
  };

  componentDidMount() {
    if (typeof MapboxPageShell !== 'undefined') {
      MapboxPageShell.afterUserCheck(() => {
        this.setState({
          userAccessToken:
            MapboxPageShell.getUserPublicAccessToken() ||
            defaultUserContext.userAccessToken,
          userName: MapboxPageShell.getUser()
            ? MapboxPageShell.getUser().id
            : defaultUserContext.userName
        });
      });
    }
  }

  render() {
    const {
      userAccessToken,
      userName,
      userPreferredLanguage,
      setLanguage
    } = this.state;
    return (
      <Provider
        value={{
          userAccessToken,
          userName,
          userPreferredLanguage,
          setLanguage
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { Consumer as default, UserContextProvider, languageOptions };
