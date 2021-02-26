import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stackEditedStocks } from 'src/modules/editedStocks';

const useEditedStocks = () => {
  const dispatch = useDispatch();
  const { stock } = useSelector((state) => state.stock);

  const initializeNewStack = useCallback((stock) => {
    dispatch(
      stackEditedStocks({
        stockId: stock._id,
        editedStock: {
          ...stock
        }
      })
    );
  }, []);

  const onChange = useCallback((event, stockId) => {
    const { name, value, checked } = event.target;
    dispatch(
      stackEditedStocks({
        stockId,
        editedStock: {
          [name]: value || checked
        }
      })
    );
  }, []);

  return {
    stock,
    onChange,
    initializeNewStack
  };
};

export default useEditedStocks;
