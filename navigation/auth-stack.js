import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../src/screens/login';
import Signup from '../src/screens/signup';
const Stack = createStackNavigator();
function AuthStack() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fe6e58" barStyle="light-content" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AuthStack;
