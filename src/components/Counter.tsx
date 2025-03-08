import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Ініціалізація стану

  const increment = () => {
    setCount(count + 1); // Оновлення стану
  };
  const decrement = () => {
    setCount(count - 1); // Оновлення стану
  };

  return (
    <div>
      <p>Лічильник: {count}</p>
      <button onClick={increment}>Збільшити</button>
      <button onClick={decrement}>Зменшити</button>
    </div>
  );
};


export default Counter;
