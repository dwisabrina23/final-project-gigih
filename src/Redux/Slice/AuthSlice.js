import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
	name: 'auth',
	initialState: {
		token:"",
        user_id:"",
		user_data:{}
	},
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
		},
        setUserID: (state, action) => {
            state.user_id = action.payload;
        },
		setUser: (state, action) => {
			state.user_data = action.payload
		},
		logout: (state) => {
			state.token = "",
			state.user_id = "",
			state.user_data = {}
		}
	},
});

export const { setToken, setUserID, logout, setUser } = AuthSlice.actions;

export default AuthSlice.reducer;