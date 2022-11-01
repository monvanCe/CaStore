import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { reducer } from './redux/reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//screens
import { Onboarding } from './screens/Onboarding101'
import { Signing } from './screens/Signing102'
import { Register } from './screens/Register102'

const Stack = createNativeStackNavigator()

const store = createStore(reducer)

function App() {
    return (

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Onboarding'>
            <Stack.Screen name='Onboarding' component={Onboarding} options={{headerShown: false}} />
            <Stack.Screen name='Signing' component={Signing} options={{headerShown: false}} />
            <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
  
  export default App;