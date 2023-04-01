// import React from "react";
// import { View, Modal, Text, Image, TouchableOpacity, PermissionsAndroid, StyleSheet } from 'react-native';
// import { COLORS, SIZES } from "../../constants/constants";

// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// import ButtonInput from "../../components/Button/button";

// export default function ProfilePicModal(props) {

//     const openCamera = () => {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.CAMERA,
//         );
//         if (granted == PermissionsAndroid.PERMISSIONS.granted) {
//             const result = await
//         }
//     }

//     return (
//         <Modal
//             animationType="slide"
//             transparent={true}
//             visible={props.visible}
//         >
//             <View style = {styles.global}>
//                 <View style = {styles.container}>
//                     <Text style = {styles.title}>Select or take a profille picture</Text>
//                     <View style = {styles.buttons_container}>
//                         <ButtonInput title = "Open Camera" onPress={undefined}/>
//                         <ButtonInput title = "Open Gallery" onPress={undefined}/>
//                     </View>
//                 </View>
//             </View>
//         </Modal>
//     )
// }

// const styles = StyleSheet.create({
//     global: {
//         flex: 1,
//         backgroundColor: COLORS.primary,
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     container: {
//         backgroundColor: COLORS.peach,
//         height: 300,
//         width: SIZES.width - "40",
//         borderRadius: 16,
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: "600",
//         letterSpacing: 0.3
//     },
//     buttons_container: {
//         height: 100,
//         marginTop: 40,
//         justifyContent: "space-between"
//     },
// }
// )
