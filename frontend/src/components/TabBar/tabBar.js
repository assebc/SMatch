import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Slider from "../../pages/Slider/slider";
import Profile from "../../pages/Profile/profile";
import Chat from "../../pages/Chat/chat";

const Tab = createBottomTabNavigator();

const TabBar = () => {
    const getTabBarIcon = (route, focused, color, size) => {
        let iconSource;

        if (route.name === "Slider") {
            iconSource = focused
                ? require("../../assets/slider_hover.png")
                : require("../../assets/slider.png");
        } else if (route.name === "Chat") {
            iconSource = focused
                ? require("../../assets/chat_hover.png")
                : require("../../assets/chat.png");
        } else if (route.name === "Profile") {
            iconSource = focused
                ? require("../../assets/profile_hover.png")
                : require("../../assets/profile.png");
        }

        return (
            <Image source={iconSource} style={{ width: size, height: size }} />
        );
    };

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "grey",
                tabBarShowLabel: false,
                tabBarStyle: {
                    display: "flex",
                    visibility: "hidden",
                },
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) =>
                    getTabBarIcon(route, focused, color, size),
            })}
        >
            <Tab.Screen name="Slider" component={Slider} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default TabBar;
