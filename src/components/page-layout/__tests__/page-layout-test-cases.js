import React from 'react';
import PageLayout from '../page-layout';
import NavigationAccordion from '../../navigation-accordion/navigation-accordion';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  component: PageLayout,
  props: {
    sidebarContent: <div>Some content</div>,
    sidebarTitle: 'Some title',
    sidebarContentStickyTop: 0,
    sidebarContentStickyTopNarrow: 0,
    children: <div>Doc content</div>
  }
};

testCases.smallSidebarCol = {
  description: 'Custom sidebar column size',
  component: PageLayout,
  props: {
    sidebarContent: <div>Some content</div>,
    sidebarTitle: 'Some title',
    sidebarContentStickyTop: 0,
    sidebarContentStickyTopNarrow: 0,
    sideBarColSize: 3,
    children: <div>Doc content</div>
  }
};

testCases.tooSmallSidebarCol = {
  description:
    'Custom sidebar column size, too small - default to original size',
  component: PageLayout,
  props: {
    sidebarContent: <div>Some content</div>,
    sidebarTitle: 'Some title',
    sidebarContentStickyTop: 0,
    sidebarContentStickyTopNarrow: 0,
    sideBarColSize: 2,
    children: <div>Doc content</div>
  }
};

testCases.tooLargeSidebarCol = {
  description:
    'Custom sidebar column size, too large - default to original size',
  component: PageLayout,
  props: {
    sidebarContent: <div>Some content</div>,
    sidebarTitle: 'Some title',
    sidebarContentStickyTop: 0,
    sidebarContentStickyTopNarrow: 0,
    sideBarColSize: 7,
    children: <div>Doc content</div>
  }
};

testCases.commonUseCase = {
  description: 'Common use case',
  component: PageLayout,
  props: {
    sidebarTitle: <div className="ml36">Section title</div>,
    sidebarContent: (
      <NavigationAccordion
        currentPath="page-one"
        contents={{
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

testCases.manyItems = {
  description: 'Many first level items',
  component: PageLayout,
  props: {
    sidebarTitle: <div className="ml36">Section title</div>,
    sidebarContent: (
      <NavigationAccordion
        currentPath="page-one"
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
