import React, {useState, useEffect} from "react";
import { BsFillPlayFill, BsX } from "react-icons/bs";
import "./Song.css";

type trackProps = {
    data?: any,
    handleSelect: Function,
    isSelected: boolean,
}

function SongCard({ data, handleSelect, isSelected}: trackProps) {
    
    const handleClick = (e: any, uri: string) => {
        e.preventDefault();
        handleSelect(uri);
    };

    return (
        <div className="col-md-4 songs">
            <div className="card song">
                <div className="song-img-wrapper">
                    <img
                        className="card-img-top"
                        src={data.album.images[1].url}
                        alt={data.name}
                    />
                    {isSelected ? (
                        <button
                            className="btn btn-primary-outline rounded-pill play-btn d-flex"
                            onClick={(e) => handleClick(e, data.uri)}
                        >
                            <BsX className="btn-icon" color="rgb(2, 95, 95)" size={27}/>
                            Deselect
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary rounded-pill play-btn d-flex"
                            onClick={(e) => handleClick(e, data.uri)}
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
