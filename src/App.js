import React from 'react';
import './App.css';
import './index.css';
import InputForm from './InputForm';
import Emoji from './Emoji';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>An app to send an <Emoji symbol="☎️"/>SMS<Emoji symbol="☎️"/> to <a href="http://www.stevehind.me" className="">Steve</a>.</p>
      </header>
        <div className="App-body">
          <InputForm/>
        </div>
      <footer className="App-footer">
        <p>©Steve Hind, 2020.</p>
      </footer>
    </div>
  );
}

export default App;
