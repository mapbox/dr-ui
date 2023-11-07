import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '@mapbox/mr-ui/button';
export const cardBoxShadow = '0px 2px 5px 0px #5F7E9B59';
export const renderDocLink = (link, text = 'Read documentation', tag, standalone = false) => /*#__PURE__*/React.createElement("a", {
  key: text,
  href: link,
  className: "block link pb3-mm pt0-mm py6 flex flex--center-cross txt-fancy-regular"
}, text, /*#__PURE__*/React.createElement("span", {
  className: classnames('ml6', {
    'link-arrow': !standalone
  }),
  style: {
    top: 1
  }
}, "\u2192"), tag && /*#__PURE__*/React.createElement("div", {
  className: "ml6"
}, tag));
const CardContent = ({
  highlightColor,
  icon,
  title,
  tag,
  text,
  links,
  isLinkList,
  sectionColor
}) => /*#__PURE__*/React.createElement("div", {
  className: classnames('drui-index-card relative flex overflow-hidden h-full', {
    'round-bold drui-index-card-hoverable': !isLinkList
  }),
  style: {
    boxShadow: isLinkList ? 'none' : cardBoxShadow
  }
}, highlightColor && /*#__PURE__*/React.createElement("div", {
  className: `flex-child-no-shrink bg-${highlightColor}`,
  style: {
    width: 4
  }
}), /*#__PURE__*/React.createElement("div", {
  className: classnames({
    'px18 py18 flex flex--column': !isLinkList
  })
}, /*#__PURE__*/React.createElement("div", {
  className: classnames('flex flex--center-cross', {
    mb12: icon
  })
}, icon && /*#__PURE__*/React.createElement("div", {
  className: "mr12",
  style: {
    height: 28,
    width: 28
  }
}, icon), /*#__PURE__*/React.createElement("h3", {
  className: classnames('txt-fancy txt-l mb-neg6 flex flex--wrap flex--center-cross', {
    mb12: !icon
  }),
  style: {
    fontSize: 18,
    lineHeight: '18px'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "mr6 mb6 txt-nowrap"
}, title), tag && /*#__PURE__*/React.createElement("div", {
  className: "inline-block mr6 mb6 relative txt-nowrap",
  style: {
    top: -2
  }
}, tag))), /*#__PURE__*/React.createElement("p", {
  className: "txt-m mb12 color-gray-deep flex-child-grow txt-fancy-regular",
  style: {
    minHeight: 48
  }
}, text), /*#__PURE__*/React.createElement("div", {
  className: classnames('flex', {
    'flex--wrap': !isLinkList,
    'flex--column': isLinkList
  })
}, links && links.map((link, i) => {
  const isLast = i === links.length - 1;
  if (isLinkList) {
    return renderDocLink(link.link, link.title, link.tag, link.icon);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('mt6 card-button', {
      mr6: !isLast
    }),
    key: i
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small",
    href: link.link,
    passthroughProps: {
      'aria-label': link.tooltip,
      className: classnames('btn btn--stroke round-full pb6 txt-xs txt-nowrap color-gray-deep px12 color-white-on-hover shadow-white-on-hover txt-fancy-regular', `bg-${sectionColor}-on-hover`),
      style: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '17px',
        paddingTop: '7px'
      }
    }
  }, link.title));
}))));
const IndexCard = props => {
  const {
    title,
    link,
    isLinkList
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      marginBottom: isLinkList && 40
    },
    className: classnames('col w-full w-1/2-mm w-1/3-ml w-1/4-mxl', {
      mb18: !isLinkList
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full"
  }, link ? /*#__PURE__*/React.createElement("a", {
    href: link
  }, /*#__PURE__*/React.createElement(CardContent, props)) : /*#__PURE__*/React.createElement(CardContent, props)));
};
IndexCard.defaultProps = {
  isLinkList: false
};
export default IndexCard;