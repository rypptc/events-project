import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home-screen';
import EventDetailScreen from '../screens/event-detail-screen';
import { navOptions } from './options';

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={() => navOptions(navigation)}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Event" component={EventDetailScreen} />
    </Stack.Navigator>
  );
};