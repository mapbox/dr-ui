/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import styles from './styles.module.css';
// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'link inline-block link--gray';
const LINK_ACTIVE_CLASS_NAME = 'link--blue';
export default function TOC({ className, ...props }) {
  return (
    <nav className="dr-ui--on-this-page mb24-mxl mb18 color-text">
      <h2 id="on-this-page" className="unprose txt-m txt-bold mb6">
        On this page
      </h2>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </nav>
  );
}
