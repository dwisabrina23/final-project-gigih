import React, { useEffect, useState } from "react";
import "./Sidemenu.css";
import { useGetAuth } from "../../Hooks/useGetAuth";
import Profile from "../Profile/Profile";
import axios from "axios";
import CreatePlaylist from "../Playlist/CreatePlaylist";
import {setToken, setUserID} from '../../Redux/Slice/AuthSlice';
import { useDispatch, useSelector } from "react-redux";

function SideMenu() {
    const { redirect, callback } = useGetAuth();
    const isAuth = localStorage.getItem("isAuth");
    const [userData, setUserData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.location.hash) {
            const token = callback().access_token;
            if (token) {
                localStorage.setItem("isAuth", JSON.stringify(true));
                dispatch(setToken(token));
                handleGetProfile(token);
                window.location.hash = "";
            }
        } else if (isAuth) {
            console.log("you are already logged in");
        }
    }, [isAuth]);

    const handleLogout = () => {
        localStorage.removeItem("accToken");
        localStorage.removeItem("isAuth");
        window.location.reload();
    };
    const handleGetProfile = async (token) => {
        let result;
        try {
            result = await axios.get(`https://api.spotify.com/v1/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // store fetch result to searchRes
            console.log(result);
            // setUserData(result.data.user);
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <>
            <CreatePlaylist/>
            <hr />
            {isAuth ? (
                <>
                    <Profile data={userData} />
                    <a className="mb-3 login-btn" onClick={handleLogout}>
                        Logout
                    </a>
                </>
            ) : (
                <a
                    className="mb-3 login-btn"
                    onClick={() => {
                        redirect();
                    }}
                >
                    Login
                </a>
            )}
        </>
    );
}

export default SideMenu;
