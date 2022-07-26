import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
// import AuthProvider from "./context/AuthProvider";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home></Home> : <Register></Register>}
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/profile/:username">
            <Profile></Profile>
          </Route>

          <Route path="/login">
            {user ? <Redirect to="/"></Redirect> : <Login></Login>}
          </Route>
          <Route path="/register">
            {user ? <Redirect to="/"></Redirect> : <Register></Register>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
