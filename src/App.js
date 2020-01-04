import React from 'react';
import './App.css';
import './index.css';
import InputForm from './InputForm';
import Emoji from './Emoji';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p><Emoji symbol="☎️"/> SMS<a href="http://www.stevehind.me" className=""> Steve </a><Emoji symbol="☎️"/></p>
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
