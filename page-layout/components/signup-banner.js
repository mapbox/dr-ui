import React from 'react';
import themes from '../../themes';
export default class SignupBanner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }
  componentDidMount() {
    if (typeof MapboxPageShell !== 'undefined') {
      MapboxPageShell.afterUserCheck(() => {
        this.setState({
          isLoggedIn: !!MapboxPageShell.getUser()
        });
      });
    } else {
      // if no MapboxPageShell, show the component (necessary when developing dr-ui)
      this.setState({
        isLoggedIn: false
      });
    }
  }
  render() {
    if (this.state.isLoggedIn) return null;
    const {
      background,
      color
    } = themes['default'];
    return /*#__PURE__*/React.createElement("div", {
      className: `dr-ui--signup-banner py18 px18 round-bold flex ${background} ${color}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full prose flex flex--wrap",
      style: {
        rowGap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-child-grow mr12"
    }, /*#__PURE__*/React.createElement("div", {
      className: "txt-bold mb6"
    }, "Ready to get started?"), /*#__PURE__*/React.createElement("div", {
      className: "txt-ms mb18-mxl"
    }, "Create a free account to start building with Mapbox.")), /*#__PURE__*/React.createElement("div", {
      className: "flex flex--center-cross flex-child-no-shrink"
    }, /*#__PURE__*/React.createElement("a", {
      href: "https://account.mapbox.com/auth/signup",
      className: "btn btn--blue round-full unprose"
    }, "Sign Up"))));
  }
}