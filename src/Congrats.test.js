// import Enzyme, { shallow } from 'enzyme';
// import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {mount, shallow} from 'enzyme';
import { findByTestAttr } from "../test/testUtils";

import Congrats from './Congrats';
import LanguageContext from "./contexts/languageContext";
import SuccessContext from "./contexts/successContext";

const setup = ({ success, language }) => {
  language = language || 'en'
  success = success || false;

  return mount(
    <LanguageContext.Provider value={language}>
      <SuccessContext.SuccessProvider value={[success, jest.fn()]}>
        <Congrats/>
      </SuccessContext.SuccessProvider>
    </LanguageContext.Provider>
  )
}

describe('LanguagePicker', () => {
  test('correctly renders congrats string in english', () => {
    const wrapper = setup({ success: true});
    expect(wrapper.text()).toBe('Congratulations! You guessed the word!')
  });
  test('correctly renders congrats string in emoji', () => {
    const wrapper = setup({ success: true, language: 'emoji' });
    expect(wrapper.text()).toBe('🎯🎉')
  })
})

test('Render without error', () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('Renders no text when `success` is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
})
test('Renders non-empty congrats message when `success` is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
