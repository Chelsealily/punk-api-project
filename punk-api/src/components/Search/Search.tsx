import "./Search.scss"
import { FormEventHandler } from "react";

type SearchProps = {
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
  };

const Search = ({searchTerm, handleInput}: SearchProps) => {
    
  return (
    <section className="search-bar">
    <input className="search-bar__bar" type="text" placeholder="🔎 Search.."
        value={searchTerm}
        onInput={handleInput}/>
     </section>
  )
}

export default Search;