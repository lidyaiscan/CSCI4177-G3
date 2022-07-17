/* Written by Liam Brown */
import React from "react";
import Product from "../Products/Product";
import { useState, useEffect } from "react";
export default function Favourites() {
	const [products, setProducts] = useState([]);
	const fetchProducts = async () => {
		const prods = await (
			await fetch("https://food4u-backend.herokuapp.com/products")
		).json();
		setProducts(prods);
	};
	useEffect(() => {
		fetchProducts();
	}, []);
	console.log(products);
	const [favorites, setFavorites] = useState(
		localStorage.getItem("favorites")
			? Array.from(localStorage.getItem("favorites").split(","))
			: []
	);
	return (
		<>
			<h1> Favourites: {favorites ? favorites.length : 0}</h1>
			<div className="tile-listings col">
				{favorites &&
					favorites.length > 0 &&
					products.length > 0 &&
					favorites.map((name, index) => (
						<Product
							key={index}
							p={products.find(
								(x) => x.name.toLocaleLowerCase() === name.toLocaleLowerCase()
							)}
						/>
					))}
			</div>
		</>
	);
}
