import React from "react";
import { shallow } from "enzyme";

import {findByTestAttr} from "../test/testUtils";
import Input from "./input";

const setup = () => shallow(<Input />)

const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState) => [initialState, mockSetCurrentGuess]
}))

test('Input renders without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
})

describe('state controlled input filed', () => {
  test('state updated with value of input box upon change', () => {
    // React.useState = jest.fn(() => ["", mockSetCurrentGuess])

    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  });
})

