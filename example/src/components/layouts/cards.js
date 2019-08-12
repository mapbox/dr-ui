import React from 'react';
import slugify from 'slugify';
import SectionedNavigation from '../../../../pkg/sectioned-navigation';
import PropTypes from 'prop-types';

class LayoutCards extends React.PureComponent {
  render() {
    const topics = [
      ...new Set(
        this.props.orderedPages[this.props.sectionPath].pages.reduce(
          (arr, page) => {
            if (page.topic) arr = arr.concat(page.topic);
            return arr;
          },
          []
        )
      )
    ];

    const topicObj = topics.reduce((obj, topic) => {
      obj[slugify(topic)] = this.props.orderedPages[
        this.props.sectionPath
      ].pages.reduce((arr, page) => {
        if (page.topic && page.topic.indexOf(topic) > -1)
          arr.push({
            text: page.title,
            url: page.path
          });
        return arr;
      }, []);
      return obj;
    }, {});
    return (
      <div className="ml36 mr12 none block-mm">
        <SectionedNavigation
          hideSubItems={true}
          sections={Object.keys(topicObj).map(topic => {
            return {
              title: topic,
              url: `${this.props.sectionPath}#${slugify(topic, {
                lower: true
              })}`,
              items: topicObj[topic]
            };
          })}
        />
      </div>
    );
  }
}

LayoutCards.propTypes = {
  orderedPages: PropTypes.object.isRequired,
  sectionPath: PropTypes.string.isRequired
};

export default LayoutCards;
