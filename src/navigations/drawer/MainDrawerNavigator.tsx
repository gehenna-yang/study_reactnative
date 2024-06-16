import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '~/screen/map/MapHomeScreen';
import FeedHomeScreen from '~/screen/feed/FeedHomeScreen';
import CalendarHomeScreen from '~/screen/calendar/CalendarHomeScreen';

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
