/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
// import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import Unlisted from '@theme/Unlisted';
import { useLocation } from '@docusaurus/router';
import AnalyticsShell from '@theme/AnalyticsShell';
import { mbxTaggerBatfish } from '@mapbox/remark-lint-mapbox/frontmatter/mbx-tagger-batfish';

export default function DocItemLayout({ children }) {
  const doc = useDoc();

  const {
    metadata: { unlisted }
  } = doc;

  const location = useLocation();

  // use remark-lint-mapbox metaTagger to look up context for this path
  // mbxTaggerBatfish was intended for processing multiple pages at once,
  // but here we are passing in data for the current page.
  const mbxMetaData = mbxTaggerBatfish({
    pages: [
      {
        path: doc.metadata.slug,
        frontMatter: doc.frontMatter
      }
    ]
  })[doc.metadata.slug];

  return (
    <AnalyticsShell mbxMetadata={mbxMetaData} location={location}>
      {unlisted && <Unlisted />}
      <DocVersionBanner />
      <DocBreadcrumbs />
      <article>
        <DocVersionBadge />
        <DocItemContent>{children}</DocItemContent>
        <DocItemFooter />
      </article>
      {/* TODO: Restore pagination if specified in the frontmatter */}
      {/* <DocItemPaginator /> */}
    </AnalyticsShell>
  );
}
