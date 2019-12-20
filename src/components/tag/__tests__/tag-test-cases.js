import Tag from '../tag';

const testCases = {};
const noRenderCases = {};

testCases.beta = {
  component: Tag,
  description: 'Beta tag',
  props: {
    theme: 'beta'
  }
};

testCases.fundamentals = {
  component: Tag,
  description: 'Fundamentals tag',
  props: {
    theme: 'fundamentals'
  }
};

testCases.legacy = {
  component: Tag,
  description: 'Legacy tag',
  props: {
    theme: 'legacy'
  }
};

testCases.new = {
  component: Tag,
  description: 'New tag',
  props: {
    theme: 'new'
  }
};

testCases.custom = {
  component: Tag,
  description: 'Custom tag',
  props: {
    theme: 'custom',
    customLabel: 'Limited access',
    customTooltipText: 'Contact us for access to this feature.',
    customStyles: {
      background: '#FEDADA',
      color: '#DA2E30',
      borderColor: '#FD8383'
    }
  }
};

export { testCases, noRenderCases };
