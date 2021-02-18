import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  changeLimit,
  changePage,
  chnageKeyword
} from 'src/modules/searchQuery';

const useSearchQuery = () => {
  const dispatch = useDispatch();
  const pagination = useSelector(
    (state) => state.searchQuery.pagination,
    shallowEqual
  );

  const onChangePage = (value) => dispatch(changePage(value));
  const onChangeLimit = (value) => dispatch(changeLimit(value));
  const onChangeKeyword = (value) => dispatch(chnageKeyword(value));

  return { pagination, onChangePage, onChangeLimit, onChangeKeyword };
};

export default useSearchQuery;
