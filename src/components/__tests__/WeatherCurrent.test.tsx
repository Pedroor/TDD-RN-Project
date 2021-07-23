import React from 'react'
import {render}from '@testing-library/react-native'
import WeatherCurrent from '../WeatherCurrent'

describe('WeatherCurrent', () => {
  test('Should render correctly', () => {
    const wrapper = render(<WeatherCurrent />)
    wrapper.getByTestId('weather-current')
  })
  describe('Should navigate to Weather screen', () => {
    throw new Error('Test not implemented')
  })

})