import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import Tag from '../tag/tag';
import NavSection from './NavSection';

const NavigationAccordion = (props) => {
  const [activeToggles, setActiveToggles] = useState([]);
  const { navigation, currentPage } = props;

  // add item or remove it if it already exists
  const setToggle = (label, reset) => {
    if (reset) {
      setActiveToggles([label]);
    } else {
      const toggled = [...activeToggles];
      const labelIndex = toggled.length > 0 ? toggled.indexOf(label) : -1;
      if (labelIndex > -1) {
        // label already exists, remove it from activeToggles
        toggled.splice(labelIndex, 1);
      } else {
        // label does not exist, add it to activeToggles
        toggled.push(label);
      }
      setActiveToggles(toggled);
    }
  };

  useEffect(() => {
    // check if client body width is >= 640
    const isMM =
      typeof document !== 'undefined'
        ? document.body.clientWidth >= 640
        : false;
    // if device width is >= 640
    // determine which section is active and activate its toggle
    if (isMM && currentPage) {
      navigation.forEach((nav) => {
        const categoryPath = nav.label.replaceAll(' ', '').toLowerCase();
        const parentCat = nav.label.replaceAll(' ', '-').toLowerCase();
        if (
          currentPage.indexOf(categoryPath) > -1 ||
          currentPage.indexOf(parentCat) > -1
        ) {
          setToggle(nav.label);
        }
      });
    }
  }, []); // run on mount only

  return (
    <nav className="mx-neg12">
      <ul>
        {navigation.map((section, index) => (
          <NavSection
            key={index}
            sectionNav={section}
            currentPage={currentPage}
            activeToggles={activeToggles}
            setToggle={setToggle}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationAccordion;

NavigationAccordion.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      docId: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
          docId: PropTypes.string.isRequired,
          unlisted: PropTypes.bool
        })
      ),
      collapsed: PropTypes.bool,
      collapsible: PropTypes.bool,
      unlisted: PropTypes.bool
    })
  ),
  location: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired
};
