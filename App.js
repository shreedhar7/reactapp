import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  LoginScreen from './screens/login';
import  register1 from './screens/register1';
import  register2 from './screens/register2';
import  Home from './screens/Home';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
 return (
     <NavigationContainer >
        <Stack.Navigator
        screenOptions = {{headerShown : false}}
        >
            <Stack.Screen name="login" component={LoginScreen}  />
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Register1" component={register1} />
            <Stack.Screen name="Register2" component={register2} />
        </Stack.Navigator>
     </NavigationContainer>
 );
}
export default App;