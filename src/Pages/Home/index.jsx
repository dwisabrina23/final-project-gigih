import React from "react";
import PageTitle from "../../Components/Title/PageTitle";
import SongCard from "../../Components/SongCard/SongCard";
import "./Home.css";
import CreatePlaylist from "../../Components/SideMenu/CreatePlaylist";
import data from "./StaticData";

function HomePage(props) {
    return (
        <div className="row">
            <div className="col-md-3 sidemenu">
                <CreatePlaylist />
            </div>
            <div className="col-md-9 song-section">
                <PageTitle title="Your Songs" />
                <div className="row">
                    {data.map((song, idx) => (
                        <SongCard data={song} key={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
