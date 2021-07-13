import { useSelector } from 'react-redux';

export const useRequest = (type, storeName) => {
  const state = useSelector((state) => state[storeName]);
  const { loading, error } = useSelector(({ request }) => ({
    loading: request.loading?.[type],
    error: request.error?.[type]
  }));

  return {
    loading,
    data: state,
    error
  };
};
