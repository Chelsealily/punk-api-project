import "./App.scss";
import { FormEvent, useEffect, useState } from "react";
import { Beer } from "./types/Beer";
import ScrollToTop from "react-scroll-to-top";
import Nav from "./containers/Nav/Nav";
import CardList from "./components/CardList/CardList";
import { BeerExt } from "./types/Beer";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [abv, setAbv] = useState<boolean>(false);
  const [year, setYear] = useState<boolean>(false);
  const [acid, setAcid] = useState<boolean>(false);
  const [beersOg, setBeersOg] = useState([]);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers?per_page=80";
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
    setBeersOg(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  const filteredBeer = beers.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  useEffect(() => {
    let filteredBeerList = beersOg;
    if (abv) {
      filteredBeerList = filteredBeerList.filter(
        (beer: BeerExt) => beer.abv > 6
      );
    }
    if (year) {
      filteredBeerList = filteredBeerList.filter(
        (beer: BeerExt) => Number(beer.first_brewed.slice(3)) < 2010
      );
    }
    if (acid) {
      filteredBeerList = filteredBeerList.filter(
        (beer: BeerExt) => beer.ph < 4
      );
    }
    setBeers(filteredBeerList);
  }, [abv, year, acid, beersOg]);

  const getAbv = () => {
    setAbv(!abv);
  };
  const getYear = () => {
    setYear(!year);
  };
  const getAcid = () => {
    setAcid(!acid);
  };

  return (
    <section className="page-container">
      <div>
        <Nav
          searchTerm={searchTerm}
          handleInput={handleInput}
          getAbv={getAbv}
          getYear={getYear}
          getAcid={getAcid}
        />
      </div>
      {filteredBeer.map((product) => (
        <CardList
          name={product.name}
          image_url={product.image_url}
          tagline={product.tagline}
        />
      ))}
      <ScrollToTop smooth color="purple" />
    </section>
  );
}

export default App;
