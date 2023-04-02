import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoadingScreen from "./src/pages/LoadingScreen/loadingScreen.js";
import Login from "./src/pages/Login/login.js";
import SignUp from "./src/pages/SignUp/signUp.js";
import ForgotPassword from "./src/pages/ForgotPassword/forgotPassword.js";
import CreateProfile from "./src/pages/CreateProfile/createProfile.js";
// import Interests from "./src/pages/Interests/interests.js";
import TabBar from "./src/components/TabBar/tabBar.js";
import Slider from "./src/pages/Slider/slider.js";
import Chat from "./src/pages/Chat/chat.js";
import Profile from "./src/pages/Profile/profile.js";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LoadingScreen"
                    component={LoadingScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="CreateProfile"
                    component={CreateProfile}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name="Interests"
                    component={Interests}
                    options={{ headerShown: false }}
                /> */}
                <Stack.Screen
                    name="TabBar"
                    component={TabBar}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Slider"
                    component={Slider}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
