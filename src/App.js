import React, {useEffect, useState} from "react";
import './App.css';

import Congrats from "./Congrats";
import GuessedWord from "./GuessedWord";
import Input from "./input";
import {getSecretWord} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case 'setSecretWord':
      return {...state, setSecretWord: action.payload}
    default:
      throw new Error(`Invalid action type ${action.type}`)
  }
}

function App() {
  const [state, dispatch] = React.useReducer(
    reducer,
    { secretWord: '' }
  )
  const setSecretWord = (secretWord) => {
    dispatch({ type: 'setSecretWord', payload: secretWord })
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
      <Congrats success={success}/>
      <Input success={success} secretWord={state.secretWord} />
      <GuessedWord guessedWords={guessedWords} />
    </div>
  );
}

export default App;
