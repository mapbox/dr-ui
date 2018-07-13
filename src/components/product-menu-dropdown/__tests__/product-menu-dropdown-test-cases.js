import { ProductMenuDropdown } from '../product-menu-dropdown';
import categoryItems from '../product-menu-dropdown-dummy-data';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: ProductMenuDropdown,
  description: 'Product menu dropdown',
  props: {
    categories: categoryItems
  }
};

export default { testCases, noRenderCases };
