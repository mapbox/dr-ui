/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import TOC from '@theme/TOC';
import { SignupBanner, DiscordCTA } from '@theme/CTA';

export default function DocItemTOCDesktop() {
  const { toc, frontMatter } = useDoc();
  return (
    <div
      className="overflow-auto-mxl scroll-styled sticky-mxl color-text pb18"
      style={{ top: '88px' }}
    >
      <TOC
        toc={toc}
        minHeadingLevel={frontMatter.toc_min_heading_level}
        maxHeadingLevel={frontMatter.toc_max_heading_level}
        //className={ThemeClassNames.docs.docTocDesktop}
      />

      <div className="mb18">
        <SignupBanner />
      </div>

      <div className="my18 color-text none block-mxl mb18">
        <DiscordCTA />
      </div>
    </div>
  );
}
