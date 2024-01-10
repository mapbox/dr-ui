/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import {
  useCurrentSidebarCategory,
  filterDocCardListItems
} from '@docusaurus/theme-common';
import FilterUI from './Filters/FilterUI';
import DocCard from '@theme/DocCard';

function DocCardListForCurrentSidebarCategory({ className }) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}

export default function DocCardList(props) {
  const {
    items,
    filtersToRender,
    activeFilters,
    overrideFilters,
    filterInput,
    handleReset
  } = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const { topic, language, level, videos, product, search } =
    activeFilters || {};
  let keyValueStrings = {};
  let resultFilters = '';
  function capitalizeFLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  const showResultIndicator =
    topic || language || level || videos || product || search;
  const resultsLength = items.length;
  const filteredItems = filterDocCardListItems(items);

  return (
    <section className="dr-ui--card-container">
      {showResultIndicator && (
        <div className="mb18">
          <div className="inline-block mr12 color-gray">
            {resultsLength === 0
              ? 'No results found.'
              : `Found ${resultsLength} result${
                  resultsLength === 1 ? '' : 's'
                }`}
          </div>
          <button
            onClick={handleReset}
            className="btn btn--s btn--gray btn--stroke round"
          >
            Reset filters
          </button>
        </div>
      )}
      <FilterUI
        filtersToRender={filtersToRender}
        activeFilters={activeFilters}
        overrideFilters={overrideFilters}
        handleInput={filterInput}
      />
      <div className="grid grid--gut36">
        {filteredItems.map((item, index) => (
          <article key={index} className="mb18 col w-full w-1/2-ml">
            <DocCard item={item} />
          </article>
        ))}
      </div>
    </section>
  );
}
