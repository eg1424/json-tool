import React from 'react';
import logo from './logo.svg';
import './App.css';
import JsonCompare from './pages/JsonCompare';
import MainMenu from './components/Menu';

function App() {
  return (
    <div>
      <header>
      </header>
      <div>
        <MainMenu/>
      </div>
      <div>
        <JsonCompare/>
      </div>
    </div>
  );
}

export default App;
