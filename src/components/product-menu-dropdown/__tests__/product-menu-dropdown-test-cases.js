import { ProductMenuDropdown } from '../product-menu-dropdown';
import { ProductMenuItems } from '../../../data/product-menu-items';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: ProductMenuDropdown,
  description: 'Product menu dropdown',
  props: {
    categories: ProductMenuItems
  }
};

export default { testCases, noRenderCases };
