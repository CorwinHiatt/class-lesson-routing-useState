
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './scenes/home';
import Welcome from './scenes/welcome';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {(!isLoggedIn) //if not logged in 
         ? <Welcome setIsLoggedIn={setIsLoggedIn}/> // then render welcome
         : <Home setIsLoggedIn={setIsLoggedIn}/> // else render home
         }
       </header>
    </div>
  );
}

export default App;
