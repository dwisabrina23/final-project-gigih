import React from 'react';
import SideMenu from "../../Components/SideMenu/SideMenu";
import CreatePlaylist from '../../Components/Playlist/CreatePlaylist';
import Playlist from '../../Components/Playlist/Playlist';

function PLaylist() {
    return (
        <div>
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