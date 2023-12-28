import Search from "../../components/Search/Search";
import "./Nav.scss";
import { FilterListProps } from "../../types/Beer";
import logo from "../../assets/images/logo.jpeg";

const Nav = ({
  searchTerm,
  handleInput,
  getAbv,
  getAcid,
  getYear,
  getEbc
}: FilterListProps) => {
    const reset = () => window.location.reload()

  return (
    <section className="nav">
      <div className="nav__upper">
        <img
          className="logo"
          src={logo}
          alt="Brewdog logo"
        />
      </div>
      <div className="nav__middle">
        <section className="checkbox">
          <div className="checkbox__ABV">
            <label className="checkbox__ABV--label">{"Alcohol > 6"}</label>
            <input
              className="checkbox__ABV--box"
              type="checkbox"
              value="setABV"
              onChange={getAbv}
            />
          </div>
          <div className="checkbox__Classic">
            <label className="checkbox__Classic--label">Classic Range</label>
            <input
              className="checkbox__Classic--box"
              type="checkbox"
              value="setYear"
              onChange={getYear}
            />
          </div>
          <div className="checkbox__Ph">
            <label className="checkbox__Ph--label">{"pH < 4"}</label>
            <input
              className="checkbox__Ph--box"
              type="checkbox"
              value="SetAcid"
              onChange={getAcid}
            />
          </div>
          <div className="checkbox__Ebc">
            <label className="checkbox__Ebc--label">{"Dark Beers"}</label>
            <input
              className="checkbox__Ebc--box"
              type="checkbox"
              value="SetEbc"
              onChange={getEbc}
            />
          </div>
        </section>
      </div>
      <div className="nav__lower">
        <Search searchTerm={searchTerm} handleInput={handleInput} />
        <button className="nav__lower--reset" onClick={reset}> ⏪︎ Reset </button>
      </div>
    </section>
  );
};

export default Nav;
