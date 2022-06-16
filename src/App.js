import "./App.css";
import Register from "./components/Reg/Reg";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Contact from "./components/feedback/feedback";
import Favourites from "./components/Favourites/Favourites";
import { Routes, Route } from "react-router-dom";
// Importing bootstrap to be used across the app
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav/nav";

function App() {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path="*" element={<Login />}></Route>
				<Route path="/" element={<Register />}></Route>
				<Route
					path="/register"
					element={<Register />}
				></Route>
				<Route
					path="/profile"
					element={<Profile />}
				></Route>
				<Route
					path="/login"
					element={<Login />}
				></Route>
				<Route
					path="/Search"
					element={<Login />}
				></Route>
				<Route
					path="/contact"
					element={<Contact />}
				></Route>
				<Route
					path="/favourites"
					element={<Favourites />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
