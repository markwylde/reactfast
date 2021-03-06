import { h } from 'preact';
import { useState } from 'preact/hooks';
import Header from '../components/Header.tsx';

function Dynamic () {
  const [items, setItems] = useState(['first item']);

  const handleAddItem = () => {
    setItems([
      ...items,
      'item ' + (items.length + 1)
    ]);
  };

  return (
    <div>
      <Header />
      <h1>Does it handle interactivity?</h1>
      <div>Items:</div>
      <ul>
        {items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default Dynamic;
