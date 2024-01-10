import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import {
  DEFAULT_SOCIAL_IMAGE_URL,
  DEFAULT_SOCIAL_IMAGE_THUMBNAIL_URL
} from '../Navbar/PageHeader/constants';
import { titleGenerator } from '@theme/Search/title-generator';

const MetaTagger = ({ metadata, site, subsite }) => {
  const title = titleGenerator(metadata.title, subsite, site).join(' | ');

  const suffixedTitle = `${title} | Mapbox`;
  // If there is not meta description it's not delcared in the pages FrontMatter
  const preppedDescription = metadata.frontMatter?.description?.replace(
    /\s+/g,
    ' '
  );

  let prodUrl = 'https://docs.mapbox.com';
  if (metadata.permalink !== '/') prodUrl += '/';
  prodUrl += metadata.permalink;

  const metaItems = [{ name: 'description', content: preppedDescription }];

  metaItems.push(
    { name: 'twitter:title', content: title },
    { property: 'og:title', content: title },
    { name: 'twitter:description', content: preppedDescription },
    { property: 'og:description', content: preppedDescription },
    { property: 'og:url', content: prodUrl },
    { property: 'og:type', content: 'website' },
    {
      class: 'swiftype',
      name: 'title',
      'data-type': 'string',
      content: metadata.title
    },
    {
      class: 'swiftype',
      name: 'excerpt',
      'data-type': 'string',
      content: metadata.description
    },
    { name: 'twitter:image:alt', content: metadata.frontMatter.imageAlt },
    { property: 'og:image', content: metadata.frontMatter.imageUrl },
    {
      class: 'swiftype',
      name: 'image',
      'data-type': 'enum',
      content: metadata.frontMatter.imageUrl
    },
    {
      class: 'swiftype',
      name: 'site',
      'data-type': 'string',
      content: site
    }
  );

  if (subsite) {
    metaItems.push({
      class: 'swiftype',
      name: 'subsite',
      'data-type': 'string',
      content: subsite
    });
  }

  if (metadata.frontMatter.contentType) {
    metaItems.push({
      class: 'swiftype',
      name: 'contentType',
      'data-type': 'string',
      content: metadata.frontMatter.contentType
    });
  }

  if (metadata.frontMatter.language) {
    metadata.frontMatter.language.forEach((language) => {
      metaItems.push({
        class: 'swiftype',
        name: 'codeLanguage',
        'data-type': 'string',
        content: language
      });
    });
  }

  if (metadata.frontMatter.level) {
    metaItems.push({
      class: 'swiftype',
      name: 'level',
      'data-type': 'string',
      content: metadata.frontMatter.level
    });
  }

  if (metadata.frontMatter.largeImage) {
    metaItems.push(
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: metadata.frontMatter.imageUrl }
    );
  } else {
    metaItems.push(
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:image', content: metadata.frontMatter.imageUrlThumbnail }
    );
  }

  // Hide from search engines
  if (metadata.frontMatter.unlisted) {
    metaItems.push({ name: 'robots', content: 'noindex, nofollow' });
  }

  return <Helmet title={suffixedTitle} meta={metaItems} />;
};

MetaTagger.propTypes = {
  metadata: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    source: PropTypes.string,
    slug: PropTypes.string,
    frontMatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      contentType: PropTypes.string,
      layout: PropTypes.string,
      products: PropTypes.array,
      imageUrl: PropTypes.string,
      imageUrlThumbnail: PropTypes.string,
      imageAlt: PropTypes.string,
      largeImage: PropTypes.bool,
      language: PropTypes.array,
      level: PropTypes.number
    }),
    unlisted: PropTypes.bool,
    version: PropTypes.string
  }),
  site: PropTypes.string.isRequired,
  subsite: PropTypes.string
};

MetaTagger.defaultProps = {
  imageUrl: DEFAULT_SOCIAL_IMAGE_URL,
  imageUrlThumbnail: DEFAULT_SOCIAL_IMAGE_THUMBNAIL_URL,
  imageAlt: 'Mapbox',
  largeImage: true
};

export default MetaTagger;
