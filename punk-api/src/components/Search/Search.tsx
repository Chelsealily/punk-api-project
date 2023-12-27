import "./Search.scss";
import { SearchProps } from "../../types/Beer";

const Search = ({ searchTerm, handleInput }: SearchProps) => {
  return (
    <section className="search-bar">
      <input
        className="search-bar__bar"
        type="text"
        placeholder="🔎 Search.."
        value={searchTerm}
        onInput={handleInput}
      />
    </section>
  );
};

export default Search;
