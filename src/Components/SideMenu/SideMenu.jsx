import React from "react";
import "./Sidemenu.css";
import Profile from "../Profile/Profile";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../Redux/Slice/AuthSlice';

function SideMenu() {
    const isAuth = localStorage.getItem("isAuth");
    const dispatch = useDispatch();
    const handleLogout = () => {
        // localStorage.removeItem("accToken");
        // localStorage.removeItem("isAuth");
        dispatch(logout());
        window.location.reload();
    };
    const userData = useSelector((state) => state.auth.user_data);
    return (
        <>
            <Link to='/playlist'>Playlist</Link>
            <hr />
            {isAuth ? (
                <>
                    <Profile data={userData} />
                    <button className="mb-3 login-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            ) : (
                <></>
                // <a
                //     className="mb-3 login-btn"
                //     onClick={() => {
                //         redirect();
                //     }}
                // >
                //     Login
                // </a>
            )}
        </>
    );
}

export default SideMenu;
