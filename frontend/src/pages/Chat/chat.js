import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Linking
} from "react-native";
import { COLORS } from "../../constants/constants";

export default function Chat(props) {
    const [contacts, setContacts] = useState(data);
    const [searchText, setSearchText] = useState("");
    const [filteredContacts, setFilteredContacts] = useState(contacts);
    let data = require("./data.json")
    const getChat = async () => {
        try{
            AsyncStorage.getItem('@app:session').then(async token => {
                const response = await api.get("getMatches", {
                    token : token,
                });

                console.log(response)

                if (response.status == 200){
                    data.data = response.data;
                }
            });
        } catch (err){
            setErrorMessage("Invalid data. Please try again!");
            console.log(err);
        }
    }

    const handleSearch = (text) => {
        setSearchText(text);
        const filtered = contacts.filter((contact) => {
            return contact.name.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredContacts(filtered);
    };

    return (
        <View style={styles.global}>
            <View style={styles.logo_container}>
                <Image
                    source={require("../../assets/logo_SMatch.png")}
                    style={styles.logo}
                />
            </View>
            <View style={styles.search_container}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={handleSearch}
                />
            </View>
            <FlatList
                data={filteredContacts}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View style={styles.image_container}>
                            <Image
                                style={styles.image}
                                source={require("../../assets/profile.png")}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.lastMessage}>
                                {item.lastMessage}
                            </Text>
                        </View>
                        <View style={styles.whatsapp_logo_container}>
                            <TouchableOpacity onPress={undefined}>
                                <Image
                                    style={styles.whatsapp_logo}
                                    source={require("../../assets/whatsapp.png")}
                                    onPress={() => Linking.openURL(`whatsapp://send?phone=${data.contact}`)}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    logo_container: {
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 120,
        height: 120,
    },
    search_container: {
        padding: 10,
        marginTop: -20,
    },
    searchInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        padding: 8,
    },
    itemContainer: {
        flexDirection: "row",
        padding: 16,
        height: 75,
        alignItems: "center",
        borderBottomColor: "#eee",
    },
    image_container: {
        flex: 1,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    textContainer: {
        flex: 5,
        marginLeft: 16,
    },
    nameText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    lastMessage: {
        fontSize: 16,
        color: "#999",
        zIndex: 1,
    },
    whatsapp_logo_container: {
        flex: 1,
    },
    whatsapp_logo: {
        width: 40,
        height: 40,
        // flex: 1,
        // position: "absolute",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        zIndex: 2,
    },
});
