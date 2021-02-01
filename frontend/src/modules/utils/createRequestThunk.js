import { errorDuringRequest, finishLoading, startLoading } from '../request';

export const createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;

  return (params) => async (dispatch) => {
    dispatch(startLoading(type));

    try {
      const response = await request(params);
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
