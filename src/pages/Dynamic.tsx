import React from 'react';
import Header from '../components/Header';

export function Dynamic () {
  const [items, setItems] = React.useState(['first item']);

  const handleAddItem = () => {
    setItems([
      ...items,
      'second item'
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
