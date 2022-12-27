import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setinputValue] = useState('');

  const onChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputValue.trim();
    if (value.length <= 1) return;
    onAddCategory(value);
    setinputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type='text' value={inputValue} onChange={onChange} />
    </form>
  );
};
