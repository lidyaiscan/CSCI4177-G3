/* Written by Liam Brown */
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
export default function Product(props) {
    const navigate = useNavigate();
    return (
        <div className="listing">
            <a
                href="/listing"
                onClick={() => navigate(`/listing`, { state: props.p })}
            >
                <img src={props.p.image} alt="chocolate" className="listing-photo" />
                <p>{props.p.name}</p>
                <p>
                    {props.p.measure}
                    {props.p.unit}
                </p>
                <p>
                    {[...Array(parseInt(props.p.rating))].map((v, i) => (
                        <span key={(v, i)} role="img" aria-label="star emoji">
                            ⭐
                        </span>
                    ))}
                    ({props.p.ratingCount})
                </p>

                <p>${props.p.price}</p>
            </a>
        </div>
    );
}
