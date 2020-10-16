import React from 'react';
import PropTypes from 'prop-types';
import Gumshoe from 'gumshoejs';
import Icon from '@mapbox/mr-ui/icon';
import { AsideHeading, buildSections } from './helpers';
import * as Sentry from '@sentry/browser';

export default class OnThisPage extends React.PureComponent {
  componentDidMount() {
    try {
      new Gumshoe('#aside-nav a', {
        navClass: 'active',
        events: true
      });
    } catch (error) {
      Sentry.captureException(error);
    }

    document.addEventListener(
      'gumshoeActivate',
      (event) => {
        // get id (if element is h2) or value of `data-heading-section` (if element is h3)
        // then adds class to the h2 element which will display the h3 subitems
        const id = event.target.id || event.target.dataset.headingSection;
        document.getElementById(id).classList.add('aside-active');
      },
      false
    );

    document.addEventListener(
      'gumshoeDeactivate',
      (event) => {
        const id = event.target.id || event.target.dataset.headingSection;
        document.getElementById(id).classList.remove('aside-active');
      },
      false
    );
  }

  componentWillUnmount() {
    document.removeEventListener('gumshoeActivate');
    document.removeEventListener('gumshoeDeactivate');
  }

  render() {
    const { headings } = this.props;
    if (!headings) return <div />;
    const sections = buildSections(headings);

    const Link = ({ href, children }) => {
      return (
        <a href={`#${href}`} className="link link--gray">
          {children}
        </a>
      );
    };

    // creates an id for h2 headings
    // used by h3 headings as data-heading-section value
    const createId = (slug) => `on-this-page-${slug}`;

    return (
      <div className="dr-ui--page-layout-aside mb36-mxl mb18">
        <AsideHeading>On this page</AsideHeading>
        <ul id="aside-nav" className="unprose">
          {sections.map((heading) => (
            <li
              id={createId(heading.slug)}
              className="mb6-mxl mb3"
              style={{ wordBreak: 'break-word' }}
              key={heading.slug}
            >
              <Link href={heading.slug}>{heading.text}</Link>
              {heading.subItems && heading.subItems.length > 0 && (
                <ul className="aside-h3 my6 none">
                  {heading.subItems.map((subHeading) => {
                    return (
                      <li
                        data-heading-section={createId(heading.slug)}
                        key={subHeading.slug}
                        className="mb6-mxl mb3 pl12 relative"
                        style={{ wordBreak: 'break-word' }}
                      >
                        {subHeading.icon && (
                          <div
                            className="absolute color-gray"
                            style={{ top: '4px', left: '-1px' }}
                          >
                            <Icon size={12} name={subHeading.icon} />
                          </div>
                        )}
                        <Link href={subHeading.slug}>{subHeading.text}</Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

OnThisPage.propTypes = {
  /** Array of headings */
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      level: PropTypes.number,
      icon: PropTypes.string
    })
  )
};
