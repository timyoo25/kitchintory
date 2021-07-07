import "./Search.css";
import { useContext } from "react";
import { Context } from '../../Context'
import { useHistory } from "react-router-dom";

const Search = (props) => {
  const { items, setSearchResult,
    searchInput, setSearchInput } = useContext(Context)
  const history = useHistory();

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(
      event.target.value
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchInput) {
      const results = items.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchResult(results);
    } else {
      setSearchResult(items);
    }
    history.push("/items");
  };
  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="search search-input"
        value={searchInput}
        onChange={(e) => handleChange(e)}
        name="Search"
        placeholder="Search"
        type="text"
        autoFocus
      />
      <button className="search search-button">Search</button>
    </form>
  );
};

export default Search;
