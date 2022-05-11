import {mount} from "enzyme";
import App from './App';
import {findByTestAttr} from "../test/testUtils";
import {getSecretWord as mockGetSecretWord } from "./actions";

jest.mock('./actions');


const setup = () => {
  return mount(<App />);
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});

describe('get secret word', () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });
  test('getSecretWord om app mount', () => {
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    wrapper.setProps();
    mockGetSecretWord.mockClear();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
})
