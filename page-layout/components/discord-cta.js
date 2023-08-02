import React from 'react';
import Icon from '@mapbox/mr-ui/icon';
export default class DiscordCTA extends React.PureComponent {
  render() {
    return /*#__PURE__*/React.createElement("a", {
      className: "dr-ui--discord-banner py18 px18 round-bold flex color-blue txt-ms flex flex--center-cross link bg-blue-lighter-on-hover transition",
      style: {
        backgroundColor: '#ECF1FD'
      },
      href: "https://discord.gg/uMpcC5RmJh",
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mt6 mr18"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "44",
      height: "46",
      viewBox: "0 0 44 46",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 3.68C0 1.64759 1.64162 0 3.66667 0H40.3333C42.3584 0 44 1.64759 44 3.68V46C40.1176 44.2642 36.6667 42.5283 32.7843 37.3208L34.8265 42.1145C35.0851 42.7215 34.6414 43.3962 33.9837 43.3962H3.66667C1.64162 43.3962 0 41.7486 0 39.7162V3.68Z",
      fill: "#4164FB"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M31.5451 11.9554C29.765 11.098 27.8616 10.4748 25.8717 10.12C25.6273 10.5749 25.3417 11.1867 25.1449 11.6734C23.0295 11.3459 20.9336 11.3459 18.8572 11.6734C18.6603 11.1867 18.3683 10.5749 18.1218 10.12C16.1297 10.4748 14.2241 11.1003 12.444 11.96C8.85345 17.5457 7.88011 22.9927 8.36678 28.3624C10.7482 30.1932 13.0561 31.3054 15.325 32.0332C15.8852 31.2394 16.3849 30.3956 16.8153 29.5064C15.9956 29.1857 15.2104 28.79 14.4685 28.3306C14.6653 28.1804 14.8579 28.0235 15.0439 27.862C19.5688 30.0408 24.4852 30.0408 28.9561 27.862C29.1442 28.0235 29.3367 28.1804 29.5314 28.3306C28.7873 28.7922 28 29.1879 27.1803 29.5087C27.6107 30.3956 28.1082 31.2417 28.6705 32.0354C30.9417 31.3076 33.2517 30.1955 35.6331 28.3624C36.2042 22.1376 34.6576 16.7406 31.5451 11.9554ZM17.4318 25.0601C16.0734 25.0601 14.9595 23.7546 14.9595 22.1648C14.9595 20.5751 16.0496 19.2674 17.4318 19.2674C18.8139 19.2674 19.9278 20.5728 19.904 22.1648C19.9062 23.7546 18.8139 25.0601 17.4318 25.0601ZM26.5681 25.0601C25.2098 25.0601 24.0959 23.7546 24.0959 22.1648C24.0959 20.5751 25.186 19.2674 26.5681 19.2674C27.9503 19.2674 29.0642 20.5728 29.0404 22.1648C29.0404 23.7546 27.9503 25.0601 26.5681 25.0601Z",
      fill: "white"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "flex-child-grow"
    }, /*#__PURE__*/React.createElement("span", null, "Join the Mapbox Developers Discord Community", /*#__PURE__*/React.createElement("span", {
      className: "ml6"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: 'arrow-right',
      inline: true
    })))));
  }
}