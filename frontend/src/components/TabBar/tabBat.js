import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabBat = (props) => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="SLIDER" component={undefined} />
        <Tab.Screen name="CLASSROOM" component={undefined} />
        <Tab.Screen name="CHAT" component={undefined} />
        <Tab.Screen name="PROFILE" component={undefined} />
      </Tab.Navigator>
    );
} 

export default TabBat;