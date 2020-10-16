import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Imessage from './components/imessage/Imessage';
import Login from './components/login/Login';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {user ? <Imessage /> : <Login />}
    </div>
  );
}

export default App;
