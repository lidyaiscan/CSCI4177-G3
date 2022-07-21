/* Written by Song Pho */
import * as React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import useCollapse from "react-collapsed";

//function Filter - collapsible sections for the filters. Modified from the tutorial by Shalitha Suranga, from: https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/
function Filter(props) {
    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0,
    };
    const { getCollapseProps, getToggleProps } = useCollapse(config);

    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                <div className="title">{props.title}</div>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">{props.children}</div>
            </div>
        </div>
    );
}

function Search(props) {
    const navigate = useNavigate();

    const navigateListing = () => {
        navigate('/listing?id=');
    };

    //retrieve product data from MongoDB
    const [products, setProducts] = React.useState([
        {
            pId: "",
            name: "",
            measure: "",
            unit: "",
            price: "",
            rating: "",
            ratingCount: "",
            image: "",
            brand: ""
        },
    ]);
    //Search feature - currently not working properly
    let search = window.location.search;
    let query = new URLSearchParams(search);
    let searchQuery = query.get("searchQuery");
    const fetchProducts = async () => {
        const prods = await (
            await fetch(`https://food4u-backend.herokuapp.com/search/${searchQuery}`)
        ).json();
        setProducts(prods);
    };
    React.useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Showing search results for "{searchQuery}"</h2>
            <div className="searchResults">
                <div>
                    <Filter title="Category">
                        <label>
                            <input type="checkbox" /> Vegetables
                            <br />
                            <input type="checkbox" /> Snacks and Confectionery
                            <br />
                            <input type="checkbox" /> Juice
                        </label>
                    </Filter>
                    <Filter title="Brand">
                        {products.map((product) => (
                            <label>
                                <input type="checkbox" /> {product.brand}
                                <br />
                            </label>
                        ))}
                    </Filter>
                    <Filter title="Rating">
                        <label>
                            <input type="radio" name="rating" /> ⭐⭐⭐⭐⭐
                            <br />
                            <input type="radio" name="rating" /> ⭐⭐⭐⭐ & up
                            <br />
                            <input type="radio" name="rating" /> ⭐⭐⭐ & up
                            <br />
                            <input type="radio" name="rating" /> ⭐⭐ & up
                            <br />
                            <input type="radio" name="rating" /> ⭐ & up
                        </label>
                    </Filter>
                    <Filter title="Price">
                        <label>
                            <input
                                type="number"
                                id="min-price"
                                name="min-price"
                                placeholder="Minimum price"
                            />
                            <br />
                            <input
                                type="number"
                                id="max-price"
                                name="max-price"
                                placeholder="Maximum price"
                            />
                        </label>
                    </Filter>
                </div>
                <div className="tile-listings col-md-9">
                    {products.map((product) => (
                        <div className="listing">
                            <a href={"/listing?id=" + product.pId} onClick={navigateListing}>
                                <img src={product.image} alt="" className="listing-photo" />
                                <p>{product.name}</p>
                                <p>
                                    {product.measure} {product.unit}
                                </p>
                                <p>
                                    {product.rating}⭐ ({product.ratingCount})
                                </p>
                                <p>${product.price}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Search;
