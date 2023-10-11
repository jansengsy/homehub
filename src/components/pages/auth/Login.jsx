import { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
 }

export default function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div className="login-wrapper m-2">
      <h1 className='text-xl mb-6'>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input className="border-2 border-black" type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password:</p>
          <input className="border-2 border-black" type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button className="border-2 border-black mt-4 px-2" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}