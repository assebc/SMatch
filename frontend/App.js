import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoadingScreen from "./src/pages/LoadingScreen/loadingScreen.js"
import Login from "./src/pages/Login/login.js";
import SignUp from "./src/pages/SignUp/signUp.js";
import ForgotPassword from "./src/pages/ForgotPassword/forgotPassword.js";
import CreateProfile from "./src/pages/Create Profile/createProfile.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            {/* <Stack.Screen
                name = "CreateProfile"
                component = {CreateProfile}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name = "LoadingScreen"
                component = {LoadingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = "Login"
                component = {Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = "SignUp"
                component = {SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = "ForgotPassword"
                component = {ForgotPassword}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //     <Text>Teste</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
    global: {
      justifyContent: "center"
    }
})
