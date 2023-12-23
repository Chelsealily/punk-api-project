import "./App.scss";
import {FormEvent, useEffect, useState } from "react";
import CardList from "./components/CardList/CardList";
import { Beer } from "./types/Beer";
import Search from "./components/Search/Search";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data= await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
}

  const filteredBeer = beers.filter(product =>
  product.name.toLowerCase().includes(searchTerm)
)

  return (
      <section className="page-container" >
        <div className="nav">
        <img className="logo" src="src/assets/images/logo.jpeg" alt="Brewdog logo"/>
        <Search searchTerm={searchTerm} handleInput={handleInput}/>
       </div>
       <div className="product-container">
        {filteredBeer.map((product) => (<CardList name={product.name} image_url={product.image_url} tagline={product.tagline}/>))}
      </div>
      <ScrollToTop smooth color="purple"/>
      </section>
    
  )
}

export default App
