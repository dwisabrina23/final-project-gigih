import React, { useState } from "react";
import PageTitle from "../../Components/Title/PageTitle";
import SongCard from "../../Components/SongCard/SongCard";
import SearchButton from "../../Components/Search/SearchButton";
import SideMenu from "../../Components/SideMenu/SideMenu";
import "./Home.css";
import data from "./StaticData";
import axios from "axios";

function HomePage(props) {
    const [search, setSearch] = useState("")
    const [searchRes, setSearchRes] = useState([]);
    const [spotifyToken, setSpotifyToken] = useState("");

    //state for selected song
    const [selectedSong, setSelectedSong] = useState([]);
    
    const handleSearchSong = async (keyword) => {
        let result;
        const acc_token = spotifyToken;
        console.log("isi acc token di handle search", acc_token);
        try {
            result = await axios.get(
                `https://api.spotify.com/v1/search`,
                {
                    //...data
                    params:{
                        q: keyword,
                        type: "track"
                    },
                    headers: {
                        Authorization: `Bearer ${acc_token}`,
                    },
                }
            );
            // console.log(result.data.tracks.items);
            // store fetch result to searchRes
            setSearchRes(result.data.tracks)
        } catch (err) {
            console.error(err);
        }
    };

    // handle enter when searching
    const handleKeyPress = (e) => {
        const value = e.target.value;
        // set final search keyword
        setSearch(value);

        //code for enter = 13
        if(e.keyCode === 13){
            console.log("Enter key pressed, target value: ", encodeURI(value.trim()));
            const keyword = encodeURI(value.trim());
            handleSearchSong(keyword);
            e.preventDefault(); // Let's stop this event.
            e.stopPropagation(); // Really this time.
        }else{
            return;
        }
    }

    const handleAddToSelected = (id) => {
        const newSelected = [...selectedSong, id];
        setSelectedSong(newSelected);
        console.log("added to selected, isi: ", selectedSong);
    }

    const handleRemoveFromSelected = (id) => {
        const newSelected = selectedSong.filter(idSong => idSong !== id);
        selectedSong = [...newSelected];
    }

    const title = `Search result for '${search}':`
    return (
        <div className="row">
            <div className="col-md-3 sidemenu">
                <SideMenu setToken={setSpotifyToken}/>
            </div>
            <div className="col-md-9 song-section">
                <SearchButton setSearch={setSearch} search={search} handleKeyPress={handleKeyPress}/>
                <hr />
                <PageTitle title={title}/>
                <div className="row">
                    {searchRes?.items?.map((song, idx) => (
                        <SongCard data={song} key={idx} selectedSong={selectedSong} handleAdd={handleAddToSelected} handleRemove={handleRemoveFromSelected} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
