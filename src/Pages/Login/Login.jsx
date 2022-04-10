import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import {setUser} from "../../Redux/Slice/AuthSlice";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

	const token = useSelector((state) => state.auth.token);
	const handleLogin = (e) => {
		e.preventDefault();
		var stateKey = 'spotify_auth_state';
		var CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
		var REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000/';

		var state = uuidv4();

		localStorage.setItem(stateKey, state);
		var scope =
			'user-read-private user-read-email playlist-modify-private playlist-read-private';

		var url = 'https://accounts.spotify.com/authorize';
		url += '?response_type=token';
		url += '&client_id=' + encodeURIComponent(CLIENT_ID);
		url += '&scope=' + encodeURIComponent(scope);
		url += '&redirect_uri=' + encodeURIComponent(REDIRECT_URL_AFTER_LOGIN);
		url += '&state=' + encodeURIComponent(state);

		window.location = url;
	};

    const handleGetProfile = async (token) => {
        let result;
        try {
            result = await axios.get(`https://api.spotify.com/v1/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const userData = {
                id: result.data.id,
                display_name: result.data.display_name,
                image: result.data.images[0].url,
                email: result.data.email,
            }
            dispatch(setUser(userData))
        } catch (err) {
            console.error(err);
        } finally{
		    navigate("/home");
        }
    };

	if (token) {
        handleGetProfile(token);
	}

	return (
		<div className="login-container">
			<button onClick={(e) => handleLogin(e)} className="btn btn-primary rounded">
				Login with spotify
			</button>
		</div>
	);
};


export default Login;