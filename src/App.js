import React, {useEffect, useState} from "react";
import './App.css';

import Congrats from "./Congrats";
import GuessedWord from "./GuessedWord";
import Input from "./input";
import {getSecretWord} from "./actions";

function App() {
  const [secretWord, setSecretWord] = useState('');
  const success = false;
  const guessedWords = [];

  useEffect(() => {
    getSecretWord(setSecretWord);
  }, []);

  return (
    <div className="container" data-test='component-app'>
      <h1>Jotto</h1>
      <Congrats success={success}/>
      <Input success={success} secretWord={secretWord} />
      <GuessedWord guessedWords={guessedWords} />
    </div>
  );
}

export default App;
