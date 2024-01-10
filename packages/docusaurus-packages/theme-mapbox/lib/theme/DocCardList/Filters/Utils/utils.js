// make sure query value is valid before setting the state
export const setStateIfValid = (value, options, id, setFilters) => {
  // if query string value is valid, set the state
  if (options.indexOf(value) > -1) {
    const obj = {};
    obj[id] = value;
    setFilters(obj);
  } else if (options) {
    // otherwise remove the query string
    setQueryString(id, undefined);
  }
};

export function sortAlpha(arr) {
  return arr.sort((a, b) =>
    a.label.localeCompare(b.title, { sensitivity: 'base' })
  );
}

export function getQueryParams(filters, setFilters) {
  if ('URLSearchParams' in window) {
    const query = new URLSearchParams(window.location.search);
    if (query.get('topic')) {
      setStateIfValid(query.get('topic'), filters.topics, 'topic', setFilters);
    }
    if (query.get('product')) {
      setStateIfValid(
        query.get('product'),
        filters.products,
        'product',
        setFilters
      );
    }
    if (query.get('language')) {
      setStateIfValid(
        query.get('language'),
        filters.languages,
        'language',
        setFilters
      );
    }
    if (query.get('level')) {
      setStateIfValid(
        parseInt(query.get('level')),
        filters.levels,
        'level',
        setFilters
      );
    }
    if (query.get('search')) {
      setFilters({ search: `${query.get('search')}` });
    }
    if (query.get('videos')) {
      setStateIfValid(
        query.get('videos') === 'true',
        [true],
        'videos',
        setFilters
      );
    }
  }
}

// filter available pages based on active filters
export const filterPages = (pages, query) => {
  const { language, topic, level, videos, product, search } = query;
  let filteredPages = pages;

  if (topic) {
    filteredPages = filteredPages.filter(
      (f) => f.customProps.topics.indexOf(topic) > -1
    );
  }

  if (product) {
    filteredPages = filteredPages.filter(
      (f) => f.customProps.products.indexOf(product) > -1
    );
  }

  if (language) {
    filteredPages = filteredPages.filter(
      (f) => f.customProps.language.indexOf(language) > -1
    );
  }

  if (level) {
    filteredPages = filteredPages.filter((f) => f.level === parseInt(level));
  }

  if (videos) {
    filteredPages = filteredPages.filter((f) => f.video);
  }

  if (search) {
    const trimmedSearch = search.toLowerCase().trim();
    filteredPages = filteredPages.filter(
      (f) =>
        (f.label && f.label.toLowerCase().indexOf(trimmedSearch) > -1) ||
        (f.customProps.description &&
          f.customProps.description.toLowerCase().indexOf(trimmedSearch) > -1)
    );
  }

  return filteredPages;
};

// set the query string or delete it if value is undefined
export const setQueryString = (label, value) => {
  // check if browser supports URLSearchParams API
  if ('URLSearchParams' in window) {
    // get the current query params
    const searchParams = new URLSearchParams(window.location.search);
    // if value exists, set new query param
    if (value) searchParams.set(label, value);
    // otherwise remove the query param
    else searchParams.delete(label);
    // update the url with the changed query params without reloading the page
    history.pushState(
      null,
      '',
      window.location.pathname + '?' + searchParams.toString()
    );
  }
};
