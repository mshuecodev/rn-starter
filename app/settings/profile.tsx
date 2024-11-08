import React, { useEffect } from "react"
import { View, Text, Button } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch } from "@/store"
import { selectUserProfile } from "@/features/user/userSelectors"
import { fetchUserProfile, logout } from "@/features/user/userSlice"

const ProfileScreen: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const profile = useSelector(selectUserProfile)

	useEffect(() => {
		dispatch(fetchUserProfile(1))
	}, [dispatch])

	return (
		<View>
			{profile ? <Text>{profile.name}</Text> : <Text>Loading...</Text>}
			<Button
				title="Logout"
				onPress={() => dispatch(logout())}
			/>
		</View>
	)
}

export default ProfileScreen
