import React from 'react';
import {
  GettingStartedIcon,
  TutorialsIcon,
  HowToVideosIcon,
  FaqIcon,
  GlossaryIcon,
  TroubleshootingIcon
} from './icons';

// complementary data (icon, color, link) for each of our help categories
const helpCardData = [
  {
    id: 'getting-started',
    icon: <GettingStartedIcon />,
    highlightColor: 'blue-light',
    link: '/help/getting-started'
  },
  {
    id: 'dive-deeper',
    icon: <DiveDeeperIcon />,
    highlightColor: 'yellow-light',
    link: '/help/dive-deeper'
  },
  {
    id: 'tutorials',
    icon: <TutorialsIcon />,
    highlightColor: 'green-light',
    link: '/help/tutorials'
  },
  {
    id: 'how-to-videos',
    icon: <HowToVideosIcon />,
    highlightColor: 'purple-light',
    link: '/help/how-to-videos'
  },
  {
    id: 'faq',
    icon: <FaqIcon />,
    highlightColor: 'turquoise',
    link: '/help/faq'
  },
  {
    id: 'glossary',
    icon: <GlossaryIcon />,
    highlightColor: 'orange-light',
    link: '/help/glossary'
  },
  {
    id: 'troubleshooting',
    icon: <TroubleshootingIcon />,
    highlightColor: 'red-light',
    link: '/help/troubleshooting'
  }
];

export default helpCardData;
