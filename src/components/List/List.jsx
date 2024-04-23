import Item from '../Item';
import React from 'react';
import './List.css';

function List({ items = [] }) {
  const map = items.map((item) => (
    <Item key={item.id} item={item} />
  ));

  return (
    <div>
      <span className='list_titulo'>
        <h1>Pokemons</h1>
      </span>
      <div className='list-wrapper'>
        <ul className='list'>
          {map}
        </ul>
      </div>
    </div>
  );
};

export default List;
