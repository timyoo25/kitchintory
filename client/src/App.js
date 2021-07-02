import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemCreate from "./screens/ItemCreate/ItemCreate";
import ItemDetail from "./screens/ItemDetail/ItemDetail";
import ItemEdit from "./screens/ItemEdit/ItemEdit"
import Items from "./screens/Items/Items"
import Home from "./screens/Home/Home"
import SignIn from "./screens/SignIn/SignIn"
import SignUp from "./screens/SignUp/SignUp"
import SignOut from "./screens/SignOut/SignOut"
import './App.css';
import { verifyUser } from "./services/users"
import { useHistory } from 'react-router-dom'


function App() {
  const [user, setUser] = useState(null)
  const [items, setItems] = useState([]);
  const [searchResult, setSearchResult] = useState(null)
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  // eslint-disable-next-line
  }, []);

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
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Home
            user={user}
            items={items}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setSearchResult={setSearchResult}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </Route>

        <Route exact path="/items">
          <Items user={user}
            items={items}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setSearchResult={setSearchResult}
            setItems={setItems}
            searchResult={searchResult}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </Route>

        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>

        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>

        <Route path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>

        <Route exact path="/items/:id">
          <ItemDetail
            user={user}
            items={items}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setSearchResult={setSearchResult}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </Route>

        <Route exact path="/create">
          <ItemCreate
            user={user}
            items={items}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setSearchResult={setSearchResult}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </Route>

        <Route exact path="/items/:id/edit">
          <ItemEdit
            user={user}
            items={items}
            setItems={setItems}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setSearchResult={setSearchResult}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
