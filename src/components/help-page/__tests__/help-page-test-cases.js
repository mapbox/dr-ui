import React from 'react';
import HelpPage from '../help-page';
import CardContainer from '../../card-container/card-container';
import Card from '../../card/card';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

testCases.noThumbs = {
  component: HelpPage,
  description: 'Cards with no images and full-width',
  props: {
    frontMatter: {
      title: 'Title',
      description: 'Description.'
    },
    cardContainers: [
      <CardContainer
        title="Container title one"
        path="#container-title-one"
        fullWidthCards={true}
        cards={[
          <Card
            key="0"
            title="Example one"
            path="path"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />,
          <Card
            key="1"
            title="Example two"
            path="path"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        ]}
      />,
      <CardContainer
        title="Container title two"
        path="#container-title-two"
        fullWidthCards={true}
        cards={[
          <Card
            key="0"
            title="Example one"
            path="path"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />,
          <Card
            key="1"
            title="Example two"
            path="path"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />,
          <Card
            key="2"
            title="Example two"
            path="path"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        ]}
      />
    ]
  }
};

export { testCases };
