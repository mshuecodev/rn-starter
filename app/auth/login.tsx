import React from "react"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { TextInput, Button } from "react-native-paper"

function LoginScreen() {
	const navigation = useNavigation()

	return (
		<View style={{ justifyContent: "center", display: "flex", flex: 1, margin: 10, gap: 2 }}>
			<TextInput
				mode="outlined"
				placeholder="Username"
			/>
			<TextInput
				mode="outlined"
				secureTextEntry
				placeholder="Password"
			/>
			<Button
				mode="contained"
				onPress={() => navigation.navigate("signup")}
			>
				Sign In
			</Button>
		</View>
	)
}

export default LoginScreen
