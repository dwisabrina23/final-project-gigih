import { createSlice } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
	name: 'auth',
	initialState: {
		token:"",
        user_id:""
	},
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
		},
        setUserID: (state, action) => {
            state.user_id = action.payload;
        }
	},
});

export const { setToken, setUserID } = AuthSlice.actions;

export default AuthSlice.reducer;