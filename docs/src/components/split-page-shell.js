import React from 'react';
import PropTypes from 'prop-types';
import SplitPage from '../../../src/components/page-layout/split-page';
import constants from '../constants.json';

export default class SplitPageShell extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <SplitPage {...this.props} constants={constants}>
        {children}
      </SplitPage>
    );
  }
}

SplitPageShell.propTypes = {
  children: PropTypes.node
};
