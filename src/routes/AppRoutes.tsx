import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { Register } from '../screens/Register';
import { Details } from '../screens/Details';

export type RootStackParamList = {
  signin: undefined;
  home: undefined;
  new: undefined;
  details: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="signin">
      <Screen name="signin" component={SignIn} options={{ headerShown: false }} />
      <Screen name="home" component={Home} />
      <Screen name="new" component={Register} />
      <Screen name="details" component={Details} />
    </Navigator>
  );
}
