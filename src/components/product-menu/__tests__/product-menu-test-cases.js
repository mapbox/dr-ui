import { ProductMenu } from '../product-menu';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: ProductMenu,
  description: 'Product menu',
  props: {
    platform: 'Bakery',
    product: 'Oven'
  }
};

export default { testCases, noRenderCases };
