import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setUp = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('render without error', () => {
  const wrapper = setUp();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1)
});

test('renders button', () => {
  const wrapper = setUp();
  const button = findByTestAttr(wrapper,'increment-button');
  expect(button.length).toBe(1)
})

test('renders counters display', () => {
  const wrapper = setUp();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1)
})

test('counter display starts at 0', () => {
  const wrapper = setUp();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe("0")
})

test('clicking button increments counter display', () => {
  const wrapper = setUp();
  const button = findByTestAttr(wrapper,'increment-button');
  button.simulate('click');
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe("1")
})

test('clicking button decrements counter display', () => {
  const wrapper = setUp();
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  const count= findByTestAttr(wrapper, 'count').text();
  expect(count).toBe("-1")
});

test('counter less then 0 show error', () => {
  const wrapper = setUp();
  const button = findByTestAttr(wrapper, 'decrement-button')
  button.simulate('click');
  const countError = findByTestAttr(wrapper, 'count-error')
  expect(countError.length).toBe(1);
})
