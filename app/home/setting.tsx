import * as React from "react"
import { Text, View, Button } from "react-native"

export default function SettingScreen() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Button
				//   onPress={onPressLearnMore}
				title="Logout"
				color="#841584"
				//   accessibilityLabel="Learn more about this purple button"
			/>
		</View>
	)
}
