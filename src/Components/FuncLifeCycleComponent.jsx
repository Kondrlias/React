import { useEffect, useState } from 'react';

const FuncComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Functional start!');

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://todo-redev.herokuapp.com/api/todos',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtvbmRybGlhQGdtYWlsLmNvbSIsImlkIjoxNzE4LCJpYXQiOjE3NTY5OTI4Mjl9.imWua3ScafN9ON_rCjGnUgOSQbIuPapd2rcybPK5n1M'}`,
              'Content-Type': 'application/json',
            },
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log('error: ', error);
      }
    };

    fetchData();

    return () => {
      console.log('Oops! Delete func comp.');
    };
  }, []);

  useEffect(() => {
    console.log('Update func comp');
    if (count % 2 !== 0) {
      setCount((c) => c + 1);
    }
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <h2>Functional Component</h2>
      <p>Количество: {count}</p>
      <button onClick={increment}>{count}</button>
    </div>
  );
};

export default FuncComponent;
