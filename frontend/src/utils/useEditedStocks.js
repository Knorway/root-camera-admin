import { useCallback, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stackEditedStocks } from 'src/modules/editedStocks';

const useEditedStocks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: stock } = useSelector((state) => state.stock);

  const initializeNewStack = useCallback(() => {
    dispatch(
      stackEditedStocks({
        stockId: stock._id,
        editedStock: {
          ...stock
        }
      })
    );
  }, []);

  const onChange = useCallback((e) => {
    const { name, value, checked } = e.target;
    dispatch(
      stackEditedStocks({
        stockId: stock._id,
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
      navigate('/app/stocks');
    });
  };

  const onDelete = (id) => {
    return async () => {
      if (window.confirm('변화는 되돌릴 수 없습니다. 정말 삭제하시겠습니까?')) {
        await axios.delete(`/api/stocks/${id}`);
        navigate('/app/stocks');
      }
    };
  };

  useEffect(() => {
    initializeNewStack();
  }, []);

  return { stock, onChange, onSave, onDelete };
};

export default useEditedStocks;
