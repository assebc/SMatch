import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SIZES = {
    width,
    height,
};

export const COLORS = {
    primary: "#f5edd6",
    secondary: "#fbd9c6",
    green: "#4b543b",
    green_smooth: "#A4C994",
    tertiary: "#f9b1b2",
    yellow: "#FCF9BE",
};

export const BORDER_RADIUS = {
    round: 90,
    square: 12,
};
