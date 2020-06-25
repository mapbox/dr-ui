import React from 'react';
import PageLayout from '../page-layout';
import NavigationAccordion from '../../navigation-accordion/navigation-accordion';
import Basic from '../examples/basic';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
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

testCases.common = {
  description: 'Common use case',
  component: PageLayout,
  props: {
    sidebarTitle: 'Section title',
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

testCases.many = {
  description: 'Many first level items',
  component: PageLayout,
  props: {
    sidebarTitle: 'Section title',
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

testCases.code = {
  description: 'Code highlighting test',
  component: PageLayout,
  props: {
    sidebarContent: <div>Some content</div>,
    sidebarTitle: 'Some title',
    sidebarContentStickyTop: 0,
    sidebarContentStickyTopNarrow: 0,
    children: (
      <div className="prose">
        <h2>Has scrollbar</h2>
        <pre className=" language-curl">
          <code className=" language-curl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </code>
        </pre>
        <h2>No scrollbar</h2>
        <pre>
          <code>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </code>
        </pre>
      </div>
    )
  }
};

const BadFunction = () => {};

testCases.oops = {
  description: 'Trigger error boundary in content',
  component: PageLayout,
  props: {
    sidebarContent: <div>Some content</div>,
    sidebarTitle: 'Some title',
    sidebarContentStickyTop: 0,
    sidebarContentStickyTopNarrow: 0,
    children: (
      <div>
        <BadFunction /> Doc content
      </div>
    )
  }
};

export { testCases };
