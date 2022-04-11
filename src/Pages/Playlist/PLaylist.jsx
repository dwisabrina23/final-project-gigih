import React from 'react';
import SideMenu from "../../Components/SideMenu/SideMenu";
import CreatePlaylist from '../../Components/Playlist/CreatePlaylist';

function PLaylist(props) {
    return (
        <div>
             <div className="row">
                <div className="col-md-3 sidemenu">
                    <SideMenu/>
                </div>
                <div className="col-md-9 song-section">
                    <CreatePlaylist/>
                </div>
            </div>
        </div>
    );
}

export default PLaylist;