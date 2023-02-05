import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './screens/Home/Index';
import Login from './screens/Login/Index';
import {Order} from './screens/Order/Index';

const Stack = createNativeStackNavigator();

export default function Routes() {
 return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Order' component={Order} />
    </Stack.Navigator>
  );
}
