import React from "react";
import './Product.css';
import apple from "../../assets/apple.jpg";
import edit from "../../assets/edit.jpg";
import trash from "../../assets/trash.jpg";

export default function Product(props) {
    return (
        <div className="border 1" key={props.index}>
            <div className="Product">
                <div className="Container">
                    <div className="Label">
                        <h2>{props.product}</h2>
                    </div>
                    <div className="Info">
                        <img src={apple} alt="galaApple" />
                        <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                        </p>
                    </div>
                    <div className="Actions">
                        <img src={edit} alt="edit" className="Img" />
                        <img src={trash} alt="trash" className="Img" onClick={() => props.removeFromList(props.index)} />
                    </div>
                </div>
            </div>
        </div>
    );
}
