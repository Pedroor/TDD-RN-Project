import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { useState } from 'react'
import { View } from 'react-native'
import LocationService from '../services/LocalizationService'
import Button from './Button'

function WeatherCurrent() {
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

  const handleFetchWeather = useCallback(async () => {
    setLoading(true)
    const position = await LocationService.getCurrentPosition()
    navigation.navigate('Weather', position)
    setLoading(false)
  }, [navigation])

  return (
    <Button
      testID="weather-current"
      label="Weather at my position"
      onPress={handleFetchWeather}
      loading={loading}
    />
  )
}

export default WeatherCurrent
