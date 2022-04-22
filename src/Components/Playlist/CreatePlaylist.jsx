import React, {useState} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

//Toast
import { Toaster } from 'react-hot-toast';
import {ToastError, ToastSuccess} from '../../Components/Toast/CustomToast'

function CreatePlaylist(props) {
    const token = useSelector((state) => state.auth.token);
    const userID = useSelector((state) => state.auth.user_id);

    const initForm = {
        title:"",
        description:"",
    }
    const [playlist, setPlaylist] = useState(initForm);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPlaylist({
            ...playlist,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefalut();
        if(playlist.title !== "" && playlist.description !== ""){
            handleCreatePlaylist(playlist);
            setPlaylist(initForm);
        }else {
            ToastError('Fill all the form!')
        }
    }

    const handleCreatePlaylist = (values) => {
        let dataPlaylist = {
            name: values.title,
            description: values.description,
            public: false,
        };
        const API_URL = 'https://api.spotify.com/v1';
        axios
            .post(`${API_URL}/users/${userID}/playlists`, dataPlaylist, {headers: {Authorization: `Bearer ${token}`}})
            .then((resp) => {
                if(resp.status === 200){
                    console.log("playlist added!");
                    return(
                        ToastSuccess("playlist added!")
                    )
                }
            })
            .catch((e) => {
                console.error(e)
                return(
                    ToastError("something error!")
                )
            })
    };

    return (
        <div className='mb-3'>
            <Toaster/>
            <h1 className="text-center txt-create">Create Playlist</h1>
            <div className="form-wrapper mb-3 w-50">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your title here"
                            name="title"
                            id="title"
                            value={playlist.title}
                            onChange={handleChange}
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
                            value={playlist.description}
                            onChange={handleChange}
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
        </div>
    );
}

export default CreatePlaylist;