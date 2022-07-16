import React from "react";
import './Product.css';
import { useState, useEffect } from 'react';
import edit from "../../assets/edit.jpg";
import trash from "../../assets/trash.jpg";

export default function Product(props) {

    //retrieve product data from MongoDB
    const [products, setProducts] = useState([{
        name: '',
        measure: '',
        unit: '',
        price: '',
        rating: '',
        ratingCount: '',
        image: ''
    }])

    useEffect(() => {
        fetch("/products").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setProducts(jsonRes));
    })

    const product = products.find({ name: props.name });

    return (
        <div className="border 1" key={props.index}>
            <div className="Product">
                <div className="Container">
                    <div className="Label">
                        <h2>{product.name}</h2>
                    </div>
                    <div className="Info">
                        <img src={product.img} alt="galaApple" />
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <p>{product.stock}</p>
                    </div>
                    <div className="Actions">
                        <img src={edit} alt="edit" className="Img" onClick={() => props.editItem(product.pId)} />
                        <img src={trash} alt="trash" className="Img" onClick={() => props.removeFromList(product.pId)} />
                    </div>
                </div>
            </div>
        </div>
    );
}
