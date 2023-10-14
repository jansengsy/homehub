import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Home() {

  const { user } = useContext(AuthContext);

  return (
    <h1 className='text-xl text-white pb-2'>Welcome back, {user.username}!</h1>
  );
}
