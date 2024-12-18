import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { AuthState } from "./authTypes"

const initialState: AuthState = {
	token: null,
	// refreshToken: null,
	isAuthenticated: false,
	loading: false,
	error: null
}

export const login = createAsyncThunk("auth/login", async (credentials: { username: string; password: string }, thunkAPI) => {
	try {
		const authData = {
			accessToken: "testuser"
		}
		// connect to services here
		// const response = await loginUser(credentials)
		// console.log("check", response)
		// await saveToken(response.accessToken)
		// // await saveRefreshToken(response.refreshToken)
		return authData
	} catch (error) {
		console.log("error", error)
		return thunkAPI.rejectWithValue("Login failed")
	}
})

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state) => {
			state.token = null
			// state.refreshToken = null
			state.isAuthenticated = false
			// deleteToken()
			// deleteRefreshToken()
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false
				state.token = action.payload.accessToken
				// state.refreshToken = action.payload.refreshToken
				state.isAuthenticated = true
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
		// .addCase(refreshAuthToken.fulfilled, (state, action) => {
		// 	state.token = action.payload
		// })
	}
})

export const { logout } = authSlice.actions
export default authSlice.reducer
