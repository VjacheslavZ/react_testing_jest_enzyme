// import Enzyme, { shallow } from 'enzyme';
// import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import { findByTestAttr } from "../test/testUtils";

import Congrats from './Congrats';

const setup = (props = {}) => shallow(<Congrats {...props} />)

test('Render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('Renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
})
test('Renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
