import React from "react";
import "./Sidemenu.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { logout } from "../../Redux/Slice/AuthSlice";
import { MdPlaylistPlay } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

function SideMenu() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <>
            <Link to={`/playlist`} className="text-decoration-none mb-3">
                <div className="item-menu mb-3 px-3 d-flex">
                    <MdPlaylistPlay size="20" color="rgb(2, 95, 95)"/>
                    <span className="text-menu px-2">Playlist</span>
                </div>
            </Link>
            <hr />
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
