import React from "react"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { TextInput, Button } from "react-native-paper"

function SignupScreen() {
	const navigation = useNavigation()

	return (
		<View style={{ justifyContent: "center", display: "flex", flex: 1, margin: 10, gap: 2 }}>
			<Button
				mode="contained"
				onPress={() => navigation.navigate("signin")}
			>
				Back
			</Button>
		</View>
	)
}

export default SignupScreen
