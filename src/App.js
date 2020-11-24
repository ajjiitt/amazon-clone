import "./css/App.css";
import Header from "./Header";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
