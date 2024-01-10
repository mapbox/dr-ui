/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { useSidebarBreadcrumbs } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import Icon from '@mapbox/mr-ui/icon';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// TODO move to design system folder
function BreadcrumbsItemLink({ children, href, isLast }) {
  if (isLast) {
    return (
      <span className="color-gray none inline-block-mm" itemProp="name">
        {children}
      </span>
    );
  }
  return (
    <>
      {href ? (
        <span>
          <Link className="link" href={href}>
            {children}
          </Link>
        </span>
      ) : (
        // TODO Google search console doesn't like breadcrumb items without href.
        // The schema doesn't seem to require `id` for each `item`, although Google
        // insist to infer one, even if it's invalid. Removing `itemProp="item
        // name"` for now, since I don't know how to properly fix it.
        // See https://github.com/facebook/docusaurus/issues/7241
        <span>{children}</span>
      )}
      {!isLast && (
        <span className="color-gray-light inline-block-mm none px6">
          <Icon name="chevron-right" inline={true} />
        </span>
      )}
    </>
  );
}
// TODO move to design system folder
function BreadcrumbsItem({ children, active, index, addMicrodata }) {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: 'itemListElement',
        itemType: 'https://schema.org/ListItem'
      })}
      className="inline-block"
    >
      {children}
      <meta itemProp="position" content={String(index + 1)} />
    </li>
  );
}
export default function DocBreadcrumbs() {
  const { siteConfig } = useDocusaurusContext();
  const { title, baseUrl } = siteConfig;

  const breadcrumbs = useSidebarBreadcrumbs();
  if (!breadcrumbs) {
    return null;
  }

  breadcrumbs.unshift(
    {
      label: 'All docs',
      href: 'https://docs.mapbox.com'
    },
    {
      label: title,
      href: baseUrl
    }
  );

  return (
    <nav
      className="dr-ui--breadcrumb pt3 pb12 none block-mm"
      data-swiftype-index="false"
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs'
      })}
    >
      <ul
        className="breadcrumbs"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          const href =
            item.type === 'category' && item.linkUnlisted
              ? undefined
              : item.href;
          return (
            <BreadcrumbsItem
              key={idx}
              active={isLast}
              index={idx}
              addMicrodata={!!href}
            >
              <BreadcrumbsItemLink href={href} isLast={isLast}>
                {item.label}
              </BreadcrumbsItemLink>
            </BreadcrumbsItem>
          );
        })}
      </ul>
    </nav>
  );
}
