import { Route, Switch } from "react-router-dom";
import ItemCreate from "./screens/ItemCreate/ItemCreate";
import ItemDetail from "./screens/ItemDetail/ItemDetail";
import ItemEdit from "./screens/ItemEdit/ItemEdit";
import Items from "./screens/Items/Items";
import Home from "./screens/Home/Home";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import SignOut from "./screens/SignOut/SignOut";
import { Provider } from "./Context";
import "./App.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/items">
            <Items />
          </Route>

          <Route path="/sign-up">
            <SignUp />
          </Route>

          <Route path="/sign-in">
            <SignIn />
          </Route>

          <Route path="/sign-out">
            <SignOut />
          </Route>

          <Route exact path="/items/:id">
            <ItemDetail />
          </Route>

          <Route exact path="/create">
            <ItemCreate />
          </Route>

          <Route exact path="/items/:id/edit">
            <ItemEdit />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
