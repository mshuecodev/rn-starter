import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ProtectedNav from "./protected"
import PublicNav from "./public"
import { useAuth } from "@/features/auth/useAuth"

const Stack = createNativeStackNavigator()

function Index() {
	const { isAuthenticated } = useAuth()
	return <NavigationContainer independent={true}>{isAuthenticated ? <ProtectedNav /> : <PublicNav />}</NavigationContainer>
}

export default Index
