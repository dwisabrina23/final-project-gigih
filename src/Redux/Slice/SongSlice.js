import { createSlice } from "@reduxjs/toolkit";
export const songSlice = createSlice({
    name: "song",
    initialState: {
        selected: [],
        playlists: [],
    },
    reducers: {
        removeSong : (state, action) => {
            console.log("remove song... ", action.payload);
            state.selected = [
                ...state.selected.filter(song => {
                    return song !== action.payload
                })
            ]
        },
        addSong: (state, action) =>{
            console.log("add song... ", action.payload);
            state.selected.push(action.payload);
        },
        resetSelected:(state) => {
            state.selected = [];
        },
        setPlaylist: (state, action) => {
            state.playlists = action.payload;
        }
    }
})

export const { addSong, removeSong, resetSelected, setPlaylist} = songSlice.actions;

export default songSlice.reducer;