import { useState } from 'react';

const CartWidget = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      🛒 <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(Math.max(count - 1, 0))}>-</button>
    </div>
  );
};

export default CartWidget;