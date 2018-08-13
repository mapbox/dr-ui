import React from 'react';
import PropTypes from 'prop-types';

class SectionedNavigationSection extends React.Component {
  renderHeading() {
    const { props } = this;

    let text = props.title;
    if (props.includeCount) {
      text += ` (${props.items.length})`;
    }

    if (props.url) {
      return (
        <a href={props.url} className="color-blue-on-hover">
          {text}
        </a>
      );
    }
    return <div>{text}</div>;
  }

  renderItems() {
    return this.props.items.map(item => {
      let activeClass = '';
      if (item.active === true) {
        activeClass = 'txt-bold';
      }
      return (
        <li key={item.url} className={`mt6 ${activeClass}`}>
          <a href={item.url} className="color-blue-on-hover">
            {item.text}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="txt-m">{this.renderHeading()}</div>
        <ul className="txt-s">{this.renderItems()}</ul>
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
  includeCount: PropTypes.bool
};

SectionedNavigationSection.defaultProps = {
  includeCount: true
};

export default SectionedNavigationSection;
