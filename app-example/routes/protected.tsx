import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "@/app/home"
import SettingScreen from "@/app/home/setting"

const Tab = createBottomTabNavigator()

function ProtectedNav() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingScreen}
			/>
		</Tab.Navigator>
	)
}

export default ProtectedNav
