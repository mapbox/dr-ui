import React from 'react';
import IndexCard from '../index-card';
import { TutorialsIcon } from '../../../helpers/help-card-data';

import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'Basic use as a product card with links',
  element: <Basic />
};

testCases.helpSection = {
  description: 'Use as a help section card',
  element: (
    <IndexCard
      title="Tutorials"
      text="Step by Step guides to help you get started or level up."
      highlightColor="green-light"
      icon={<TutorialsIcon />}
      link="https://docs.mapbox.com/help/tutorials"
    />
  )
};

export { testCases };
