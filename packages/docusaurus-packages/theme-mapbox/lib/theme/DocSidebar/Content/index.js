/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';
import clsx from 'clsx';

import { translate } from '@docusaurus/Translate';
import DocSidebarItems from '@theme/DocSidebarItems';

export default function DocSidebarDesktopContent({ path, sidebar, className }) {
  return (
    <nav
      aria-label={translate({
        id: 'theme.docs.sidebar.navAriaLabel',
        message: 'Docs sidebar',
        description: 'The ARIA label for the sidebar navigation'
      })}
      className={clsx(className)}
    >
      <ul>
        <DocSidebarItems items={sidebar} activePath={path} level={1} />
      </ul>
    </nav>
  );
}
