import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SectionedNavigationSection extends React.Component {
  constructor(props) {
    super(props);
    this.activeSidebar = React.createRef();
  }

  componentDidMount() {
    const sideBar = document.getElementById('dr-ui--page-layout-sidebar');
    if (!sideBar) return;
    if (this.activeSidebar.current) {
      sideBar.scrollTop = this.activeSidebar.current.offsetTop;
    }
  }

  renderHeading() {
    const { props } = this;

    let text = props.title;
    if (props.includeCount) {
      text += ` (${props.items.length})`;
    }

    const classes = classnames('block txt-bold color-gray', {
      py6: props.hideSubItems,
      py12: !props.hideSubItems,
      'color-blue-on-hover': props.url
    });

    if (props.url) {
      return (
        <a href={props.url} className={classes}>
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
          ref={item.active ? this.activeSidebar : undefined}
          className={classnames('color-blue-on-hover block mb6', {
            'txt-bold': item.active
          })}
        >
          {item.text}
        </a>
      );
    });
    return <React.Fragment>{items}</React.Fragment>;
  }

  render() {
    return (
      <React.Fragment>
        {this.renderHeading()}
        {this.renderItems()}
      </React.Fragment>
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
