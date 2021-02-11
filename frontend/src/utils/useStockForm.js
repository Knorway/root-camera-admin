import { useDispatch, useSelector } from 'react-redux';
import { changeForm } from '../modules/stockForm';

export const useStockForm = (stock) => {
  const dispatch = useDispatch();
  const stockForm = useSelector((state) => state.stockForm);

  const onChange = (e) => {
    const { name, value, checked } = e.target;
    dispatch(changeForm({ [name]: value || checked }));
  };

  return { stockForm, onChange };
};
