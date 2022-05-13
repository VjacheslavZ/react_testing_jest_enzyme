import React, {useEffect, useState} from "react";
import './App.css';

import Congrats from "./Congrats";
import GuessedWord from "./GuessedWord";
import Input from "./input";
import {getSecretWord} from "./actions";

import LanguagePicker from "./LanguagePicker";
import LanguageContext from "./contexts/languageContext";
import SuccessContext from "./contexts/successContext";

const reducer = (state, action) => {
  switch (action.type) {
    case 'setSecretWord':
      return {...state, setSecretWord: action.payload}
    case 'setLanguage':
      return {...state, language: action.payload}
    default:
      throw new Error(`Invalid action type ${action.type}`)
  }
}

function App() {
  const [state, dispatch] = React.useReducer(
    reducer,
    { secretWord: '', language: 'en' }
  )
  const setSecretWord = (secretWord) => {
    dispatch({ type: 'setSecretWord', payload: secretWord })
  }
  const setLanguage = (language) => {
    dispatch({ type: 'setLanguage', payload: language})
  }
  const success = false;
  const guessedWords = [];

  useEffect(() => {
    getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className='container' data-test="spinner">
        <div className='spinner-border' role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word...</p>
      </div>
    )
  }

  return (
    <div className="container" data-test='component-app'>
      <h1>Jotto</h1>
      <LanguageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <SuccessContext.SuccessProvider>
          <Congrats />
          <Input secretWord={state.secretWord} />
        </SuccessContext.SuccessProvider>
        <GuessedWord guessedWords={guessedWords} />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
