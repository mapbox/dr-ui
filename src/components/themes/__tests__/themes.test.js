import renderer from 'react-test-renderer';
import ColorContrastChecker from 'color-contrast-checker';
import { testCases } from './themes-test-cases';
import themes from '../themes';

const ccc = new ColorContrastChecker();

describe('themes', () => {
  Object.keys(themes).forEach((theme) => {
    describe(`theme: ${theme}`, () => {
      test('has label', () => {
        expect(themes[theme].label).toBeDefined();
        expect(
          themes[theme].label[0].toUpperCase() === themes[theme].label[0]
        ).toBeTruthy();
      });

      if (themes[theme].tooltipText) {
        test('tooltipText ends with period', () => {
          expect(themes[theme].tooltipText.endsWith('.')).toBeTruthy();
        });
      }

      test('has styles', () => {
        expect(themes[theme].styles).toBeDefined();
        expect(typeof themes[theme].styles).toBe('object');
        expect(themes[theme].styles.background).toBeDefined();
        expect(themes[theme].styles.color).toBeDefined();
      });

      test(`styles color and background contrast is WCAG AA compliant`, () => {
        expect(
          ccc.isLevelAA(
            themes[theme].styles.color,
            themes[theme].styles.background
          )
        ).toBeTruthy();
      });
    });
  });

  describe(testCases.default.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.default;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.error.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.error;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.download.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.download;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.beta.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.beta;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.legacy.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.legacy;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.fundamentals.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.fundamentals;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });

  describe(testCases.custom.description, () => {
    let testCase;
    let wrapper;
    let tree;

    beforeEach(() => {
      testCase = testCases.custom;
      wrapper = renderer.create(testCase.element);
      tree = wrapper.toJSON();
    });

    test('renders as expected', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
