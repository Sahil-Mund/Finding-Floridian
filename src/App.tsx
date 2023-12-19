import React from 'react';
import './styles/App.scss';
import {HomePage} from './views';
import {Navbar}  from './components'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
    </div>
  );
}

export default App;
