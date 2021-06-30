import './Search.css'

const Search = (props) => {

  return (
    <form className="search-form" onSubmit={(e) => props.handleSubmit(e)}>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => props.handleChange(e)}
        name="Search"
        placeholder="Search"
        type="text"
        autoFocus
      />
      <button>Search</button>
    </form>
  )
}

export default Search