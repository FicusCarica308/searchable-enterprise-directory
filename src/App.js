import Login from './Login.js'
import { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({})

  return (
    <div className='App'>
      {!loggedIn ? <Login setUserData={setUserData} setLoggedIn={setLoggedIn}></Login> : <button onClick={()=> setLoggedIn(false)}>Logout</button>}
    </div>
  );
}

export default App;
