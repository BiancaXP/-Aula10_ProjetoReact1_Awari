import React, { useEffect, useState } from 'react';

function Home() {
  const [items, setItems] = useState([]);

  const loadItems = (receivedItems) => {
    const promises = receivedItems.map((item) => fetch(item.url).then((response) => response.json()));
      return fetch(item.url).then((response) => response.json())
    };

    Promises.all(promises).then((data) => {
      setItems(data);
    });
  };
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        loadItems(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

export default Home;
