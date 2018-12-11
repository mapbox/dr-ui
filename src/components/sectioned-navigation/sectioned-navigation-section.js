import React from 'react';
import PropTypes from 'prop-types';

class SectionedNavigationSection extends React.Component {
  renderHeading() {
    const { props } = this;

    let text = props.title;
    if (props.includeCount) {
      text += ` (${props.items.length})`;
    }

    const classes = `block txt-bold color-gray ${
      props.hideSubItems ? 'py6' : 'py12'
    }`;

    if (props.url) {
      return (
        <a href={props.url} className={`${classes} color-blue-on-hover`}>
          {text}
        </a>
      );
    }
    return <div className={classes}>{text}</div>;
  }

  renderItems() {
    const { props } = this;
    if (props.hideSubItems) {
      return null;
    }
    const items = this.props.items.map(item => {
      return (
        <a
          key={item.url}
          href={item.url}
          className={`color-blue-on-hover block mb6${
            item.active === true ? ' txt-bold' : ''
          }`}
        >
          {item.text}
        </a>
      );
    });
    return <div>{items}</div>;
  }

  render() {
    return (
      <div>
        {this.renderHeading()}
        {this.renderItems()}
      </div>
    );
  }
}

SectionedNavigationSection.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      active: PropTypes.bool
    })
  ).isRequired,
  includeCount: PropTypes.bool,
  hideSubItems: PropTypes.bool
};

SectionedNavigationSection.defaultProps = {
  includeCount: true,
  hideSubItems: false
};

export default SectionedNavigationSection;
