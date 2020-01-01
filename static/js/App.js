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
          <h3>Just like using your phone...</h3>
          <h4>...except a web app</h4>
          <h5>...and also dumber.</h5>
          <InputForm/>
        </div>
      <footer className="App-footer">
        <p>©Steve Hind, 2020.</p>
      </footer>
    </div>
  );
}

export default App;
