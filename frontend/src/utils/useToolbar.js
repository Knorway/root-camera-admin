import { useState } from 'react';
import useEditedStocks from './useEditedStocks';
import useSearchQuery from './useSearchQuery';

const useToolbar = () => {
  const [category, setCategory] = useState('name');
  const [input, setInput] = useState('');
  const { onSave } = useEditedStocks();
  const { onChangeKeyword, onResetKeyword, onChangePage } = useSearchQuery();

  const handleSave = () => {
    if (window.confirm('변경사항들이 일괄 변경됩니다. 저장하시겠습니까?')) {
      onSave();
      window.location.reload();
    }
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    setInput('');
    onResetKeyword();
  };

  const handleInput = (e) => {
    const { value } = e.target;
    onChangeKeyword({ [category]: value });
    setInput(value);
  };

  const handleKeydown = (callback) => {
    callback();
    onChangePage(0);
  };

  return {
    category,
    input,
    handleSave,
    handleChangeCategory,
    handleInput,
    handleKeydown
  };
};

export default useToolbar;
