import Login from './Login.js'
import Search from './Search'
import Results from './Results'
import { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({})
  const [wasSearched, setWasSearched] = useState(false);
  const [displayData, setDisplayData] = useState([]);

  return (
    <div className='App'>
      {!loggedIn ?
        <Login setUserData={setUserData} setLoggedIn={setLoggedIn}></Login>
        :
          !wasSearched ?
          <Search userData={userData} setLoggedIn={setLoggedIn} setUserData={setUserData} setWasSearched={setWasSearched} setDisplayData={setDisplayData}></Search>
          :
          <Results displayData={displayData} setWasSearched={setWasSearched} setDisplayData={setDisplayData}></Results>

      }
    </div>
  );
}

export default App;
