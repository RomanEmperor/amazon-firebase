import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* Login page */}
          <Route path="/login">
            <Login />
          </Route>
          {/* Checkout Page */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* Home Page */}
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
