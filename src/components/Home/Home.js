import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Products/Product";

export default function Home() {
	//retrieve product data from MongoDB
	const [products, setProducts] = React.useState([]);
	const fetchProducts = async () => {
		const prods = await (await fetch("http://localhost:4000/products")).json();
		setProducts(prods);
	};
	useEffect(() => {
		fetchProducts();
	}, []);
	const navigate = useNavigate();

	const navigateListing = () => {
		navigate("/listing");
	};
	return (
		<div className="tile-listings col">
			{products.map((product, index) => (
				<Product key={index} p={product} />
			))}
		</div>
	);
}
