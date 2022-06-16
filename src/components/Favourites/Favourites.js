import Product from "../Products/Product";
import { useState } from "react";
export default function Favourites() {
	const [products, setProducts] = useState([
		"Bananas",
		"Lay's Chips",
		"Honeycrisp Apples",
		"Toothpaste",
		"Flour",
		"Sugar",
	]);
	// Remove product from list based on index in an array.
	// Does not persist in any way.
	function removeFromList(index) {
		var copy = [...products];
		copy.splice(index, 1);
		setProducts(copy);
	}

	return (
		<div>
			<div className="container w-75">
				<h1> Favourites: {products.length}</h1>
				{products.map((name, index) => (
					<Product
						key={index}
						product={name}
						index={index}
						removeFromList={() => removeFromList(index)}
					/>
				))}
			</div>
		</div>
	);
}
