import { useState } from 'react';
import { AddCategory } from './components/AddCategory/AddCategory';

export default function App() {
  const [categories, setCategories] = useState(['React', 'Vue', 'Angular']);

  const onAddCategory = () => {
    setCategories([...categories, 'Holis']);
  };

  return (
    <>
      <h1>Hello React!</h1>
      <AddCategory />
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
}
