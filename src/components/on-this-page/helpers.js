import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/mr-ui/icon';

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

// finds the active header anchor
// adapted from https://github.com/facebook/docusaurus/blob/2aae77124eaaac3d768547a88f77c4b2402f7dec/packages/docusaurus-theme-classic/src/theme/hooks/useTOCHighlight.ts
export function getActiveHeaderAnchor(topOffset) {
  // get all docs-content headers and then convert nodelist to array
  const headersAnchors = Array.prototype.slice.call(
    document.querySelectorAll(
      '#docs-content h2.anchor, #docs-content h3.anchor'
    )
  );
  // if there are no found header anchors, return undefined
  if (!headersAnchors || headersAnchors.length === 0) return undefined;

  const firstAnchorUnderViewportTop = headersAnchors.filter((anchor) => {
    const { top } = anchor.getBoundingClientRect();
    if (top >= topOffset) return anchor;
  })[0];

  const lastAnchor = headersAnchors[headersAnchors.length - 1];

  // if bottom of page, return last heading as acive
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    return lastAnchor;
  }

  if (firstAnchorUnderViewportTop) {
    // If first anchor in viewport is under a certain threshold, we consider it's not the active anchor.
    // In such case, the active anchor is the previous one (if it exists), that may be above the viewport
    if (firstAnchorUnderViewportTop.getBoundingClientRect().top >= topOffset) {
      const previousAnchor =
        headersAnchors[headersAnchors.indexOf(firstAnchorUnderViewportTop) - 1];
      return previousAnchor !== null && previousAnchor !== void 0
        ? previousAnchor
        : firstAnchorUnderViewportTop;
    }

    // If the anchor is at the top of the viewport, we consider it's the first anchor
    else {
      return firstAnchorUnderViewportTop;
    }
  }
  // no anchor under viewport top
  else {
    return lastAnchor;
  }
}

export class AsideHeading extends React.PureComponent {
  render() {
    return (
      <h2 id={this.props.id} className="unprose txt-m txt-bold mb6">
        {this.props.children}
      </h2>
    );
  }
}

AsideHeading.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string
};

export class HeadingIcon extends React.PureComponent {
  render() {
    return (
      <div
        className="color-darken75 mr6 w18 h18 bg-gray-faint round-full flex-parent-inline flex-parent--center-main flex-parent--center-cross relative ml-neg12"
        style={{ top: 3 }}
      >
        <Icon size={16} name={this.props.name} />
      </div>
    );
  }
}

HeadingIcon.propTypes = {
  name: PropTypes.node
};
