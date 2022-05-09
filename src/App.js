import './App.css';

import Congrats from "./Congrats";
import GuessedWord from "./GuessedWord";

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success/>
      <GuessedWord guessedWords={[ { guessedWord: 'train', letterMatchCount: 3 } ]} />
    </div>
  );
}

export default App;
