import { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [status, setStatus] = useState(200);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.request.error, shallowEqual);
  const user = useSelector((state) => state.auth);

  console.log(user);

  const onLogout = useCallback(() => {
    dispatch({ type: 'auth/RESET' });
    dispatch({ type: 'request/CLEAR_ERROR' });
    localStorage.removeItem('auth');
    setStatus(200);
  }, [status]);

  const checkAuth = useCallback(() => {
    if (status === 401 || !user) {
      onLogout();
      navigate('/login');
    }
  }, [status, user]);

  useEffect(() => {
    if (authError && Object.values(authError)[0]?.response.status === 401) {
      setStatus(401);
    }
  }, [authError]);
  return { user, onLogout, checkAuth };
};

export default useAuth;
