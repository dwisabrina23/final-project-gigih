import React from "react";
import './Playlist.css';

function CreatePlaylist(props) {
    return (
        <>
            <h1 className="text-center txt-create">Create Playlist</h1>
            <hr />
            <div className="form-wrapper">
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
        </>
    );
}

export default CreatePlaylist;
