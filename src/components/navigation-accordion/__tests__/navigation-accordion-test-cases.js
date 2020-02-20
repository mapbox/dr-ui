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

testCases.withThirdLevelItemsWithIcons = {
  description: 'Shows third level items with icons',
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
              path: '',
              icon: 'paint'
            },
            {
              title: 'Subheading two',
              path: 'subheading-two',
              icon: 'paint'
            },
            {
              title: 'Subheading three is long so we should wrap it nicely',
              path: 'subheading-three',
              icon: 'star'
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
  element: (
    <div className="limiter">
      <PageLayout
        sidebarContentStickyTop={60}
        sidebarContentStickyTopNarrow={0}
        sidebarStackedOnNarrowScreens={true}
        sidebarTitle={<div className="ml36">Section title</div>}
        sidebarContent={
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
                },
                {
                  title: 'Heading three',
                  path: 'heading-three'
                },
                {
                  title: 'Heading four',
                  path: 'heading-four'
                },
                {
                  title: 'Heading five',
                  path: 'heading-five'
                },
                {
                  title: 'Heading six',
                  path: 'heading-six'
                },
                {
                  title: 'Heading seven',
                  path: 'heading-seven'
                },
                {
                  title: 'Heading eight',
                  path: 'heading-eight',
                  thirdLevelItems: [
                    {
                      title: 'Heading eight a',
                      path: 'heading-eight-a'
                    },
                    {
                      title: 'Heading eight b',
                      path: 'heading-eight-b'
                    }
                  ]
                },
                {
                  title: 'Heading nine',
                  path: 'heading-nine'
                },
                {
                  title: 'Heading ten',
                  path: 'heading-ten'
                }
              ]
            }}
            onDropdownChange={() => {}}
          />
        }
      >
        <div className="prose">
          <div className="section section-h2">
            <h2 id="heading-one">Heading one</h2>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum id ligula porta felis euismod semper.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vestibulum id ligula
              porta felis euismod semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
          </div>
          <div className="section section-h2">
            <h2 id="heading-two">Heading two</h2>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum id ligula porta felis euismod semper.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vestibulum id ligula
              porta felis euismod semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
          </div>
          <div className="section section-h2">
            <h2 id="heading-three">Heading three</h2>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum id ligula porta felis euismod semper.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vestibulum id ligula
              porta felis euismod semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
          </div>
          <div className="section section-h2">
            <h2 id="heading-four">Heading four</h2>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum id ligula porta felis euismod semper.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vestibulum id ligula
              porta felis euismod semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
          </div>
          <div className="section section-h2">
            <h2 id="heading-five">Heading five</h2>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum id ligula porta felis euismod semper.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vestibulum id ligula
              porta felis euismod semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
          </div>
          <div className="section section-h2">
            <h2 id="heading-six">Heading six</h2>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum id ligula porta felis euismod semper.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vestibulum id ligula
              porta felis euismod semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
          </div>
          <div className="section section-h2">
            <h2 id="heading-seven">Heading seven</h2>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum id ligula porta felis euismod semper.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vestibulum id ligula
              porta felis euismod semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
          </div>
          <div className="section section-h2">
            <h2 id="heading-eight">Heading eight</h2>
            <div className="body h3-section-list">
              <div className="section section-h3">
                <div className="body">
                  <p>
                    Vestibulum id ligula porta felis euismod semper. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Vestibulum id ligula porta felis euismod
                    semper.
                  </p>
                </div>
              </div>

              <div className="section section-h3">
                <h3 id="heading-eight-a">Heading eight a</h3>
                <div className="body">
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Maecenas sed
                    diam eget risus varius blandit sit amet non magna.
                    Vestibulum id ligula porta felis euismod semper. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Donec id
                    elit non mi porta gravida at eget metus. Duis mollis, est
                    non commodo luctus, nisi erat porttitor ligula, eget lacinia
                    odio sem nec elit.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Maecenas sed
                    diam eget risus varius blandit sit amet non magna.
                    Vestibulum id ligula porta felis euismod semper. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Donec id
                    elit non mi porta gravida at eget metus. Duis mollis, est
                    non commodo luctus, nisi erat porttitor ligula, eget lacinia
                    odio sem nec elit.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Maecenas sed
                    diam eget risus varius blandit sit amet non magna.
                    Vestibulum id ligula porta felis euismod semper. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Donec id
                    elit non mi porta gravida at eget metus. Duis mollis, est
                    non commodo luctus, nisi erat porttitor ligula, eget lacinia
                    odio sem nec elit.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Maecenas sed
                    diam eget risus varius blandit sit amet non magna.
                    Vestibulum id ligula porta felis euismod semper. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Donec id
                    elit non mi porta gravida at eget metus. Duis mollis, est
                    non commodo luctus, nisi erat porttitor ligula, eget lacinia
                    odio sem nec elit.
                  </p>
                </div>
              </div>
              <div className="section section-h3">
                <h3 id="heading-eight-b">Heading eight b</h3>
                <div className="body">
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Maecenas sed
                    diam eget risus varius blandit sit amet non magna.
                    Vestibulum id ligula porta felis euismod semper. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Donec id
                    elit non mi porta gravida at eget metus. Duis mollis, est
                    non commodo luctus, nisi erat porttitor ligula, eget lacinia
                    odio sem nec elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-h2">
            <h2 id="heading-nine">Heading nine</h2>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum id ligula porta felis euismod semper.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vestibulum id ligula
              porta felis euismod semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vestibulum id ligula
              porta felis euismod semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
          </div>
          <div className="section section-h2">
            <h2 id="heading-ten">Heading ten</h2>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum id ligula porta felis euismod semper.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vestibulum id ligula
              porta felis euismod semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum id ligula porta felis euismod semper.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vestibulum id ligula
              porta felis euismod semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
            <p>
              Vestibulum id ligula porta felis euismod semper. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum id ligula porta felis euismod semper.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vestibulum id ligula
              porta felis euismod semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis
              in, egestas eget quam. Donec id elit non mi porta gravida at eget
              metus. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
          </div>
        </div>
      </PageLayout>
    </div>
  )
};

export { testCases };
