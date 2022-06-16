import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Register from './components/Reg/Reg'
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Contact from './components/feedback/feedback';
import Search from './components/list/Search';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Login />}></Route>
                <Route path="/" element={<App />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
