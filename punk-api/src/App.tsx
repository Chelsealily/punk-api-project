import './App.scss'
import {useEffect, useState } from 'react';
import CardList from './components/CardList/CardList';
import { Beer } from './types/beer';

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers?per_page=80";
    const res = await fetch(url);
    const data= await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (

      <div>
        <h1>Brewdog</h1>
        <CardList info={beers}/>
      </div>
    
  )
}

export default App
