import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const noop = () => {};

Object.defineProperty(global, 'MapboxPageShell', {
  value: noop,
  writable: true
});
Object.defineProperty(global.MapboxPageShell, 'afterUserCheck', {
  value: noop,
  writable: true
});
