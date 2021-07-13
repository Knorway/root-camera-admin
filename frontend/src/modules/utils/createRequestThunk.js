import { errorDuringRequest, finishLoading, startLoading } from '../request';

export const createRequestThunk = (type, requestFn) => {
  const SUCCESS = `${type}_SUCCESS`;

  return (
    option = {
      query: true,
      params: null
    },
    callback
  ) => async (dispatch, getState) => {
    const { query, params } = option;
    const { searchQuery } = getState();
    const data = query ? searchQuery : params;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getState().auth?.token}`
      }
    };

    dispatch(startLoading(type));

    try {
      const response = await requestFn(data, config);
      dispatch({ type: SUCCESS, payload: response.data });

      if (callback) {
        callback(response.data);
      }
    } catch (error) {
      dispatch(
        errorDuringRequest({
          type,
          error
        })
      );
    } finally {
      dispatch(finishLoading(type));
    }
  };
};
