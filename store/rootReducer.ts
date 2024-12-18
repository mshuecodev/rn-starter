import { combineReducers } from "redux"
import authReducer from "@/features/auth/authSlice"

const rootReducer = combineReducers({
	auth: authReducer

	// Add other slices here
})

export default rootReducer
