import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [status, setStatus] = useState(200);
  const authError = useSelector((state) => state.request.error);
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch({ type: 'request/CLREA_ALL' });
    dispatch({ type: 'auth/RESET' });
    setStatus(200);
    localStorage.removeItem('auth');
  };

  const checkAuth = useCallback(() => {
    if (status === 401 || !user) {
      onLogout();
      navigate('/login', { replace: true });
    }
  }, [status, user]);

  useEffect(() => {
    if (authError && Object.values(authError)[0]?.response?.status === 401) {
      setStatus(401);
    }
  }, []);
  return { user, status, onLogout, checkAuth };
};

export default useAuth;
