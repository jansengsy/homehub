import { createContext } from 'react';

import useToken from '../hooks/useToken';
import useUser from '../hooks/useUser';

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const { token, setToken, deleteToken } = useToken();
  const { user, setUser } = useUser();

  return <AuthContext.Provider value={{ token, setToken, deleteToken, user, setUser }}>{children}</AuthContext.Provider>;
};
