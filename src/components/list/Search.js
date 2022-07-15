import * as React from 'react'
import '../../App.css';
import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';
import useCollapse from 'react-collapsed';

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
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}


function Search(props) {
    const navigate = useNavigate();

    const navigateListing = () => {
        navigate("/listing");
    };

    //retrieve product data from MongoDB
    const [products, setProducts] = React.useState([{
        name: '',
        measure: '',
        unit: '',
        price: '',
        rating: '',
        ratingCount: '',
        image: ''
    }])
    React.useEffect(() => {
        fetch("/products").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setProducts(jsonRes));
    })
    return (
        <div>
            <Form>
                <Form.Group controlId="searchBar">
                    <Form.Control id="search" type="text" placeholder="Search products" fullwidth />
                    <button type="Submit" value="Submit" className='Submit'>Submit</button>
                </Form.Group>
            </Form>
            <h2>Showing 3 results for chocolate</h2>
            <h3>Applied filters:</h3>
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
                        <label>
                            <input type="checkbox" /> Graffiti Confectionery
                            <br />
                            <input type="checkbox" /> Potter Ltd.
                        </label>
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
                            <input type="text" id="min-price" name="min-price" placeholder='Minimum price' />
                            <br />
                            <input type="text" id="max-price" name="max-price" placeholder='Maximum price' />
                        </label>
                    </Filter>
                </div>
                <div className="tile-listings col-md-9">
                    {products.map(product =>
                        <div className="listing">
                            <a href="/listing" onClick={navigateListing}>
                                <img src={product.image} alt="" className="listing-photo" />
                                <p>{product.name}</p>
                                <p>{product.measure} {product.unit}</p>
                                <p>{product.rating} stars ({product.ratingCount})</p>
                                <p>${product.price}</p>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search;