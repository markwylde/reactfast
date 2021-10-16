import React from 'react';

export function App () {
  const [items, setItems] = React.useState(['first item']);

  const handleAddItem = () => {
    setItems([
      ...items,
      'second item'
    ]);
  };

  return (
    <div>
      <div>Items:</div>
      <ul>
        {items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default App;
