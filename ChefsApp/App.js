/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from './LogInScreen';
import MenuScreen from './MenuScreen';
import DishDetailsScreen from './DishDetailsScreen';
import EditMenuScreen from './EditMenuScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="DishDetail" component={DishDetailsScreen} />
        <Stack.Screen name="EditMenu" component={EditMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
