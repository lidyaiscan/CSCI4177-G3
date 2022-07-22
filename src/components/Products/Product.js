/* Written by Liam Brown */
import React from "react";
import "../../App.css";
export default function Product(props) {
	if (props.p !== undefined)
		return (
			<div className="listing">
				<a href={"/listing/?id=" + props.p.pId}>
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
	else return <div>Loading...</div>;
}
