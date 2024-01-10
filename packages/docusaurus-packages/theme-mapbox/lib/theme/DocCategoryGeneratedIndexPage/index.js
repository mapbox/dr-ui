/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useEffect } from 'react';
import {
  PageMetadata,
  useCurrentSidebarCategory
} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocCardList from '@theme/DocCardList';
//import DocPaginator from '@theme/DocPaginator';
import buildFilters from '../DocCardList/Filters/Utils/buildFilters';
import {
  getQueryParams,
  setQueryString,
  filterPages
} from '../DocCardList/Filters/Utils/utils';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import Heading from '@theme/Heading';
import { SignupBanner, DiscordCTA } from '@theme/CTA';

function DocCategoryGeneratedIndexPageMetadata({ categoryGeneratedIndex }) {
  return (
    <PageMetadata
      title={categoryGeneratedIndex.title}
      description={categoryGeneratedIndex.description}
      keywords={categoryGeneratedIndex.keywords}
      // TODO `require` this?
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  );
}
function DocCategoryGeneratedIndexPageContent({ categoryGeneratedIndex }) {
  const [filters, setFilters] = useState({
    topic: undefined,
    language: undefined,
    level: undefined,
    videos: false,
    product: undefined,
    search: undefined
  });

  const [allPages, setAllPages] = useState();
  const [showPages, setShowPages] = useState();
  const [filtersToRender, setFiltersToRender] = useState();

  const handleInput = (value, id) => {
    const obj = {};
    obj[id] = value;
    let query = obj;
    setQueryString(id, value);
    const newFilters = { ...filters, ...query };
    setFilters(newFilters);
  };

  // reset filters and remove query string parameters
  const handleReset = () => {
    setFilters({
      topic: undefined,
      language: undefined,
      level: undefined,
      videos: false,
      product: undefined,
      search: undefined
    });
    // remove all query params
    history.pushState(null, '', window.location.pathname);
  };

  const category = useCurrentSidebarCategory();
  const overrideFilters = category.customProps.showFilters;

  useEffect(() => {
    const filtersFromContent = buildFilters(category.items);
    setFiltersToRender(filtersFromContent);
    setAllPages(filtersFromContent.pages);
    setShowPages(filtersFromContent.pages);
    // if url query param is set then update the state
    getQueryParams(filtersFromContent, setFilters);
  }, []);

  useEffect(() => {
    if (allPages !== undefined) {
      setShowPages(filterPages(allPages, filters));
    }
  }, [filters]);

  return (
    <div id="docs-content" className="flex-child-grow">
      <DocVersionBanner />
      <DocBreadcrumbs />
      <DocVersionBadge />
      <header className="col col--auto prose">
        <Heading as="h1" className="txt-fancy">
          {categoryGeneratedIndex.title}
        </Heading>
      </header>
      <div className="grid grid--gut60">
        <div className="col col--auto w-2/3-mxl w-full pb18 prose">
          <article className="margin-top--lg">
            <DocCardList
              items={showPages}
              activeFilters={filters}
              filtersToRender={filtersToRender}
              overrideFilters={overrideFilters}
              filterInput={handleInput}
              handleReset={handleReset}
            />
          </article>
        </div>

        <div className="dr-ui--page-layout-aside col w-full w-1/3-mxl">
          <div
            className="overflow-auto-mxl scroll-styled sticky-mxl color-text pb18"
            style={{ top: '88px' }}
          >
            <div className="mb18">
              <SignupBanner />
            </div>

            <div className="my18 color-text none block-mxl mb18">
              <DiscordCTA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function DocCategoryGeneratedIndexPage(props) {
  return (
    <>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </>
  );
}
