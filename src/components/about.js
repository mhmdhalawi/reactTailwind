import { useState } from 'react';

export default function About() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 className="text-2xl">About Component</h1>
      <button
        className="btn bg-purple-500 hover:bg-purple-700 btn-focus focus:ring-purple-500"
        onClick={() => setCounter(counter - 1)}
      >
        minus
      </button>
      <h2 className="text-lg">{counter}</h2>
    </div>
  );
}
