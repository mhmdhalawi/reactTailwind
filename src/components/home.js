import { useEffect, useState } from 'react';

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    async function getData() {
      const result = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await result.json();
      console.log(data);
      setName(data.name);
    }
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl">Home Component</h1>
      <button
        className=" btn bg-blue-500 hover:bg-blue-700 btn-focus"
        onClick={() => setCounter(counter + 1)}
      >
        plus
      </button>
      <h2 className="text-lg">{counter}</h2>
      {name && <h2 className="text-lg text-yellow-600 font-bold">{name}</h2>}
    </div>
  );
}
