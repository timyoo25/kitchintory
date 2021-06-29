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

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/items">
          <Items user={user} />
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
          <ItemDetail user={user} />
        </Route>

        <Route exact path="/create">
          <ItemCreate user={user} />
        </Route>

        <Route exact path="/items/:id/edit">
          <ItemEdit user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
