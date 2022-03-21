import "./App.css";
import data from "./StaticData";
import {BsFillPlayFill} from 'react-icons/bs';

function App() {
    console.log(data);
    return (
        <div className="App">
            <div className="row">
                <div className="col-md-2 sidemenu">
                 </div>
                <div className="col-md-10 song-section">
                    <h1>Your Songs</h1>
                    <hr />
                    <div className="d-flex songs">
                        
                        <div className="card song">
                            <div className="song-img-wrapper">
                                <img
                                    className="card-img-top"
                                    src={data.album.images[1].url}
                                    alt="Eye_of_the_Storm"
                                />
                                <button className="btn btn-primary rounded-pill play-btn">
                                  <BsFillPlayFill color='eff5ed' size={27}/> Select
                                </button>
                            </div>
                            <div className="card-body">
                                <h4 className="song-title">{data.name}</h4>
                                <small className="song-album">
                                    {data.album.name}
                                </small>
                                <p className="artist">{data.artists[0].name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
