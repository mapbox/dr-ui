import React from 'react';
import PropTypes from 'prop-types';

export function findSubItems(pickedHeadings, index) {
  const h2Indices = pickedHeadings.reduce((a, item, i) => {
    if (item.level === 2) a.push(i);
    return a;
  }, []);
  const nextH2 = h2Indices[h2Indices.indexOf(index) + 1];
  return pickedHeadings.slice(index, nextH2).filter((f) => f.level === 3);
}

// splits an array of headings into a nested array
export function buildSections(headings) {
  if (!headings) return [];
  const pickedHeadings = headings.filter(
    (heading) => heading.level === 2 || heading.level === 3
  );
  return pickedHeadings.reduce((arr, heading, index) => {
    if (heading.level === 2) {
      arr.push({
        id: heading.slug,
        value: heading.text,
        children: findSubItems(pickedHeadings, index).map((sub) => ({
          id: sub.slug,
          value: sub.text,
          ...(sub.icon && { icon: sub.icon })
        }))
      });
    }
    return arr;
  }, []);
}

export class AsideHeading extends React.PureComponent {
  render() {
    return (
      <h2 className="unprose txt-h4 txt-fancy mb12">{this.props.children}</h2>
    );
  }
}

AsideHeading.propTypes = {
  children: PropTypes.node
};
