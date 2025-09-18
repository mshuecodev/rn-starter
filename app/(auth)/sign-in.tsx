import { SafeAreaView } from "react-native"
import { FormControl, FormControlLabel, FormControlLabelText, Input, InputField, VStack, Heading, Text, Box, InputSlot, Pressable, Button, ButtonText, HStack, InputIcon } from "@/components/ui"
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon"
import React, { useState } from "react"
import { AntDesign, FontAwesome } from "@expo/vector-icons"
import { useRouter } from "expo-router"

const SignInScreen = () => {
	const router = useRouter()

	const [showPassword, setShowPassword] = useState(false)
	return (
		<SafeAreaView className="flex-1 bg-primary-400">
			<VStack className="flex-1 item-center">
				<VStack className="flex-1 items-center">
					<Heading className="text-white">Hello there!</Heading>
					<Text className="text-white mt-2">Welcome back!</Text>
				</VStack>

				{/* card */}
				<VStack className="flex-2 bg-white absolute bottom-0 w-full h-2/3 p-6 rounded-t-3xl shadow-lg space-y-6">
					<Heading size="lg">Sign In</Heading>

					{/* form */}
					<Box>
						<FormControl
							// isInvalid={isInvalid}
							size="md"
							isDisabled={false}
							isReadOnly={false}
							isRequired={false}
						>
							<FormControlLabel>
								<FormControlLabelText>Email</FormControlLabelText>
							</FormControlLabel>
							<Input
								className="my-1 rounded-full"
								size="md"
							>
								<InputField
									placeholder="email"
									// value={inputValue}
									// onChangeText={(text) => setInputValue(text)}
								/>
							</Input>
						</FormControl>
						<FormControl
							// isInvalid={isInvalid}
							size="md"
							isDisabled={false}
							isReadOnly={false}
							isRequired={false}
						>
							<FormControlLabel>
								<FormControlLabelText>Password</FormControlLabelText>
							</FormControlLabel>
							<Input
								className="rounded-full"
								size="md"
							>
								<InputField
									type={showPassword ? "text" : "password"}
									placeholder="password"
								/>
								<InputSlot
									onPress={() => setShowPassword(!showPassword)}
									className="pr-3"
								>
									<InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
								</InputSlot>
							</Input>
						</FormControl>
						<Pressable>
							<Text className="text-[#E53935] text-sm self-end">Forgot Password?</Text>
						</Pressable>
						<Button
							className="rounded-full"
							variant="solid"
							size="md"
							action="primary"
						>
							<ButtonText>Login</ButtonText>
						</Button>
						{/* social section */}
						<HStack className="items-center my-2">
							<Text
								size={"sm"}
								className="text-gray-500"
							>
								Or sign in with
							</Text>
						</HStack>

						<HStack className="space-x-4 justify-center">
							<Pressable className="w-12 h-12 rounded-full border border-gray-200 items-center justify-center shadow-sm">
								<AntDesign
									name="google"
									size={22}
									color="#DB4437"
								/>
							</Pressable>
							<Pressable className="w-12 h-12 rounded-full border border-gray-200 items-center justify-center shadow-sm">
								<AntDesign
									name="apple1"
									size={22}
									color="#000"
								/>
							</Pressable>
						</HStack>

						<HStack className="justify-center space-x-1 mt-4">
							<Text>Don't have an account?</Text>
							<Pressable onPress={() => router.push("/(auth)/sign-up")}>
								<Text className="text-[#E53935] font-medium">Sign Up</Text>
							</Pressable>
						</HStack>
					</Box>
				</VStack>
			</VStack>
		</SafeAreaView>
	)
}

export default SignInScreen
