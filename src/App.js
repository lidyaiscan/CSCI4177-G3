import "./App.css";
import { React } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/nav";
import Foot from "./components/foot/foot";
import Home from "./components/Home/Home";
import Register from "./components/Reg/Reg";
import Profile from "./components/Reg/Reg";
import Login from "./components/Login/Login";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import Contact from "./components/feedback/feedback";
import Favourites from "./components/Favourites/Favourites";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminProducts from "./components/AdminProducts/AdminProducts";
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
                    <Route path="/adminLogin" element={<AdminLogin />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/favourites" element={<Favourites />}></Route>
                    <Route path="/adminDashboard" element={<AdminDashboard />}></Route>
                    <Route path="/adminProducts" element={<AdminProducts />}></Route>
                </Routes>
                <Foot />
            </BrowserRouter>
        </div>
    );
}

export default App;
