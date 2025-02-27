import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <div className="navbar">
        <Link to="/" className="shop-name">
          Jiggity
        </Link>

        <div className="navbar-right">
          <Link to="/">
            <button className="home-button">Home</button>
          </Link>
          <Link to="shop">
            <button className="shop-button">Shop</button>
          </Link>
          <div className="cart">Items: {cartCount}</div>
        </div>
      </div>
      <Outlet context={[cartCount, setCartCount]} />
    </>
  );
}

export default App;
