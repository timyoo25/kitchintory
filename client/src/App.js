import { Route } from "react-router-dom"
import Items from "./screens/Items/Items"
import SignIn from "./screens/SignIn/SignIn"
import SignUp from "./screens/SignUp/SignUp"
import './App.css';
import { verifyUser } from "./services/users"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      <Route exact path="/">
        <Items />
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
    </div>
  );
}

export default App;

