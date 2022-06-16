import "./App.css";
import chocolate from "./assets/chocolate.jpg";
import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import CounterInput from 'react-bootstrap-counter';
import { Button } from "react-bootstrap";

//Guide to implement counter with increment and decrement buttons by Tutorial Funda: https://www.tutorialfunda.com/reactjs/increment-decrement-number-using-react-hooks-counter/
function ButtonDecrement(props) {

    return (
        <button className="counter" onClick={props.onClickFunc}>
            -
        </button>
    )
}

function ButtonIncrement(props) {

    return (
        <button className="counter" onClick={props.onClickFunc}>
            +
        </button>
    )
}

function Display(props) {
    return (
        <label className="counter" >{props.message}</label>
    )
}

function Listing() {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }
    return (
        <div>
            <div>
                <p>Products/Category/Sub category/Product title</p>
            </div>
            <div id="product-detail">
                <div className="listingDetailImg col-md-3">
                    <img src={chocolate} alt="chocolate" className="listing-photo-large" />
                </div>
                <div className="listingDetail">
                    <h2>Chocolate, 100g</h2>
                    <p>Brand</p>
                    <p>100 gram</p>
                    <p>⭐⭐⭐⭐ (41)</p>
                    <h3>Quantity</h3>
                    <ButtonDecrement onClickFunc={decrementCounter} />
                    <Display message={counter} />
                    <ButtonIncrement onClickFunc={incrementCounter} />
                    <Button className="cart">Add to cart</Button>
                </div>
            </div>
            <div className="listingDescription">
                <h3>Product description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis euismod nisi, at ullamcorper diam.
                    Maecenas tristique feugiat felis, vel rhoncus justo.
                    Sed ultrices metus vel elementum facilisis.
                    Proin mollis sapien ac vestibulum tempor.
                    Quisque massa velit, semper sit amet molestie a, sollicitudin non diam.
                    Phasellus lectus libero, viverra quis ligula eu, cursus molestie massa.
                    <br />
                    <br />
                    Cras vehicula convallis justo, semper ornare nisl laoreet non.
                    Nam purus sem, mollis nec lectus sed, auctor facilisis turpis.
                    Phasellus dapibus, turpis quis pulvinar faucibus, mi nisi commodo eros, nec convallis lorem metus quis nibh.
                    Duis ornare est vel purus rhoncus, ac vulputate odio vulputate.
                    Sed mattis, purus non ullamcorper eleifend, nisi odio consequat felis, sed euismod tortor quam vitae diam.
                    <br />
                    <br />
                    Donec mollis purus eu lorem luctus accumsan.
                    In sed lectus accumsan, rutrum justo sit amet, lacinia ex.
                    Proin lacinia eros purus, euismod accumsan enim gravida eu.
                    Duis faucibus arcu mauris, in maximus metus accumsan quis.
                    In hac habitasse platea dictumst.</p>
            </div>
        </div>
    );
}
export default Listing;