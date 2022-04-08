import React from 'react';
import {useGetAuth} from "../../Hooks/useGetAuth";
import {useDispatch} from "react-redux";
import {setToken} from '../../Redux/Slice/AuthSlice'
function LoginPage(props) {
    const { redirect, callback } = useGetAuth();
    const isAuth = localStorage.getItem("isAuth");
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

    const handleLogin = () => {
        redirect();
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-3 illustration" style={{background:"green"}}></div>
                <div className="col-md-9 d-flex justify-content-center align-item-center">
                    <button className='btn btn-primary' onClick={handleLogin}>Login with Spotify</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;