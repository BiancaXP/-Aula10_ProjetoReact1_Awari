
import { useEffect, useState } from 'react';
import './App.css';
import { List } from './components';
import React from 'react';

function App() {
  const [items, setItems] = useState([]);

  const loadDetails = (items) => {
    const promises = items.map((item) => {
      return fetch(item.url).then((response) => response.json())
    });
    Promise.all(promises)
      .then((data) => {
        setItems(data);
        console.log(data);
      });
  }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => {
          return response.json();
      })
      .then((data) => {
        const { results } = data;
        loadDetails(results);
      })
      .catch(() => {
        console.error('Error');
      });
  }, []);

  return (
    <div>
      <List items={items} />
    </div>
  );
}

export default App;
