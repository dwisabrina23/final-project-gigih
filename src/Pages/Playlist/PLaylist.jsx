import React from 'react';

//components
import SideMenu from "../../Components/SideMenu/SideMenu";
import CreatePlaylist from '../../Components/Playlist/CreatePlaylist';
import Playlist from '../../Components/Playlist/Playlist';
import Navbar from '../../Components/Navbar/Navbar';

function PLaylist() {
    
    return (
        <div>
            <Navbar/>
             <div className="row">
                <div className="col-md-3 sidemenu">
                    <SideMenu/>
                </div>
                <div className="col-md-9 song-section">
                    <CreatePlaylist/>
                    <Playlist/>
                </div>
            </div>
        </div>
    );
}

export default PLaylist;