import { errorDuringRequest, finishLoading, startLoading } from '../request';

export const createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;

  return (
    option = {
      query: true,
      params: null
    }
  ) => async (dispatch, getState) => {
    const { query, params } = option;
    const { searchQuery } = getState();
    const data = query ? searchQuery : params;

    dispatch(startLoading(type));

    try {
      const response = await request(data);
      dispatch({ type: SUCCESS, payload: response.data });
    } catch (error) {
      dispatch(
        errorDuringRequest({
          type,
          error: error.response.data.message
            ? error.response.data.message
            : error.message
        })
      );
    } finally {
      dispatch(finishLoading(type));
    }
  };
};
