import FilterSection from './FilterSection';

export default function FilterUI({
  filtersToRender,
  activeFilters,
  overrideFilters,
  handleInput
}) {
  let availableFilters = {};
  const { topic, language, level, videos, product, search } =
    activeFilters || {};

  if (filtersToRender !== undefined) {
    const filterOverridesExist = overrideFilters;
    // return true if array has more than one item
    const hasMoreThanOne = (arr, field) => arr[field] && arr[field].length > 1;

    // return true if filter appears in overrideFilters array
    const inOverrideFilters = (field, filterOverridesExist) => {
      if (filterOverridesExist && overrideFilters.indexOf(field) > -1) {
        return true;
      } else if (
        filterOverridesExist &&
        overrideFilters.indexOf(field) === -1
      ) {
        return false;
      } else return true;
    };

    // return true if filter can be displayed
    const filterisAvailable = (filters, field) =>
      hasMoreThanOne(filters, field) &&
      inOverrideFilters(field, filterOverridesExist);

    // check each filter to make sure it has more than one option
    // and that it appears in "showFilters"
    availableFilters = {
      products: filterisAvailable(filtersToRender, 'products'),
      topics: filterisAvailable(filtersToRender, 'topics'),
      languages: filterisAvailable(filtersToRender, 'languages'),
      levels: filterisAvailable(filtersToRender, 'levels'),
      videos: filtersToRender.videos && inOverrideFilters('videos'),
      search: inOverrideFilters('search')
    };

    // remove any item from overrideFilters that is not true in "availableFilters"
    if (overrideFilters) {
      overrideFilters = overrideFilters.filter(
        (filter) => availableFilters[filter]
      );
    }

    // if overrideFilters length is 0, do not show filters
    if (overrideFilters) {
      if (overrideFilters.length === 0) return null;
    }
  }

  return (
    filtersToRender && (
      <section className="mb18 mb0-mxl">
        <h2 className="unprose txt-m txt-bold mb6">Filters</h2>
        <div className="flex mb30 pb12 border-b border--gray-lighter">
          {availableFilters.search && (
            <FilterSection
              title="Search"
              id="search"
              activeItem={search}
              handleInput={handleInput}
              isText={true}
              placeholder="Search title and description&hellip;"
            />
          )}
          {availableFilters.products && (
            <FilterSection
              title="Products"
              data={filtersToRender.products}
              id="product"
              activeItem={product}
              handleInput={handleInput}
            />
          )}
          {availableFilters.topics && (
            <FilterSection
              title="Topics"
              data={filtersToRender.topics}
              id="topic"
              activeItem={topic}
              handleInput={handleInput}
            />
          )}
          {availableFilters.languages && (
            <FilterSection
              title="Languages"
              data={filtersToRender.languages}
              id="language"
              activeItem={language}
              handleInput={handleInput}
            />
          )}
          {availableFilters.levels && (
            <FilterSection
              title="Levels"
              data={filtersToRender.levels}
              id="level"
              activeItem={level}
              handleInput={handleInput}
            />
          )}
          {availableFilters.videos && (
            <FilterSection
              title="Videos only"
              id="videos"
              activeItem={videos}
              isSwitch={true}
              handleInput={handleInput}
            />
          )}
        </div>
      </section>
    )
  );
}
