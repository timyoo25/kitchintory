import { Route } from "react-router-dom"
import Items from "./screens/Items/Items"
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Items />
      </Route>
    </div>
  );
}

export default App;
