import Login from './Login.js'
import Search from './Search'
import { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({})

  return (
    <div className='App'>
      {!loggedIn ?
        <Login setUserData={setUserData} setLoggedIn={setLoggedIn}></Login>
        :
        <>
          <Search userData={userData} setLoggedIn={setLoggedIn} setUserData={setUserData}></Search>
        </>
      }
    </div>
  );
}

export default App;
