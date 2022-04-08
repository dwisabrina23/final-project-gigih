import React, { useState, useEffect } from "react";
import PageTitle from "../../Components/Title/PageTitle";
import SongCard from "../../Components/SongCard/SongCard";
import SearchButton from "../../Components/Search/SearchButton";
import SideMenu from "../../Components/SideMenu/SideMenu";
import "./Home.css";
import axios from "axios";
import {useSelector} from "react-redux";

function HomePage(props) {
    const [search, setSearch] = useState("")
    const [searchRes, setSearchRes] = useState([]);

    //state for selected song
    const [selectedSong, setSelectedSong] = useState([]);

    const useGetProfile = async () => {

    }
    const handleSearchSong = async (keyword) => {
        let result;
        const acc_token = useSelector((state) => state.auth.token);
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

    

    const title = `Search result for '${search}':`
    return (
        <div className="row">
            <div className="col-md-3 sidemenu">
                <SideMenu/>
            </div>
            <div className="col-md-9 song-section">
                <SearchButton setSearch={setSearch} search={search} handleKeyPress={handleKeyPress}/>
                <hr />
                <PageTitle title={title}/>
                <div className="row">
                    {searchRes?.items?.map((song, idx) => (
                        <SongCard data={song} key={idx} selectedSong={selectedSong} setSelected={setSelectedSong}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
