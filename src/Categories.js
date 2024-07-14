import React, { useState, useEffect } from 'react';
import Characters from './Characters';
import Comics from './Comics';
import Creators from './Creators';
import Events from './Events';
import Series from './Series';
import Stories from './Stories';

export default function Categories({ category, items, searchInput }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchInput && searchInput.trim() !== '') {
      fetch(`http://gateway.marvel.com/v1/public/${category}?&nameStartsWith=${searchInput}&ts=1&apikey=42fb729f8591d0990e6dd5cec229109a&hash=1414ad6e82b006615158f4076736a20a`)
        .then((res) => res.json())
        .then((response) => {
          setData(response.data.results);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      fetch(`http://gateway.marvel.com/v1/public/${category}?limit=100&ts=1&apikey=42fb729f8591d0990e6dd5cec229109a&hash=1414ad6e82b006615158f4076736a20a`)
        .then((res) => res.json())
        .then((response) => {
          setData(response.data.results);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [category, searchInput]);

  return (
    <div>
      {category==="characters" && data.length > 0 && <Characters data={data} items={items} />}
      {category==="comics" && data.length > 0 && <Comics data={data} items={items} />}
      {category==="creators" && data.length > 0 && <Creators data={data} items={items} />}
      {category==="events" && data.length > 0 && <Events data={data} items={items} />}
      {category==="series" && data.length > 0 && <Series data={data} items={items} />}
      {category==="stories" && data.length > 0 && <Stories data={data} items={items} />}
    </div>
  );
}
