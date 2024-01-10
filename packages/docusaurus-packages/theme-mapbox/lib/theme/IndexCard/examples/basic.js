/*
Basic
*/
import React from 'react';
import IndexCard from '../index-card';
import Tag from '../../tag';

const Example = () => (
  <IndexCard
    title="Mapbox GL JS"
    tag={
      <Tag
        theme="custom"
        customColor="color-blue-dark"
        customLabel="PRIVATE PREVIEW"
        customTooltipText="This feature is in private preview and is subject to changes."
        customBackground="bg-blue-faint"
        customBorder="round"
      />
    }
    text="Add custom interactive maps to web applications."
    links={[
      {
        title: 'GL JS Docs',
        tooltip: 'Mapbox GL JS',
        link: 'https://docs.mapbox.com/mapbox-gl-js/'
      },
      {
        title: 'JS Frameworks',
        tooltip: 'Mapbox GL JS',
        link: 'https://docs.mapbox.com/mapbox-gl-js/plugins/#framework-integrations'
      }
    ]}
    sectionColor="green-light"
  />
);

export default Example;
