import React from 'react';
import classnames from 'classnames';
import Scrollspy from 'react-scrollspy';
import PropTypes from 'prop-types';

class LayoutToc extends React.PureComponent {
  render() {
    const sections = this.props.headings
      .filter((heading) => {
        return heading.level === 2 || heading.level === 3;
      })
      .map((heading) => {
        return {
          title: heading.text,
          url: `#${heading.slug}`,
          level: heading.level
        };
      });

    const items = sections.map((heading) => heading.url.replace('#', ''));
    const tocContent = sections.map((heading, index) => {
      const nextHeading = sections[index + 1] || null;
      const headingClasses = classnames('', {
        pb6: heading.level === 2,
        'mb6 color-gray': heading.level === 3,
        mb24: nextHeading && nextHeading.level === 2 && heading.level === 3,
        mb6: nextHeading && nextHeading.level === 2 && heading.level === 2
      });
      return (
        <li key={index} className={headingClasses}>
          <a href={heading.url} className="color-blue-on-hover">
            {heading.title}
          </a>
        </li>
      );
    });
    return (
      <div className="mx24">
        <Scrollspy items={items} currentClassName="txt-bold">
          {tocContent}
        </Scrollspy>
      </div>
    );
  }
}

LayoutToc.propTypes = {
  headings: PropTypes.array.isRequired
};

export default LayoutToc;
