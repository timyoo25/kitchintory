import { Route } from "react-router-dom"
import ItemDetail from "./screens/ItemDetail/ItemDetail";
import ItemEdit from "./screens/ItemEdit/ItemEdit"
import Items from "./screens/Items/Items"
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Items />
      </Route>

      <Route exact path="/items/:id">
        <ItemDetail />
      </Route>

      <Route exact path="/items/:id/edit">
        <ItemEdit />
      </Route>

    </div>
  );
}

export default App;
