/* Written by Song Pho & Liam Brown */
import "./App.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

//Guide to implement counter with increment and decrement buttons by Tutorial Funda: https://www.tutorialfunda.com/reactjs/increment-decrement-number-using-react-hooks-counter/
function ButtonDecrement(props) {
	return (
		<button className="counter" onClick={props.onClickFunc}>
			-
		</button>
	);
}

function ButtonIncrement(props) {
	return (
		<button className="counter" onClick={props.onClickFunc}>
			+
		</button>
	);
}

function Display(props) {
	return <label className="counter">{props.message}</label>;
}

function Listing() {
	const [counter, setCounter] = useState(1);
	const incrementCounter = () => setCounter(counter + 1);
	const product = useLocation().state;
	const [favorites, setFavorites] = useState(
		localStorage.getItem("favorites")
			? Array.from(localStorage.getItem("favorites").split(","))
			: []
	);
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
					<img
						src={product.image}
						alt={product.name}
						className="listing-photo-large"
					/>
					{favorites.length > 0 &&
					favorites &&
					favorites !== undefined &&
					favorites.find((pName) => pName === product.name) ? (
						<Button
							className="btn btn-secondary"
							onClick={(e) => {
								var copy = [...favorites];
								copy.splice(copy.indexOf(`${product.name}`), 1);
								localStorage.setItem("favorites", copy);
								setFavorites(localStorage.getItem("favorites").split(","));
							}}
						>
							Remove from Favourites
						</Button>
					) : (
						<Button
							className="cart"
							onClick={() => {
								if (!favorites.find((pName) => pName === product.name)) {
									localStorage.setItem(
										"favorites",
										favorites.concat(`${product.name}`)
									);
									setFavorites(localStorage.getItem("favorites").split(","));
								}
							}}
						>
							Favourite
						</Button>
					)}
				</div>
				<div className="listingDetail">
					<h2>{product.name}</h2>
					<p>
						{product.measure}
						{product.unit}
					</p>
					<p>
						{[...Array(parseInt(product.rating))].map((v, i) => (
							<span key={(v, i)} role="img" aria-label="star emoji">
								⭐
							</span>
						))}
						({product.ratingCount})
					</p>
					<h3>Quantity</h3>
					<ButtonDecrement onClickFunc={decrementCounter} />
					<Display message={counter} />
					<ButtonIncrement onClickFunc={incrementCounter} />
					<Button className="cart">Add to cart</Button>
				</div>
			</div>
			<div className="listingDescription">
				<h3>Product description</h3>
				<p>{product.description}</p>
			</div>
		</div>
	);
}
export default Listing;
