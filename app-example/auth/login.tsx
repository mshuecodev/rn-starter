import React, { useState } from "react"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { TextInput, Button } from "react-native-paper"
import { useAuth } from "@/features/auth/useAuth"

function LoginScreen() {
	const { handleLogin, loading, error } = useAuth()
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	return (
		<View style={{ justifyContent: "center", display: "flex", flex: 1, margin: 10, gap: 2 }}>
			<TextInput
				label="Email"
				value={username}
				onChangeText={(text) => setUsername(text)}
			/>
			<TextInput
				label="Password"
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>
			<Button
				mode="contained"
				// onPress={() => navigation.navigate("signup")}
				onPress={() => handleLogin(username, password)}
			>
				Sign In
			</Button>
		</View>
	)
}

export default LoginScreen
