import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial)

  const handleCountChange = (value) => {
    const newCount = count + value;
    if (newCount >= 1 && newCount <= stock) {
      setCount(newCount)
    }
  }

  const handleAdd = () => {
    if (count > 0) {
      onAdd(count)
    }

  }


  return (<div className="flex items-center">
    <button className="border rounded px-3 py-1 flex items-center" onClick={() => handleCountChange(-1)}>
      <div>-</div>
    </button>
    <button className="border rounded px-3 py-1 flex items-center" onClick={() => handleCountChange(+1)}>
      <div>+</div>
    </button>
    <button className="border rounded px-3 py-1 flex items-center" onClick={() => handleAdd()}>
      <div>Agregar al carrito</div>
    </button>
  </div>);
}

export default ItemCount;