import React from "react";
import {mount, shallow} from "enzyme";

import {findByTestAttr} from "../test/testUtils";
import Input from "./input";
import LanguageContext from "./contexts/languageContext";

// const setup = (success=false, secretWord='train') =>
//   shallow(<Input success={success} secretWord={secretWord} />)
const setup = ({ language = 'en', secretWord = 'party', success = false }) => {

  return mount(
    <LanguageContext.Provider value={language}>
      <Input success={success} secretWord={secretWord}/>
    </LanguageContext.Provider>
  )
}

const mockSetCurrentGuess = jest.fn();

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))

describe('render', () => {
  describe('success is true', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true});
    });
    test('Input renders without error', () => {
      const wrapper = setup({});
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });
    test('input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.exists()).toBe(false);
    });
    test('submit button does not show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    });
  });
  describe('success is false', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({success: false});
    });
    test('Input renders without error', () => {
      const wrapper = setup({});
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });
    test('input box shows', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.exists()).toBe(true);
    });
    test('submit button shows', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    });
  })
});

describe('state controlled input filed', () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess])
    wrapper = setup({});
  })
  afterEach(() => {
    React.useState = originalUseState;
  });

  test('state updated with value of input box upon change', () => {
    // React.useState = jest.fn(() => ["", mockSetCurrentGuess])
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  });
  test('failed is cleared upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click', { preventDefault() {}});
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("")
  });
})

describe('LanguagePicker', () => {
  test("correctly renders submit string english", () => {
    const wrapper = setup({ language: 'en' });
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.text()).toBe('Submit')
  })
  test("correctly renders congrats string in emoji", () => {
    const wrapper = setup({ language: 'emoji' });
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.text()).toBe('🚀')
  })
})

