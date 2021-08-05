import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './HomeScreen'
import WeatherScreen from './WeatherScreen'

export type RootStackParamList = {
  Home: undefined
  Weather: undefined //{ latitude: number; longitude: number }
}

const RootStack = createStackNavigator<RootStackParamList>()

function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Weather" component={WeatherScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigator
