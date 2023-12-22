import "./App.scss";
import {useEffect, useState } from "react";
import CardList from "./components/CardList/CardList";
import { Beer } from "./types/Beer";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data= await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (

      <div>
        <img className="logo" src="src/assets/images/logo.jpeg" alt="Brewdog logo"/>
        <CardList info={beers}/>
      </div>
    
  )
}

export default App
