import React from 'react';
import { routeToPrefixed } from '@mapbox/batfish/modules/route-to';
import NavigationAccordion from '../../../../pkg/navigation-accordion';
import PropTypes from 'prop-types';

class LayoutAccordion extends React.PureComponent {
  render() {
    const parseHeadings = arr => {
      return arr.map((heading, index) => {
        return {
          level: heading.level,
          text: heading.text,
          slug: heading.slug,
          order: index
        };
      });
    };

    const orderedHeadings = this.props.frontMatter.headings
      ? parseHeadings(this.props.frontMatter.headings)
      : parseHeadings(this.props.headings);

    const topLevelHeadings = orderedHeadings.filter(h => h.level === 2);
    const secondLevelItems = topLevelHeadings.map((h2, index) => {
      const nextH2 = topLevelHeadings[index + 1];
      return {
        title: h2.text,
        path: h2.slug,
        thirdLevelItems: orderedHeadings
          .filter(
            f =>
              f.level === 3 &&
              f.order > h2.order &&
              (nextH2 ? f.order < nextH2.order : true)
          )
          .map(h3 => {
            return {
              title: h3.text,
              path: h3.slug
            };
          })
      };
    });

    return (
      <div className="mx0-mm ml-neg24 mr-neg36 relative-mm absolute right left">
        <NavigationAccordion
          currentPath={this.props.location.pathname}
          contents={{
            firstLevelItems: this.props.orderedPages[this.props.sectionPath]
              .pages,
            secondLevelItems: secondLevelItems || null
          }}
          onDropdownChange={value => {
            routeToPrefixed(value);
          }}
        />
      </div>
    );
  }
}

LayoutAccordion.propTypes = {
  orderedPages: PropTypes.object.isRequired,
  sectionPath: PropTypes.string.isRequired,
  frontMatter: PropTypes.object.isRequired
};

export default LayoutAccordion;
