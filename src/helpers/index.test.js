import {getLetterMatchCount} from "./index";

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  test('returns correct count when there are no matching letters', () => {
    const letterMachCount = getLetterMatchCount('bones', secretWord);
    expect(letterMachCount).toBe(0);
  });
  test('returns correct count when there are 3 letters matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3)
  });
  test('returns the correct count when there are duplicate letters in guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3)
  });
});
