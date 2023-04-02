import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { COLORS } from "../../constants/constants";

export default function DropdownMenu(props) {
    const [value, setValue] = useState(null);

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={props.data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={props.placeholder}
            searchPlaceholder="Search..."
            value={props.value}
            onChange={props.onChange}
        />
    );
}

const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        width: 200,
        borderBottomColor: COLORS.ebony,
        borderBottomWidth: 0.5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
