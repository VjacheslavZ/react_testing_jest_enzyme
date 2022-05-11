import React from "react";
import {mount} from "enzyme";
import App from './App';
import {findByTestAttr} from "../test/testUtils";
import {getSecretWord as mockGetSecretWord } from "./actions";

jest.mock('./actions');


const setup = () => {
  return mount(<App />);
};

// test('renders without error', () => {
//   const wrapper = setup();
//   const appComponent = findByTestAttr(wrapper, 'component-app');
//   expect(appComponent).toHaveLength(1);
// });

describe.each([
  [null, true, false],
  ['party', false, true],
])(
  'renders with secretWord as %s', (secretWord, loadingShows, appShows) => {
    let wrapper;
    let originalReducer;
    beforeEach(() => {
      originalReducer = React.useReducer;

      const mockUseReducer = jest.fn()
        .mockReturnValue([
          { secretWord },
          jest.fn(),
        ])
      React.useReducer = mockUseReducer;
      wrapper = setup();
    });
    afterEach(() => {
      React.useReducer = originalReducer;
    });
    test(`renders loading spinner: ${loadingShows}`, () => {
      const spinnerComponent = findByTestAttr(wrapper, 'spinner');
      expect(spinnerComponent.exists()).toBe(loadingShows);
    })
    test(`renders app: ${appShows}`, () => {
      const appComponent = findByTestAttr(wrapper, 'component-app')
      expect(appComponent.exists()).toBe(appShows)
    })
  }
)

describe('get secret word', () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });
  test('getSecretWord om app mount', () => {
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0 );
  });
  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    wrapper.setProps();
    mockGetSecretWord.mockClear();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
})
