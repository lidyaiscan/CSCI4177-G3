import carrot from "../../assets/carrot.jpg";
import potato from "../../assets/potato.jpg";
import tomato from "../../assets/tomato.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	const navigateListing = () => {
		navigate("/listing");
	};
	return (
		<div>
			<main>
				<h1>Grocery Deals</h1>
				<div className="tile-listings col-md-12">
					<div className="listing">
						<a href="/listing" onClick={navigateListing}>
							<img src={carrot} alt="carrots" className="listing-photo" />
							<p>Carrots</p>
							<p>$4.99/3lb bag</p>
							<p>Deal expires on June 12, 2022</p>
						</a>
					</div>
					<div>
						<a href="/listing" onClick={navigateListing}>
							<img src={potato} alt="potato" className="listing-photo" />
							<p>Potatoes</p>
							<p>$2.99/lb</p>
							<p>Deal expires on June 12, 2022</p>
						</a>
					</div>
					<div>
						<a href="/listing" onClick={navigateListing}>
							<img src={tomato} alt="tomato" className="listing-photo" />
							<p>Tomatoes</p>
							<p>$2.99/lb</p>
							<p>Deal expires on June 11, 2022</p>
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}
