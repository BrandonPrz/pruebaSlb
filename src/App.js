import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to="/">Home</Link>
    <br />
    <Link to="/category">Category</Link>
    <br />
    <Link to="/products">Products</Link>
  </div>
);

const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
);

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/category">
          <Category />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
