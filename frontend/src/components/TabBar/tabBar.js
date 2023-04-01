import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Slider from '../../pages/Slider/slider';
import Profile from '../../pages/Profile/profile';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Slider" component={Slider} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabBar;