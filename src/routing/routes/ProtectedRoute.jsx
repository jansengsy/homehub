import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useToken from '../../hooks/useToken';

export const ProtectedRoute = ({ children }) => {

  const { token } = useToken();

  if (!token) {
    return <Navigate to='/login' />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired, // You can adjust the prop type based on your needs
};
