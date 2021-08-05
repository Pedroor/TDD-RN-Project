import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import WeatherCurrent from '../WeatherCurrent'
import LocationService from '../../services/LocalizationService'
import { act } from 'react-test-renderer'

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn().mockReturnValue({ navigate: jest.fn() }),
  }
})

describe('WeatherCurrent', () => {
  test('Should render correctly', () => {
    const wrapper = render(<WeatherCurrent />)
    wrapper.getByTestId('weather-current')
  })
  test('Should render label', () => {
    const wrapper = render(<WeatherCurrent />)
    wrapper.getByText('Weather at my position')
  })

  // test('Should navigate to Weather screen', async () => {
  //   const mockNavigate = jest.fn()
  //   ;(useNavigation as jest.Mock).mockReturnValueOnce({
  //     navigate: mockNavigate,
  //   })
  //   const wrapper = render(<WeatherCurrent />)
  //   const button = wrapper.getByTestId('weather-current')
  //   fireEvent.press(button)

  //   await waitFor(() => {
  //     expect(mockNavigate).toHaveBeenCalledWith('Weather', {
  //       latitude: 0,
  //       longitude: 0,
  //     })
  //   })
  // })
  describe('Loader', () => {
    test('Should be rendered when position is being fetched', async () => {
      let mockResolve: (position: {
        latitude: number
        longitude: number
      }) => void
      jest.spyOn(LocationService, 'getCurrentPosition').mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            mockResolve = resolve
          }),
      )
      const wrapper = render(<WeatherCurrent />)
      const button = wrapper.getByTestId('weather-current')
      fireEvent.press(button)

      await expect(
        wrapper.findByTestId('button-loading'),
      ).resolves.toBeDefined()

      await act(async () => {
        await mockResolve({ latitude: 0, longitude: 0 })
      })
    })
    test('Should not be rendered when position has been fetched', () => {
      const wrapper = render(<WeatherCurrent />)
      const button = wrapper.getByTestId('weather-current')
      fireEvent.press(button)

      return expect(wrapper.findByTestId('button-loading')).rejects.toThrow()
    })
  })
})
