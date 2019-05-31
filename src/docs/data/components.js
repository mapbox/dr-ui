"use strict";
const React = require("react");
module.exports = [
  {
    name: "BackToTopButton",
    description: null,
    props: null,
    examples: []
  },
  {
    name: "BetaFlag",
    description: null,
    props: {
      tooltipText: {
        type: { name: "string" },
        required: false,
        defaultValue:
          "'This feature is in public beta and is subject to potential changes.'",
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "BookImage",
    description: null,
    props: {
      size: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "BookletImage",
    description: null,
    props: {
      size: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "Card",
    description: null,
    props: {
      title: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      path: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      description: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      thumbnail: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      level: {
        type: { name: "node" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      language: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "CardContainer",
    description: null,
    props: {
      title: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      path: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      fullWidthCards: {
        type: { name: "bool" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      cards: {
        type: { name: "arrayOf", value: { name: "node" } },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "CodeToggle",
    description: null,
    props: {
      id: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      onChange: {
        type: { name: "func" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      options: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              language: {
                name: "enum",
                value: [
                  { value: "'swift'", computed: false },
                  { value: "'objective-c'", computed: false },
                  { value: "'java'", computed: false },
                  { value: "'kotlin'", computed: false },
                  { value: "'javascript'", computed: false }
                ],
                required: true
              },
              preferredLanguage: { name: "bool", required: true }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "ContactImage",
    description: null,
    props: {
      size: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "ExamplesPage",
    description: null,
    props: {
      frontMatter: {
        type: {
          name: "shape",
          value: {
            title: { name: "string", required: true },
            description: { name: "string", required: true }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      cardContainers: {
        type: { name: "arrayOf", value: { name: "node" } },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "LevelIndicator",
    description: null,
    props: {
      level: {
        type: {
          name: "enum",
          value: [
            { value: "1", computed: false },
            { value: "2", computed: false },
            { value: "3", computed: false }
          ]
        },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "NavigationAccordion",
    description: null,
    props: {
      currentPath: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      contents: {
        type: {
          name: "shape",
          value: {
            firstLevelItems: {
              name: "arrayOf",
              value: {
                name: "shape",
                value: {
                  title: { name: "string", required: true },
                  tag: { name: "node", required: false },
                  path: { name: "string", required: true }
                }
              },
              required: true
            },
            secondLevelItems: {
              name: "arrayOf",
              value: {
                name: "shape",
                value: {
                  title: { name: "string", required: true },
                  path: { name: "string", required: true },
                  thirdLevelItems: {
                    name: "arrayOf",
                    value: {
                      name: "shape",
                      value: {
                        title: { name: "string", required: true },
                        path: { name: "string", required: true }
                      }
                    },
                    required: false
                  }
                }
              },
              required: false
            }
          }
        },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      onDropdownChange: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "NavigationDropdown",
    description: null,
    props: {
      currentPath: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      dropdownOptions: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              title: { name: "string", required: true },
              path: { name: "string", required: true }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      onChange: {
        type: { name: "func" },
        required: false,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "Note",
    description: null,
    props: {
      title: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      imageComponent: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      theme: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "OverviewHeader",
    description: null,
    props: {
      features: {
        type: { name: "arrayOf", value: { name: "string" } },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      title: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      beta: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />
      },
      image: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      version: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      changelogLink: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      installLink: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      ghLink: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      contactLink: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "PageLayout",
    description: null,
    props: {
      sidebarContent: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      sidebarTitle: {
        type: { name: "union", value: [{ name: "node" }, { name: "string" }] },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      sidebarTheme: {
        type: { name: "string" },
        required: false,
        defaultValue: "'bg-gray-faint'",
        description: <div />
      },
      sidebarContentStickyTop: {
        type: { name: "number" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      sidebarContentStickyTopNarrow: {
        type: { name: "number" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      sidebarStackedOnNarrowScreens: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />
      },
      sideBarColSize: {
        type: { name: "number" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      interactiveClass: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "ProductMenu",
    description: null,
    props: {
      productName: {
        type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      beta: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />
      },
      lightText: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />
      },
      homePage: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "Search",
    description: null,
    props: {
      placeholder: {
        type: { name: "string" },
        required: false,
        defaultValue: "'Search docs.mapbox.com'",
        description: <div />
      },
      narrow: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      background: {
        type: {
          name: "enum",
          value: [
            { value: "'light'", computed: false },
            { value: "'dark'", computed: false }
          ]
        },
        required: false,
        defaultValue: "'light'",
        description: <div />
      },
      inputId: {
        type: { name: "string" },
        required: false,
        defaultValue: "'docs-search'",
        description: <div />
      },
      disableModal: {
        type: { name: "bool" },
        required: false,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "SectionedNavigation",
    description: null,
    props: {
      sections: {
        type: { name: "arrayOf", value: { name: "object" } },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      title: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      includeCount: {
        type: { name: "bool" },
        required: false,
        defaultValue: "true",
        description: <div />
      },
      includeFilterBar: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />
      },
      hideSubItems: {
        type: { name: "bool" },
        required: false,
        defaultValue: "false",
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "ToggleableCodeBlock",
    description: null,
    props: {
      codeSnippet: {
        type: {
          name: "arrayOf",
          value: {
            name: "shape",
            value: {
              language: {
                name: "enum",
                value: [
                  { value: "'swift'", computed: false },
                  { value: "'objective-c'", computed: false },
                  { value: "'java'", computed: false },
                  { value: "'kotlin'", computed: false },
                  { value: "'javascript'", computed: false }
                ],
                required: false
              },
              rawCode: { name: "string", required: true },
              highlightedCode: { name: "string", required: true },
              preferredLanguage: { name: "bool", required: true }
            }
          }
        },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "TopbarSticker",
    description: null,
    props: {
      unStickWidth: {
        type: { name: "number" },
        required: false,
        defaultValue: undefined,
        description: <div />
      },
      children: {
        type: { name: "node" },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "TroubleshootImage",
    description: null,
    props: {
      size: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  },
  {
    name: "WarningImage",
    description: null,
    props: {
      size: {
        type: { name: "string" },
        required: true,
        defaultValue: undefined,
        description: <div />
      },
      color: {
        type: { name: "string" },
        required: false,
        defaultValue: undefined,
        description: <div />
      }
    },
    examples: []
  }
];
