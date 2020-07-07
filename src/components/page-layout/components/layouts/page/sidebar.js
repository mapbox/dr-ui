import React from 'react';
import Scrollspy from 'react-scrollspy';
import PropTypes from 'prop-types';
import { buildSections, buildScollspyItems, buildToc } from './helpers';

export default class SidebarPage extends React.PureComponent {
  render() {
    const { headings } = this.props;
    if (!headings) return <div />;
    const sections = buildSections(this.props.headings);
    return (
      <div className="mx24 py12">
        <Scrollspy
          items={buildScollspyItems(sections)}
          currentClassName="txt-bold"
        >
          {buildToc(sections)}
        </Scrollspy>
      </div>
    );
  }
}

SidebarPage.propTypes = {
  headings: PropTypes.array
};
