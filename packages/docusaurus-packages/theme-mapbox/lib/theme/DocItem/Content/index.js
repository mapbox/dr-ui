/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames, useWindowSize } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import Heading from '@theme/Heading';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import MDXContent from '@theme/MDXContent';
import { SignupBanner, DiscordCTA } from '@theme/CTA';
import OverviewHeader from '@theme/OverviewHeader';
import Feedback from '@theme/Feedback';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const FORWARD_EVENT_WEBHOOK = {
  staging:
    'https://evj5gwoa8j.execute-api.us-east-1.amazonaws.com/hookshot/webhook',
  production:
    'https://2n40g6lyc9.execute-api.us-east-1.amazonaws.com/hookshot/webhook'
}

/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle({ metadata, frontMatter, contentTitle }) {
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

export default function DocItemContent({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const { metadata, frontMatter, contentTitle } = useDoc();
  const location = useLocation();

  const { contentType } = frontMatter;

  const syntheticTitle = useSyntheticTitle({
    metadata,
    frontMatter,
    contentTitle
  });

  let titleContent;

  if (syntheticTitle) {
    titleContent = (
      <header className="col col--auto prose w-2/3-mxl w-full">
        <Heading as="h1" className="txt-fancy">
          {syntheticTitle}
        </Heading>
      </header>
    );
  }

  if (frontMatter.overviewHeader) {
    titleContent = <OverviewHeader {...frontMatter.overviewHeader} />;
  }

  let feedbackType = '';
  if (contentType === 'example' || contentType === 'playground') {
    feedbackType = contentType;
  }

  return (
    <div
      id="docs-content"
      className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}
    >
      {titleContent}
      <div className="grid grid--gut60">
        <div className="dr-ui--page-layout-aside col w-full w-1/3-mxl">
          <DocItemTOCDesktop />
        </div>
        <div className="col col--auto w-2/3-mxl w-full pb18 prose">
          <MDXContent>{children}</MDXContent>

          <div className="my36 color-text block none-mxl">
            <div className="flex mx-neg6 flex--wrap">
              <div className="w-full w-1/2-ml px6 flex-child-no-shrink mb18">
                <SignupBanner />
              </div>

              <div className="w-full w-1/2-ml px6 flex-child-no-shrink mb18">
                <DiscordCTA />
              </div>
            </div>
          </div>
          <div className="pt60 pb30">
            <Feedback
              type={feedbackType ? feedbackType : undefined}
              site={siteConfig.title}
              location={location}
              webhook={FORWARD_EVENT_WEBHOOK}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
