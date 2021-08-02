import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import WeatherCurrent from '../WeatherCurrent'

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn,
  }
})

describe('WeatherCurrent', () => {
  test('Should render correctly', () => {
    const wrapper = render(<WeatherCurrent />)
    wrapper.getByTestId('weather-current')
  })
  test('Should navigate to Weather screen', async () => {
    const mockNavigate = jest.fn()
    ;(useNavigation as jest.Mock).mockReturnValueOnce({
      navigate: mockNavigate,
    })
    const wrapper = render(<WeatherCurrent />)
    const button = wrapper.getByTestId('weather-current')
    fireEvent.press(button)

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('Weather')
    })
  })
})
