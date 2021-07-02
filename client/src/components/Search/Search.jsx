import "./Search.css";
import { useContext } from "react";
import { userContext, itemContext, resultContext, inputContext } from '../../Context'
import { useHistory } from 'react-router-dom'


const Search = (props) => {
  const [user, setUser] = useContext(userContext)
  const [items, setItems] = useContext(itemContext)
  const [searchResult, setSearchResult] = useContext(resultContext)
  const [searchInput, setSearchInput] = useContext(inputContext)

const history = useHistory() 
const handleChange = (event) => {
  event.preventDefault()
  // console.log(event)
  setSearchInput(
    // ...searchInput,
    event.target.value
  )
}

const handleSubmit = (event) => {
  event.preventDefault()
  if (searchInput) {
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    )
    setSearchResult(results)
  } else {
    setSearchResult(items)
  }
  // setSearchInput("")
  history.push('/items')
}
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
