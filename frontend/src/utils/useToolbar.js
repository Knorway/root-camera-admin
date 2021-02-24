import { useCallback, useState, memo } from 'react';
import useEditedStocks from './useEditedStocks';
import useSearchQuery from './useSearchQuery';

const useToolbar = () => {
  const [category, setCategory] = useState('name');
  const [input, setInput] = useState('');
  const { onSave } = useEditedStocks();
  const { onChangeKeyword, onChangePage, onResetKeyword } = useSearchQuery();

  const handleSave = useCallback(() => {
    if (window.confirm('변경사항들이 일괄 변경됩니다. 저장하시겠습니까?')) {
      onSave();
      window.location.reload();
    }
  }, []);

  const handleChangeCategory = useCallback((e) => {
    setCategory(e.target.value);
    setInput('');
    onResetKeyword();
  }, []);

  const handleInput = useCallback(
    (e) => {
      const { value } = e.target;
      onChangeKeyword({ [category]: value });
      setInput(value);
    },
    [category]
  );

  const handleKeydown = useCallback((callback) => {
    callback();
    onChangePage(0);
  }, []);

  const handleChangeDate = (e) => {
    const { name, value } = e.target;
    onChangeKeyword({ [name]: value });
  };

  return {
    category,
    input,
    handleSave,
    handleChangeCategory,
    handleInput,
    handleKeydown,
    handleChangeDate
  };
};

export default useToolbar;
