import { Navigate } from 'react-router-dom';
import { useAuth } from 'components/AuthProvider';
import { G_MENU } from 'constants/constant';
import { useEffect } from 'react';

const Logout = () => {
  const { setToken } = useAuth();

  useEffect(() => {
    setToken(null);
  }, []);

  // return <>Logout Page</>;
  return <Navigate to={G_MENU.home.url}></Navigate>;
};

export default Logout;
