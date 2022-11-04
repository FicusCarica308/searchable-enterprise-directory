import { useState } from 'react';
import './Login.css';

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  // ADD a 500 error handle after implementation on server side
  const handleLogin = () => {
    fetch('http://localhost:5555/api/employees/user', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type':'application/json',
      },
    })
    .then((response) => {
      if (response.ok) {
        return(response.json());
      } else {
        alert('Invalid email or password !')
        throw Error(response.json());
      }
    })
    .then((data) => {
      alert('Login Success!');
      props.setUserData(data);
      props.setLoggedIn(true);
    })
    .catch((error) => console.log('error handled', error));
  }
  return (
    <div id='login'>
      <form id='login_form' onSubmit={handleSubmit}>
        <h1>Welcome!</h1>
        <h3>Please enter your email and password...</h3>
        <label className='label' htmlFor='email_input' id='email_label'>Email:</label>
        <input placeholder='example@gmail.com' className='input' type='email' name='email_input' id='email_input' onChange={(e)=> {setEmail(e.target.value)}}></input>
        <label className='label' htmlFor='password_input' id='password_label'>Password:</label>
        <input placeholder='password' className='input' type='password' name='password_input' id='password_input' onChange={(e)=> {setPassword(e.target.value)}}></input>
        <button onClick={() => {handleLogin()}}>Login</button>
      </form>
    </div>
  );
}

export default Login;
