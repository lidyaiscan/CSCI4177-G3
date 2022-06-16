import logo from './logo.svg';
import './App.css';

import Register from './components/Reg/Reg'
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Contact from './components/feedback/feedback';
import { Routes, Route } from 'react-router-dom';

function App() {

    return (
        <Routes>
            <Route path="*" element={<Login />}></Route>
            <Route path="/" element={<Register />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Search" element={<Login />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>

    );
}

export default App;
