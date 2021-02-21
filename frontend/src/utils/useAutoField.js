import { useState } from 'react';
import { useSelector } from 'react-redux';
import useEditedStocks from './useEditedStocks';

const useAutoField = (initialState = {}, option) => {
  const [field, setField] = useState(initialState);
  const [totalCost, setTotalCost] = useState(0);
  const { onChange } = useEditedStocks();
  const { stock } = useSelector();
  let result;

  //   if (option === 'stock') {
  //       Object.values(field).forEach(value => {

  //       });
  //   }

  const handleCountTotalCount = (e) => {
    const { name, value } = e.target;

    onChange(e, stock._id);
    setField((prev) => ({
      ...prev,
      [name]: +value
    }));
  };

  return null;
};

export default useAutoField;
