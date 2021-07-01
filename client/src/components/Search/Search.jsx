import "./Search.css";

const Search = (props) => {
  console.log(props)
  return (
    <form className="search-form" onSubmit={(e) => props.handleSubmit(e)}>
      <input
        className="search search-input"
        value={props?.searchInput}
        onChange={(e) => props.handleChange(e)}
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
