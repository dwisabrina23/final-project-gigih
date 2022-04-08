import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import HomePage from '../Pages/Home';
import LoginPage from '../Pages/Login/LoginPage';
import PLaylist from '../Pages/Playlist/PLaylist';

export default function Router(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path='/playlist' element={<PrivateRoute><PLaylist/></PrivateRoute>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

function PrivateRoute({ children }) {
    const isLoggedIn = useSelector((state) => state.auth.login);
    return isLoggedIn ? children : <Navigate to="/login" />;
}
