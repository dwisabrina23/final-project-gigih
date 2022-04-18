import React from "react";
import "./Sidemenu.css";
import Profile from "../Profile/Profile";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Slice/AuthSlice";
import { MdPlaylistPlay } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

function SideMenu() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuth = useSelector((state) => state.auth.login);
    const userData = useSelector((state) => state?.auth.user_data);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <>
            {isAuth && <Profile data={userData} />}
            <hr />
            <Link to={`/playlist`} className="text-decoration-none mb-3">
                <div className="item-menu mb-3 px-3 d-flex">
                    <MdPlaylistPlay size="20" color="rgb(2, 95, 95)"/>
                    <span className="text-menu px-2">Playlist</span>
                </div>
            </Link>
            <Link to={`/home`} className="text-decoration-none mb-3">
                <div className="item-menu mb-3 px-3 d-flex">
                    <AiFillHome size="20" color="rgb(2, 95, 95)" />
                    <span className="text-menu px-2">Home</span>
                </div>
            </Link>
            <button
                className="mb-3 login-btn btn btn-primary rounded"
                onClick={handleLogout}
            >
                Logout
            </button>
        </>
    );
}

export default SideMenu;
