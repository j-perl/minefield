import React from 'react';
import './App.css';
import Grid from './components/Grid'
import ButtonNewGame from './components/ButtonNewGame'
import Hint from './components/Hint'
import Message from './components/Message'
import Score from './components/Score'

function App() {
  return (
    <div className="App">
		<ButtonNewGame />
		<Hint />
      	<Grid />
        <Message />
        <Score />
    </div>
  );
}

export default App;
