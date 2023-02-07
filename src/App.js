

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './scenes/home';
import Welcome from './scenes/welcome';
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
          <Routes>
            <Route path="/home" element={<Home/>}/>  
            <Route exact path="/" element={<Welcome/>}/> 
          </Routes>
       </header>
    </div>
    </BrowserRouter>
  ); //most specific routes should be at the top.
}

export default App;
