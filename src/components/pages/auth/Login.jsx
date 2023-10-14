import { useState, useContext } from 'react';

import CustomButton from '../../components/CustomButton';

import { AuthContext } from '../../../context/AuthContext';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}

export default function Login() {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const { setToken, setUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await loginUser({
      username,
      password
    });
    setToken(res.token);
    setUser(res.user);
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
              <input className='border-2 border-black py-1 px-2' type='text' onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
              <p>Password:</p>
              <input className='border-2 border-black py-1 px-2' type='password' onChange={e => setPassword(e.target.value)}/>
            </label>
          </div>
          <div>
            <CustomButton
              content='login'
              type='submit'
            />
          </div>
        </form>
      </div>
    </div>
  )
}
