import React, {useEffect} from "react";
import "./Playlist.css";
import {useGetAuth} from '../../Hooks/useGetAuth';

function SideMenu({setToken}) {
    localStorage.setItem("isAuth", false);
    const {redirect, callback} = useGetAuth();
    const isAuth = localStorage.getItem('isAuth');
    
    useEffect(()=> {
        if (window.location.hash) {
            const token = callback().access_token
            if (token) {
              setToken(token);
              localStorage.setItem("accToken",token);
              localStorage.setItem("isAuth", true);
              window.location.hash = "";
            }
          } else if (isAuth) {
            console.log("whoops an error occured");
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [isAuth]);

    return (
        <>
            <h1 className="text-center txt-create">Create Playlist</h1>
            <div className="form-wrapper mb-3">
                <form className="form">
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your title here"
                            name="title"
                            id="title"
                        />
                        <label>Title</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea
                            className="form-control"
                            placeholder="describe your playlist"
                            name="description"
                            id="description"
                            defaultValue={""}
                        />
                        <label>Description</label>
                    </div>
                    <button
                        className="btn btn-primary rounded-pill"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <hr/>
            <a className="mb-3 login-btn" onClick={() => {redirect()}}>Login</a>
        </>
    );
}

export default SideMenu;
