import React from "react";
import { shallow } from "enzyme";

import {findByTestAttr} from "../test/testUtils";
import Input from "./input";

const setup = () => shallow(<Input />)

const mockSetCurrentGuess = jest.fn();

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))

test('Input renders without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
})

describe('state controlled input filed', () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess])
    wrapper = setup();
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

