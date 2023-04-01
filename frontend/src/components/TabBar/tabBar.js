import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

// import Slider from "../Slider/slider.js"
// import Chat from "../Chat/chat.js";
// import Classroom from "../Classroom/classrom.js";
// import Profile from "../Profile/profile.js";

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
      <Tab.Navigator
        style={styles.global}
      >
        {/* <Tab.Screen name="SLIDER" component={ undefined } />
        <Tab.Screen name="CLASSROOM" component={undefined} />
        <Tab.Screen name="CHAT" component={ undefined } />
        <Tab.Screen name="PROFILE" component={undefined} /> */}
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  global: {

  }
})


export default TabBar;
