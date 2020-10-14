import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from "./Home"
import Movies from "./Movies"
import Series from "./Series"

const Stack = createStackNavigator();

const Screens = () => {
    return (
        <>
        <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#FFFFFF' },
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Series" component={Series} />
          <Stack.Screen name="Movies" component={Movies} />
        </Stack.Navigator>
      </NavigationContainer>
      </>
    )
}

export default Screens;