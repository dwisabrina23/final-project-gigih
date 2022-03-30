import { v4 as uuidv4 } from "uuid";

//url to auth spotify
const useGetAuth = () => {
    const isAuth = localStorage.getItem("isAuth");
    const redirect = () => {
        var client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        var redirect_uri = process.env.REACT_APP_BASE_URL;
        var scope = "playlist-modify-private";
        const state = '123'
        localStorage.setItem("stateKey", state);
        var url = "https://accounts.spotify.com/authorize";
        url += "?response_type=token";
        url += "&redirect_uri=" + encodeURIComponent('http://localhost:3000/callback');
        url += "&client_id=" + encodeURIComponent(client_id);
        url += "&scope=" + encodeURIComponent(scope);
        url += "&state=" + encodeURIComponent(state);
        //redirect to spotify auth
        window.location.replace(url);
    };
    const callback = () => {
        const hash = window.location.hash;
        const params = hash.substring(1).split("&");
        const result = params.reduce((acc, curr) => {
            const [key, value] = curr.split("=");
            acc[key] = value;
            console.log(acc);
            return acc
        }, {})//put them in object
        // console.log("result", result); 
        if(hash) {
            return result;
        }
    }
    return{
        redirect, callback, isAuth
    }
};
export {useGetAuth};