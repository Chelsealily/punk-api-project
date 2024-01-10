import "./App.scss";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Beer } from "./types/Beer";
import ScrollToTop from "react-scroll-to-top";
import Nav from "./containers/Nav/Nav";
import CardList from "./components/CardList/CardList";
import { BeerExt } from "./types/Beer";
import RangeInput from "./components/RangeInput/RangeInput";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [beersOg, setBeersOg] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [abv, setAbv] = useState<boolean>(false);
  const [year, setYear] = useState<boolean>(false);
  const [acid, setAcid] = useState<boolean>(false);
  const [ebc, setEbc] = useState<boolean>(false);
  const [numberOfBeers, setNumberOfBeers] = useState<number>(25);

  const getBeers = async (resultNumber: number) => {
    const url = "https://api.punkapi.com/v2/beers";
    let urlWithParams = url + `?per_page=${resultNumber}`;
    const res = await fetch(urlWithParams);
    const data = await res.json();
    setBeers(data);
    setBeersOg(data);
  };

  useEffect(() => {
    getBeers(numberOfBeers);
  }, [numberOfBeers]);

  // Range Input Bar

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const userInput = Number(event.currentTarget.value);
    setNumberOfBeers(userInput);
  };

  //Search Bar

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  const filteredBeer = beers.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  // Filter options

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
    if (ebc) {
      filteredBeerList = filteredBeerList.filter(
        (beer: BeerExt) => beer.ebc > 30
      );
    }

    setBeers(filteredBeerList);
  }, [abv, year, acid, ebc, beersOg]);

  const getAbv = () => {
    setAbv(!abv);
  };
  const getYear = () => {
    setYear(!year);
  };
  const getAcid = () => {
    setAcid(!acid);
  };
  const getEbc = () => {
    setEbc(!ebc);
  };


// No results message

const reset = () => window.location.reload()

  if (filteredBeer.length <= 0) {
    return (
      <div>
        <Nav
          searchTerm={searchTerm}
          handleInput={handleInput}
          getAbv={getAbv}
          getYear={getYear}
          getAcid={getAcid}
          getEbc={getEbc}
        />
        <div className="range-input">
          <RangeInput
            id="user-range"
            label={`Number of Beers: ${numberOfBeers}`}
            min={5}
            max={80}
            value={numberOfBeers}
            onChange={handleInputChange}
          />
        </div> 
        <div className="result">
        <p className="result-message">✖️ No results found ✖️</p>
        <button className="result-message--reset" onClick={reset}> ⬅ Go Back </button>
      </div></div>
    );
  }

  return (
    
      <section className="page-container">
        <div>
          <Nav
            searchTerm={searchTerm}
            handleInput={handleInput}
            getAbv={getAbv}
            getYear={getYear}
            getAcid={getAcid}
            getEbc={getEbc}
          />
        </div>
        <ScrollToTop smooth color="purple" />
             
                <div className="range-input">
                  <RangeInput
                    id="user-range"
                    label={`Number of Beers: ${numberOfBeers}`}
                    min={5}
                    max={80}
                    value={numberOfBeers}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="product-container">
                  {filteredBeer.map((product) => (
                    <CardList
                      key={product.id}
                      name={product.name}
                      image_url={product.image_url}
                      tagline={product.tagline}
                    />
                  ))}
                </div> <section>
              </section>
        
        
      </section>
    
  );
}

export default App;
