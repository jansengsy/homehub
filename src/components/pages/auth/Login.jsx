import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

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
    redirect();
  }

  function redirect() {
    window.location.replace(window.location.origin + '/');
  }

  return (
    <div className='flex justify-center items-center m-2 h-screen'>
      <div>
        <h1 className='text-xl mb-4'>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label>
              <p>Username:</p>
              <input className='border-2 border-black' type='text' onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
              <p>Password:</p>
              <input className='border-2 border-black' type='password' onChange={e => setPassword(e.target.value)}/>
            </label>
          </div>
          <div>
            <Button
              content='login'
              type='submit'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
