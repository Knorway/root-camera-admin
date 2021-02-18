import { useCallback } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stackEditedStocks } from 'src/modules/editedStocks';

const useEditedStocks = () => {
  const navigate = useNavigate();
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

  const onSave = () => {
    dispatch(async (_, getState) => {
      const { stack } = getState().editedStocks;
      await axios.put('/api/stocks', stack);
      navigate(-1);
    });
  };

  const onDelete = (id) => {
    return async () => {
      if (window.confirm('변화는 되돌릴 수 없습니다. 정말 삭제하시겠습니까?')) {
        await axios.delete(`/api/stocks/${id}`);
        navigate(-1);
      }
    };
  };

  return { stock, onChange, onSave, onDelete, initializeNewStack };
};

export default useEditedStocks;
