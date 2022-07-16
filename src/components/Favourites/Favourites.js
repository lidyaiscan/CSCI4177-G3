/* Written by Liam Brown */
import React from "react";
import Product from "../Products/Product";
import { useState, useEffect } from "react";
export default function Favourites() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const prods = await (await fetch("http://localhost:4000/products")).json();
        setProducts(prods);
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    const [favorites, setFavorites] = useState(
        localStorage.getItem("favorites")
            ? Array.from(localStorage.getItem("favorites").split(","))
            : undefined
    );
    return (
        <>
            <h1> Favourites: {favorites ? favorites.length : 0}</h1>
            <div className="tile-listings col">
                {favorites &&
                    products.length > 0 &&
                    favorites.map((name, index) => (
                        <Product key={index} p={products.find((x) => x.name === name)} />
                    ))}
            </div>
        </>
    );
}
