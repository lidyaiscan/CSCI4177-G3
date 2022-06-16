import "../../style.css";
import "../../styles/navbar.css";
import { BrowserRouter as Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Navigation() {
  const navigate = useNavigate();
  const navigateSearch = () => {
    navigate("/search");
  };
  return (
    <div>
      <div id="top">
        <div id="search">
          <Form>
            <Form.Group controlId="searchBar">
              <Form.Control
                id="search"
                type="text"
                placeholder="Search products"
                fullwidth
              />
              <button
                type="Submit"
                value="Submit"
                className="Submit"
                onClick={navigateSearch}
              >
                Submit
              </button>
            </Form.Group>
          </Form>
        </div>
        <div className="top-links">
          <a href="/login">Log in</a>
        </div>
        <div className="top-links">
          <a href="/cart">Cart</a>
        </div>
      </div>
      <nav className="navigation">
        <div className="navigation-menu">
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/flyers">Flyers</Link>
            </li>
            <li>
              <Link to="/delivery">Delivery & pick-up</Link>
            </li>
            <li>
              <Link to="/about">Our Story</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
