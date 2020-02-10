import React from 'react';
import NavigationAccordion from '../navigation-accordion';
import PageLayout from '../../page-layout/page-layout';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  component: NavigationAccordion,
  props: {
    currentPath: 'page-one',
    contents: {
      firstLevelItems: [
        {
          title: 'Title one',
          path: 'page-one'
        },
        {
          title: 'Title two',
          path: 'page-two'
        }
      ],
      secondLevelItems: [
        {
          title: 'Heading one',
          path: 'heading-one'
        },
        {
          title: 'Heading two',
          path: 'heading-two'
        }
      ]
    },
    onDropdownChange: () => {}
  }
};

testCases.noSecondLevelItems = {
  description: 'No second level items',
  component: NavigationAccordion,
  props: {
    currentPath: 'page-one',
    contents: {
      firstLevelItems: [
        {
          title: 'Title one',
          path: 'page-one'
        },
        {
          title: 'Title two',
          path: 'page-two'
        }
      ]
    },
    onDropdownChange: () => {}
  }
};

testCases.withThirdLevelItems = {
  description: 'Shows third level items',
  component: NavigationAccordion,
  props: {
    currentPath: 'page-one',
    contents: {
      firstLevelItems: [
        {
          title: 'Title one',
          path: 'page-one'
        },
        {
          title: 'Title two',
          path: 'page-two'
        }
      ],
      secondLevelItems: [
        {
          title: 'Heading one',
          path: 'heading-one',
          thirdLevelItems: [
            {
              title: 'Subheading one',
              path: ''
            },
            {
              title: 'Subheading two',
              path: 'subheading-two'
            }
          ]
        },
        {
          title: 'Heading two',
          path: 'heading-two'
        }
      ]
    },
    onDropdownChange: () => {}
  }
};

testCases.withTags = {
  description: 'Titles with tags',
  component: NavigationAccordion,
  props: {
    currentPath: 'page-one',
    contents: {
      firstLevelItems: [
        {
          title: 'Title one',
          path: 'page-one'
        },
        {
          title: 'Title two',
          tag: 'beta',
          path: 'page-two'
        }
      ],
      secondLevelItems: [
        {
          title: 'Heading one',
          path: 'heading-one',
          thirdLevelItems: [
            {
              title: 'Subheading one',
              tag: 'legacy',
              path: ''
            },
            {
              title: 'Subheading two',
              path: 'subheading-two'
            }
          ]
        },
        {
          title: 'Heading two',
          tag: 'custom',
          customTagProps: {
            customLabel: 'Custom',
            customTooltipText: 'This is a custom tag.',
            customStyles: {
              background: '#FEDADA',
              color: '#bb2224',
              borderColor: '#FD8383'
            }
          },
          path: 'heading-two'
        }
      ]
    },
    onDropdownChange: () => {}
  }
};

testCases.many = {
  description: 'Many first level items',
  component: PageLayout,
  props: {
    sidebarTitle: <div className="ml36">Section title</div>,
    sidebarContent: (
      <NavigationAccordion
        currentPath="page-eight"
        contents={{
          firstLevelItems: [
            {
              title: 'Title one',
              path: 'page-one'
            },
            {
              title: 'Title two',
              path: 'page-two'
            },
            {
              title: 'Title three',
              path: 'page-three'
            },
            {
              title: 'Title four',
              path: 'page-four'
            },
            {
              title: 'Title five',
              path: 'page-five'
            },
            {
              title: 'Title six',
              path: 'page-six'
            },
            {
              title: 'Title seven',
              path: 'page-seven'
            },
            {
              title: 'Title eight',
              path: 'page-eight'
            },
            {
              title: 'Title nine',
              path: 'page-nine'
            },
            {
              title: 'Title ten',
              path: 'page-ten'
            }
          ],
          secondLevelItems: [
            {
              title: 'Heading one',
              path: 'heading-one'
            },
            {
              title: 'Heading two',
              path: 'heading-two'
            }
          ]
        }}
        onDropdownChange={() => {}}
      />
    ),
    children: (
      <div>
        <p className="mb24">
          Vestibulum id ligula porta felis euismod semper. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
          ligula porta felis euismod semper.
        </p>
        <p className="mb24">
          Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget
          risus varius blandit sit amet non magna. Vestibulum id ligula porta
          felis euismod semper. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas
          eget quam. Donec id elit non mi porta gravida at eget metus. Duis
          mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit.
        </p>
        <p className="mb24">
          Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas
          eget quam. Curabitur blandit tempus porttitor. Duis mollis, est non
          commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
          elit. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent
          commodo cursus magna, vel scelerisque nisl consectetur et. Duis
          mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit.
        </p>
        <p className="mb24">
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec
          sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Integer posuere erat a ante venenatis dapibus
          posuere velit aliquet.
        </p>
      </div>
    ),
    sidebarContentStickyTop: 60,
    sidebarContentStickyTopNarrow: 0,
    sidebarStackedOnNarrowScreens: true
  }
};

export { testCases };
