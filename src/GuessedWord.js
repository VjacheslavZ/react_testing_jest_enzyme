import React from "react";

import LanguageContext from "./contexts/languageContext";
import stringsModule from './helpers/strings';

const GuessedWord = (props) => {
  const language = React.useContext(LanguageContext);

  let contents;
  if (!props.guessedWords.length) {
    contents = (
      <span data-test="guess-instructions">
        {stringsModule.getStringByLanguage(language, 'guessPrompt')}
      </span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>
          {stringsModule.getStringByLanguage(language, 'guessedWords')}
        </h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>{stringsModule.getStringByLanguage(language, 'guessColumnHeader')}</th>
              <th>{stringsModule.getStringByLanguage(language, 'matchingLettersColumnHeader')}</th>
            </tr>
          </thead>
          <tbody>
            {guessedWordsRows}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div data-test='component-guessed-words'>
      {contents}
    </div>
  )
};

export default GuessedWord;
