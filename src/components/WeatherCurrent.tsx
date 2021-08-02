import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { View } from 'react-native'
import LocationService from '../services/LocalizationService'
import Button from './Button'

function WeatherCurrent() {
  // const navigation = useNavigation()
  // const handleFetchWeather = useCallback(async () => {
  //   const position = await LocationService.getCurrentPosition()
  //   navigation.navigate('Weather', position)
  // }, [navigation])
  // return (
  //   <Button testID="weather-current" label="" onPress={handleFetchWeather} />
  // )
  return <></>
}

export default WeatherCurrent
