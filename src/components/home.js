import { useEffect, useState } from 'react';

export default function Home({ setActive, history }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setActive(history.location.pathname);
  }, [setActive, history.location.pathname]);

  useEffect(() => {
    async function getData() {
      const result = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await result.json();
      console.log(data);
    }
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl">Home Component</h1>
      <button
        className=" btn bg-blue-500 hover:bg-blue-700 "
        onClick={() => setCounter(counter + 1)}
      >
        plus
      </button>
      <h2 className="text-lg">{counter}</h2>
    </div>
  );
}
