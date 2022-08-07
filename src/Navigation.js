import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import { Onboarding } from './screens/Onboarding101';
import { Signing } from './screens/Signing102';

const Stack = createNativeStackNavigator()

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
          <Stack.Screen name='Onboarding' component={Onboarding} options={{headerShown: false}} />
          <Stack.Screen name='Signing' component={Signing} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;