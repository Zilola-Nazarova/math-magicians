import React, { useState, useEffect } from 'react';

const GetQuote = () => {
  const [data, setData] = useState([{ quote: '', author: '' }]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: { 'X-Api-Key': 'BR/RY3iercO1W04CkK7QjA==5NpXsVdG7dGfKpxx' },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <section id="quote">
      <q>{ data[0].quote }</q>
      <p>{ data[0].author }</p>
    </section>
  );
};

export default GetQuote;
