import React, { useState } from "react";
import PageTitle from "../../Components/Title/PageTitle";
import SongCard from "../../Components/SongCard/SongCard";
import SearchButton from "../../Components/Search/SearchButton";
import SideMenu from "../../Components/SideMenu/SideMenu";
import "./Home.css";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import _ from "lodash";
import {addSong, removeSong} from '../../Redux/Slice/SongSlice';

function HomePage() {
    const [search, setSearch] = useState("")
    const [searchRes, setSearchRes] = useState([]);
    const dispatch = useDispatch();
    const accToken = useSelector((state) => state.auth.token);

    const handleSearchSong = async (keyword) => {
        let result;
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
                        Authorization: `Bearer ${accToken}`,
                    },
                }
            );
            setSearchRes(result.data.tracks)
        } catch (err) {
            console.error(err);
        }
    };


    // handle enter when searching
    const handleKeyPress = (e) => {
        const value = e.target.value;
        setSearch(value);

        //code for enter = 13
        if(e.keyCode === 13){
            const keyword = encodeURI(value.trim());
            handleSearchSong(keyword);
            e.preventDefault();
            e.stopPropagation();
        }else{
            return;
        } 
    }

    const selectedSongList = useSelector((state) => state.song.selected);

    const checkSelected = (id) => {
        return selectedSongList.includes(id);
    };

    const handleSelect = (id) => {
        const isSelected = checkSelected(id);
    
        if (!isSelected) {
        //   addTrack(id);
            dispatch(addSong(id));
        } else {
        //   removeTrack(id);
            dispatch(removeSong(id));
        }
    };

    const title = `Search result for '${search}':`
    return (
        <div className="row home-wrapper">
            <div className="col-md-3 sidemenu">
                <SideMenu/>
            </div>
            <div className="col-md-9 song-section">
                <SearchButton setSearch={setSearch} search={search} handleKeyPress={handleKeyPress}/>
                <hr />
                <PageTitle title={title}/>
                <div className="row">
                    {searchRes?.items?.map((song, idx) => (
                        <SongCard data={song} key={idx} handleSelect={handleSelect} isSelected={checkSelected(song.uri)}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
