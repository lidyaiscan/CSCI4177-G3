import "./App.css";
import { React } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/nav";
import Foot from "./components/foot/foot";
import Home from "./components/Home/Home";
import Register from "./components/Reg/Reg";
import Profile from "./components/Reg/Reg";
import Login from "./components/Login/Login";
import Contact from "./components/feedback/feedback";
import Favourites from "./components/Favourites/Favourites";
import Listing from "./Listing";
import Search from "./components/list/Search";
// Importing bootstrap to be used across the app
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="" element={<Home />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/favourites" element={<Favourites />}></Route>
                    <Route path="/listing" element={<Listing />}></Route>
                    <Route path="/search" element={<Search />}></Route>
                </Routes>
                <Foot />
            </BrowserRouter>
        </div>
    );
}

export default App;
