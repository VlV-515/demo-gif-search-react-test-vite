import { useState } from 'react';
import { AddCategory } from './components/AddCategory/AddCategory';

export default function App() {
  const [categories, setCategories] = useState(['React', 'Vue', 'Angular']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return alert('Repetida');
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Hello React!</h1>
      <AddCategory onAddCategory={onAddCategory} />
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
}
