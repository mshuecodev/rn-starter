import { SafeAreaView } from "react-native"
import { FormControl, FormControlLabel, FormControlLabelText, Input, InputField, VStack, Heading, Text, Box, InputSlot, Pressable, Button, ButtonText, HStack, InputIcon, Checkbox, CheckboxIndicator, CheckboxLabel, CheckboxIcon } from "@/components/ui"
import { EyeIcon, EyeOffIcon, CheckIcon } from "@/components/ui/icon"
import React, { useState } from "react"
import { AntDesign, FontAwesome } from "@expo/vector-icons"
import { useRouter } from "expo-router"

const SignUpScreen = () => {
	const router = useRouter()

	const [showPassword, setShowPassword] = useState(false)
	return (
		<SafeAreaView className="flex-1 bg-primary-400">
			<VStack className="flex-1 item-center">
				<VStack className="flex-1 items-center my-20">
					<Heading className="text-white">Create Account</Heading>
					<Text className="text-white mt-2">Sign up to get started!</Text>
				</VStack>

				{/* card */}
				<VStack className="flex-2 bg-white absolute bottom-0 w-full h-3/4 p-6 rounded-t-3xl shadow-lg space-y-6">
					<Heading size="lg">Sign Up</Heading>

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

						<FormControl
							// isInvalid={isInvalid}
							size="md"
							isDisabled={false}
							isReadOnly={false}
							isRequired={false}
						>
							<FormControlLabel>
								<FormControlLabelText>Confirm Password</FormControlLabelText>
							</FormControlLabel>
							<Input
								className="rounded-full"
								size="md"
							>
								<InputField
									type={showPassword ? "text" : "password"}
									placeholder="confirm password"
								/>
								<InputSlot
									onPress={() => setShowPassword(!showPassword)}
									className="pr-3"
								>
									<InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
								</InputSlot>
							</Input>
						</FormControl>

						<Checkbox
							size="sm"
							value="term"
							className="my-2"
						>
							<CheckboxIndicator>
								<CheckboxIcon as={CheckIcon} />
							</CheckboxIndicator>
							<CheckboxLabel>I accept the Terms of Use & Privacy Policy</CheckboxLabel>
						</Checkbox>

						<Button
							className="rounded-full my-2"
							variant="solid"
							size="md"
							action="primary"
						>
							<ButtonText>Sign Up</ButtonText>
						</Button>

						<HStack className="justify-center space-x-4 mt-2">
							<Button
								variant="outline"
								className="flex-1 rounded-full border border-gray-300"
								onPress={() => {}}
							>
								<AntDesign
									name="google"
									size={20}
									color="#DB4437"
								/>
								<ButtonText className="ml-2">Continue with Google</ButtonText>
							</Button>
						</HStack>

						<HStack className="justify-center space-x-1 mt-4">
							<Text>Already have an account?</Text>
							<Pressable onPress={() => router.push("/(auth)/sign-in")}>
								<Text className="text-[#E53935] font-medium">Sign In</Text>
							</Pressable>
						</HStack>
					</Box>
				</VStack>
			</VStack>
		</SafeAreaView>
	)
}

export default SignUpScreen
