import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/Login/LoginScreen'
import Dashboard from '../screens/Dashboard/Dashboard'

export default function StartScreen(props) {
  const user = useSelector((state) => state.user.userReducer.user)
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user?.loggedIn ?
          <Stack.Screen name="Dashboard" component={Dashboard} />
          :
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
