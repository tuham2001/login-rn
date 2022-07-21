import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/Login/LoginScreen'
import Dashboard from '../screens/Dashboard/Dashboard'

export default function StartScreen() {
  const user = useSelector((state) => state.user.userReducer.user)
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={user !== null ? "Dashboard" : "LoginScreen"}
        screenOptions={{
          headerShown: false,
        }}
      >
        {user?.name === 'pro' && user?.password === '123123' ?
          <Stack.Screen name="Dashboard" component={Dashboard} />
          :
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
