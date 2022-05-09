import React from "react";

const GuessedWord = (props) => {
  let contents;
  if (!props.guessedWords.length) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word</span>
    );
  }
  return (
    <div data-test='component-guessed-words'>
      {contents}
    </div>
  )
};

export default GuessedWord;
