import React from "react";
import {BsFillPlayFill} from 'react-icons/bs';
import './Song.css';
function SongCard({data}) {
    return (
        <div className="d-flex songs">
            <div className="card song">
                <div className="song-img-wrapper">
                    <img
                        className="card-img-top"
                        src={data.album.images[1].url}
                        alt="Eye_of_the_Storm"
                    />
                    <button className="btn btn-primary rounded-pill play-btn">
                        <BsFillPlayFill color="eff5ed" size={27} />
                        Select
                    </button>
                </div>
                <div className="card-body">
                    <h4 className="song-title">{data.name}</h4>
                    <small className="song-album">{data.album.name}</small>
                    <p className="artist">{data.artists[0].name}</p>
                </div>
            </div>
        </div>
    );
}

export default SongCard;
