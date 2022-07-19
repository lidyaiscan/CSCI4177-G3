import React from "react";
import "./Product.css";
/* Written by Lidya Iscan-Insense */
import edit from "../../assets/edit.jpg";
import trash from "../../assets/trash.jpg";

export default function Product(props) {

    function editItem() {
        localStorage.setItem("product", JSON.stringify(props.product));

        props.editItem();
    }

    function removeFromList() {
        localStorage.setItem("product", JSON.stringify(props.product));

        props.removeFromList();
    }

    return (
        <div className="border 1" key={props.id}>
            <div className="Product">
                <div className="Container">
                    <div className="Label">
                        <h2>{props.product.name}</h2>
                    </div>
                    <div className="Info">
                        <img src={props.product.image} width="275px" height="200px" alt="product" />
                        <p>{props.product.description}</p>
                        <p>Price: {props.product.price}</p>
                        <p>Stock: {props.product.stock}</p>
                    </div>
                    <div className="Actions">
                        <img
                            src={edit}
                            alt="edit"
                            className="Img"
                            onClick={editItem}
                        />
                        <img
                            src={trash}
                            alt="trash"
                            className="Img"
                            onClick={removeFromList}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
