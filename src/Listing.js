/* Written by Song Pho & Liam Brown */
import "./App.css";
import React, { useState } from "react";
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
	let decrementCounter = () => setCounter(counter - 1);
	if (counter <= 1) {
		decrementCounter = () => setCounter(1);
	}
	const [favorites, setFavorites] = useState(
		localStorage.getItem("favorites")
			? Array.from(
					localStorage
						.getItem("favorites")
						.split(",")
						.filter((x) => x.length > 0)
			  )
			: []
	);

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
			brand: "",
		},
	]);

	let productIdParam = window.location.search;
	let query = new URLSearchParams(productIdParam);
	let idQuery = query.get("id");
	const fetchProducts = async () => {
		const prods = await (
			await fetch(`https://food4u-backend.herokuapp.com/product/${idQuery}`)
		).json();
		setProducts(prods);
	};
	React.useEffect(() => {
		fetchProducts();
	}, []);
	return (
		<div>
			<div>
				{products.map((productSelected, key) => (
					<p key={key}>Products/Category/Sub category/{productSelected.name}</p>
				))}
			</div>
			<div id="product-detail">
				<div className="listingDetailImg col-md-3">
					{products.map((productSelected, key) => (
						<div key={key}>
							<img
								src={productSelected.image}
								alt={productSelected.name}
								className="listing-photo-large"
							/>
							{favorites.find(
								(pName) =>
									pName.toLocaleLowerCase() ===
									productSelected.name.toLocaleLowerCase()
							) ? (
								<Button
									className="btn btn-secondary"
									onClick={(e) => {
										var copy = [...favorites];
										copy.splice(
											copy.indexOf(
												`${products.map(
													(productSelected) => productSelected.name
												)}`
											),
											1
										);
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
										if (
											!favorites.find(
												(pName) =>
													pName ===
													products.map(
														(productSelected) => productSelected.name
													)
											)
										) {
											localStorage.setItem(
												"favorites",
												favorites.concat(
													`${products.map(
														(productSelected) => productSelected.name
													)}`
												)
											);
											setFavorites(
												localStorage.getItem("favorites").split(",")
											);
										}
									}}
								>
									Favourite
								</Button>
							)}
						</div>
					))}
				</div>
				<div className="listingDetail">
					{products.map((productSelected, key) => (
						<h2 key={key}>{productSelected.name}</h2>
					))}
					{products.map((productSelected, key) => (
						<p key={key}>
							{productSelected.measure} {productSelected.unit}
						</p>
					))}
					{products.map((productSelected, key) => (
						<p key={key}>
							{productSelected.rating}⭐ ({productSelected.ratingCount})
						</p>
					))}
					<h3>Quantity</h3>
					<ButtonDecrement onClickFunc={decrementCounter} />
					<Display message={counter} />
					<ButtonIncrement onClickFunc={incrementCounter} />
					<Button className="cart">Add to cart</Button>
				</div>
			</div>
			<div className="listingDescription">
				<h3>Product description</h3>
				{products.map((productSelected, key) => (
					<p key={key}>{productSelected.description}</p>
				))}
			</div>
		</div>
	);
}
export default Listing;
