import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStock, deleteStock, saveStock } from 'src/modules/stock';
import { stackNewStocks } from 'src/modules/stocks';

const useCreateStock = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCreate = async () => {
    dispatch(
      createStock({}, (data) => {
        dispatch(stackNewStocks(data));
      })
    );
  };

  const onSave = async () => {
    dispatch(async (_, getState) => {
      const { stack } = getState().editedStocks;
      dispatch(saveStock({ query: false, params: stack }));
      navigate(-1);
    });
  };

  const onDelete = async (id) => {
    dispatch(deleteStock({ query: false, params: id }));
    navigate(-1);
  };

  return { onCreate, onSave, onDelete };
};

export default useCreateStock;
