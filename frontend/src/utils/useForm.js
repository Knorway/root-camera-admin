import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useForm = () => {
  const [form, setForm] = useState({});
  const { data: stock } = useSelector((state) => state.stock);

  useEffect(() => {
    setForm(() => ({
      ...stock
    }));
  }, [stock]);

  const onChange = useCallback((e) => {
    const { name, value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value || checked
    }));
  }, []);

  return { form, onChange };
};

export default useForm;
