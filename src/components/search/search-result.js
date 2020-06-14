import React from 'react';
import PropTypes from 'prop-types';
import LevelIndicator from '../level-indicator/level-indicator';
import ReactHtmlParser from 'react-html-parser';
import Icon from '@mapbox/mr-ui/icon';
import { titleGenerator } from './title-generator';

class SearchResult extends React.Component {
  returnRaw = (item) => {
    if (item && item.raw && typeof item.raw !== 'string')
      return item.raw.join(', ');
    else return item && item.raw ? item.raw : '';
  };

  render() {
    const { props } = this;
    const getItemProps = props.downshiftProps.getItemProps;
    const highlighted = props.downshiftProps.highlightedIndex === props.index;
    const site = this.returnRaw(props.result.site);
    const subsite = this.returnRaw(props.result.subsite);
    const type = this.returnRaw(props.result.contentType);
    const level = this.returnRaw(props.result.level);
    const language = this.returnRaw(props.result.codeLanguage);
    const title = this.returnRaw(props.result.title);
    const url = this.returnRaw(props.result.url);
    const excerpt = props.result.excerpt
      ? props.result.excerpt.snippet || props.result.excerpt.raw
      : '';
    const resultTitle = titleGenerator(title, subsite, site).reverse();
    return (
      <div
        className="py12 px18"
        {...getItemProps({
          key: props.result.id.raw,
          item: props.result,
          className: `${
            highlighted && 'bg-gray-faint'
          } py12 px18 link--gray cursor-pointer`
        })}
      >
        {title && url && (
          <div className="block link--gray">
            <div className="mb3">
              <span className="txt-bold">
                {resultTitle.map((t, index) => {
                  return (
                    <span key={`${props.result.id.raw}-${t}`}>
                      {t}
                      {resultTitle.length !== index + 1 && (
                        <Icon name="chevron-right" inline={true} />
                      )}
                    </span>
                  );
                })}
              </span>
            </div>

            <div className="mb6">{ReactHtmlParser(excerpt)}</div>

            <div className="txt-s">
              {type ? (
                <div className="inline-block">
                  <span className="">
                    <Icon size={12} name="book" inline={true} />
                  </span>
                  <span className="ml3 txt-capitalize">{type}</span>
                </div>
              ) : (
                ''
              )}

              {language ? (
                <div className="ml12 inline-block">
                  <span className="">
                    <Icon size={12} name="code" inline={true} />
                  </span>
                  <span className="ml6">{language}</span>
                </div>
              ) : (
                ''
              )}

              {level ? (
                <div className="ml12 inline-block">
                  <LevelIndicator level={parseInt(level)} />
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

SearchResult.propTypes = {
  result: PropTypes.object,
  index: PropTypes.number,
  downshiftProps: PropTypes.object
};

export default SearchResult;
