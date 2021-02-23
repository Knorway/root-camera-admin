import { useDispatch, useSelector } from 'react-redux';
import {
  changeLimit,
  changePage,
  chnageKeyword,
  resetKeyword
} from 'src/modules/searchQuery';

const useSearchQuery = () => {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.searchQuery.pagination);

  const onChangePage = (value) => dispatch(changePage(value));
  const onChangeLimit = (value) => dispatch(changeLimit(value));
  const onChangeKeyword = (value) => dispatch(chnageKeyword(value));
  const onResetKeyword = (value) => dispatch(resetKeyword(value));

  return {
    pagination,
    onChangePage,
    onChangeLimit,
    onChangeKeyword,
    onResetKeyword
  };
};

export default useSearchQuery;
