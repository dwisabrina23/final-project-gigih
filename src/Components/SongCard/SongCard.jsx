import React, { useEffect } from "react";
import { BsFillPlayFill, BsX } from "react-icons/bs";
import "./Song.css";

function SongCard({ data, selectedSong, handleAdd, handleRemove }) {
    const isSelected = selectedSong.includes(data.id);

    return (
        <div className="col-md-4 songs">
            <div className="card song">
                <div className="song-img-wrapper">
                    <img
                        className="card-img-top"
                        src={data.album.images[1].url}
                        alt="Eye_of_the_Storm"
                    />
                    {isSelected ? (
                        <button
                            className="btn btn-primary-outline rounded-pill play-btn"
                            onClick={() => handleRemove(data.id)}
                        >
                            <BsX className="btn-icon" color="rgb(2, 95, 95)" size={27}/>
                            Deselect
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary rounded-pill play-btn"
                            onClick={() => handleAdd(data.id)}
                        >
                            <BsFillPlayFill color="eff5ed" size={27} />
                            Select
                        </button>
                    )}
                </div>
                <div className="card-body">
                    <h4
                        className="song-title"
                        style={
                            data.name.length > 25 ? { fontSize: "0.89rem" } : {}
                        }
                    >
                        {data.name}
                    </h4>
                    <small className="song-album">{data.album.name}</small>
                    <p className="artist">{data.artists[0].name}</p>
                </div>
            </div>
        </div>
    );
}

export default SongCard;
