import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './screens/onboard';

const App = () => {
 return (
     <NavigationContainer>
        <OnboardingScreen />
     </NavigationContainer>
 );
}
export default App;