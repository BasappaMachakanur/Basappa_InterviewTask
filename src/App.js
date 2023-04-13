import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LogInPage from './pages/LogInPage';
import HomePage from './pages/HomePage';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div className="App">
     <Routes>
      <Route index element={<HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="login" element={<LogInPage setIsLoggedIn={setIsLoggedIn}/>}/>
     </Routes>
    </div>
  );
}

export default App;
