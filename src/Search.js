import { useState } from 'react';
import './Search.css';

function Search(props) {
  const [NAME, setNAME] = useState('');
  const [PHONE, setPHONE] = useState('');
  const [ROLE, setROLE] = useState('');
  const [LOCATION, setLOCATION] = useState('');
  const [TYPE, setTYPE] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const createQuery = () => {
    const allState = {NAME, PHONE, ROLE, LOCATION, TYPE};
    let query = {};
    for (const state in allState) {
      if (allState[state] !== '') {
        query[state] = allState[state];
      }
    }
    console.log(query);
    return (query);
  }
  // ADD a 500 error handle after implementation on server side
  const handleQuery = () => {
    fetch(`http://localhost:5555/api/employees/${props.userData.id}/${props.userData.type}`, {
      method: 'POST',
      body: JSON.stringify(createQuery()),
      headers: {
        'Content-Type':'application/json',
      },
    })
    .then((response) => {
      if (response.ok) {
        return(response.json());
      } else {
        throw Error(response.json());
      }
    })
    .then((data) => {
      props.setDisplayData(data);
      props.setWasSearched(true);
    })
    .catch((error) => console.log('error handled', error));
  }
  return (
    <>
    <div id='search'>
      <form id='search_form' onSubmit={handleSubmit}>
        <h3>Hello, {props.userData.name}!</h3>
        <h3>Dont input anything to get all employees !</h3>
        <label className='label' htmlFor='name_input' id='name_label'>Name of Employee</label>
        <input className='input' placeholder='Format: (lastname, firstname)'  type='text' name='name_input' id='name_input' onChange={(e)=> {setNAME(e.target.value)}}></input>

        <label className='label' htmlFor='phone_input' id='phone_label'>Phone # of employee</label>
        <input className='input' placeholder='Format (123-456-7891)'  type='text' name='phone_input' id='phone_input' onChange={(e)=> {setPHONE(e.target.value)}}></input>

        <label className='label' htmlFor='role_input' id='role_label'>Role of Employee</label>
        <input className='input' placeholder='Format (Any ATM)'  type='text' name='role_input' id='role_input' onChange={(e)=> {setROLE(e.target.value)}}></input>

        <label className='label' htmlFor='location_input' id='location_label'>Location of Employee</label>
        <input className='input' placeholder='Format (City, State)'  type='text' name='location_input' id='location_input' onChange={(e)=> {setLOCATION(e.target.value)}}></input>

        <label className='label' htmlFor='type_input' id='type_label'>Type of Employee</label>
        <input className='input' placeholder="('HR', 'MANAGER', or 'EMPLOYEE')"  type='text' name='type_input' id='type_input' onChange={(e)=> {setTYPE(e.target.value)}}></input>
        <button onClick={() => {handleQuery()}}>Submit</button>
      </form>
      <button onClick={()=> {props.setLoggedIn(false); props.setUserData({})}}>Logout</button>
    </div>
    </>
  );
}

export default Search;
