import { shallowEqual, useSelector } from 'react-redux';

export const useRequest = (type, storeName) => {
  const state = useSelector((state) => state[storeName], shallowEqual);
  const { loading, error } = useSelector(
    ({ request }) => ({
      loading: request.loading?.[type],
      error: request.error?.[type]
    }),
    shallowEqual
  );

  return {
    loading,
    data: state,
    error
  };
};
