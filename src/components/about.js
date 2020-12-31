import { useEffect, useState } from 'react';

export default function About({ setActive }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setActive('/about');
  }, [setActive]);

  return (
    <div>
      <h1 className="text-2xl">About Component</h1>
      <button
        className="btn bg-purple-500 hover:bg-purple-700"
        onClick={() => setCounter(counter - 1)}
      >
        minus
      </button>
      <h2 className="text-lg">{counter}</h2>
    </div>
  );
}
