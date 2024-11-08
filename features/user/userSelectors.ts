import { RootState } from "@/store"

export const selectUserProfile = (state: RootState) => state.user.profile
export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated
