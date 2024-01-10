/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';
import {
  findFirstSidebarItemLink,
  useDocById
} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { translate } from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import RightArrow from '../Icon/RightArrow';
import IdealImage from '@mapbox/docusaurus-packages/ideal-image';

function CardLayout({ href, title, description, thumbnail }) {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered((prevState) => !prevState);
  };
  return (
    <div onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <Link
        href={href}
        className="dr-ui--card text-color-gray-dark transition color-blue-on-hover round clip inline-block w-full unprose pb18"
      >
        {thumbnail && (
          <div className="relative h120 mb6" style={{ overflow: 'hidden' }}>
            {thumbnail}
          </div>
        )}
        <div className="transition">
          <Heading
            as="div"
            className="mb6 flex txt-bold flex--center-cross"
            title={title}
          >
            {title}
            <div className="w60">
              <RightArrow isHovered={isHovered} />
            </div>
          </Heading>
          {description && (
            <p
              className="transition"
              style={{ color: isHovered ? '#23262D' : '#757d82' }}
              title={description}
            >
              {description}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}

function CardCategory({ item }) {
  const href = findFirstSidebarItemLink(item);
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <CardLayout
      href={href}
      icon="🗃️"
      title={item.label}
      thumbnail={
        item.customProps.thumbnail ? (
          <IdealImage
            style={{ borderRadius: '4px' }}
            imageId={item.customProps.thumbnail}
          />
        ) : undefined
      }
      description={
        item.description ??
        translate(
          {
            message: '{count} items',
            id: 'theme.docs.DocCard.categoryDescription',
            description:
              'The default description for a category card in the generated index about how many items this category includes'
          },
          { count: item.items.length }
        )
      }
    />
  );
}

function CardLink({ item }) {
  const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      thumbnail={
        item.customProps.thumbnail ? (
          <IdealImage
            style={{ borderRadius: '4px' }}
            imageId={item.customProps.thumbnail}
          />
        ) : undefined
      }
      description={item.description ?? doc?.description}
    />
  );
}

export default function DocCard({ item }) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
