import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SIZES = {
    width,
    height,
};

export const COLORS = {
    primary: "#e8f3d6",
    marron: "#fcf9be",
    peach: "#ffdca9",
    orange: "#faab78",
    ebony: "#4b543b"
};

export const BORDER_RADIUS = {
    round: 90,
    square: 12
}
