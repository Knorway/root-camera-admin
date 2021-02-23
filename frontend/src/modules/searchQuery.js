import { createAction, handleActions } from 'redux-actions';
import { toDatePickerFormat } from 'src/utils/lib';

export const changePage = createAction('searchQuery/CHANGE_PAGE');
export const changeLimit = createAction('searchQuery/CHANGE_LIMIT');
export const chnageKeyword = createAction('searchQuery/CHANGE_KEYWORD');
export const resetPagination = createAction('searchQuery/RESET_PAGINATION');
export const resetKeyword = createAction('searchQuery/RESET_KEYWORD');
export const resetAllSearchQueries = createAction(
  'searchQuery/RESET_ALL_QUERIES'
);

const initialState = {
  pagination: { page: 0, limit: 100 },
  keyword: {
    dateFrom: '2021-01-01',
    dateTo: toDatePickerFormat(new Date(), {
      new: true
    })
  }
};

const reducer = handleActions(
  {
    [changePage]: (state, { payload }) => ({
      ...state,
      pagination: {
        ...state.pagination,
        page: payload
      }
    }),
    [changeLimit]: (state, { payload }) => ({
      ...state,
      pagination: {
        ...state.pagination,
        limit: payload
      }
    }),
    [chnageKeyword]: (state, { payload }) => ({
      ...state,
      keyword: {
        ...state.keyword,
        ...payload
      }
    }),
    [resetPagination]: (state, { payload }) => ({
      ...state,
      pagination: {
        limit: 100,
        page: 0
      }
    }),
    [resetKeyword]: (state, action) => ({
      ...state,
      keyword: {}
    }),
    [resetAllSearchQueries]: (state, action) => initialState
  },
  initialState
);

export default reducer;
