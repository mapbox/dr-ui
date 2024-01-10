/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { usePrismTheme } from '@docusaurus/theme-common';

export default function CodeBlockContainer(props) {
  const prismTheme = usePrismTheme();

  return (
    <div
      {...props}
      className={clsx(props.className, 'round-bold mb24')}
      style={{
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
        backgroundColor: prismTheme.plain.backgroundColor
      }}
    />
  );
}

CodeBlockContainer.propTypes = {
  className: PropTypes.string
};
