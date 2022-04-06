import React, {useState} from 'react';
import { useSelector } from 'react-redux';
function CreatePlaylist(props) {
    const token = useSelector((state) => state.auth.token);

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
        console.log("submitted", playlist);
        handleCreatePlaylist(playlist);
    }

    const handleCreatePlaylist = (values) => {
        let dataPlaylist = {
            name: values.title,
            description: values.description,
            public: false,
        };
        const API_URL = 'https://api.spotify.com/v1';
        axios
            .post(`${API_URL}/users/${user_id}/playlists`, dataPlaylist, {headers: {Authorization: `Bearer ${token}`}})
            .then((resp) => {
                if(resp.status === 200){
                    console.log("playlist added!");
                }
                console.log("isi response", resp);
            })
            .catch((e) => {
                console.error(e)
            })
        // window.location.reload();
    };

    return (
        <div className='mb-3'>
            <h1 className="text-center txt-create">Create Playlist</h1>
            <div className="form-wrapper mb-3">
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