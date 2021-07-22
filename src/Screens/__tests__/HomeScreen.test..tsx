import React from 'react'
import { render } from '@testing-library/react-native'
import HomeScreen from '../HomeScreen'
import LinearGradient from 'react-native-linear-gradient'

describe('HomeScreen', () => {
  test('Should render correctly', () => {
    const wrapper = render(<HomeScreen />)
    wrapper.getByTestId('home-screen')
  })

  describe('Title section', () => {
    beforeEach(() => {
      jest.useFakeTimers('modern')
      jest.setSystemTime(1349852318000) // Wednesday / 2012-10-10
    })
    afterEach(() => {
      jest.useRealTimers()
    })
    test('Should contain current date', () => {
      const wrapper = render(<HomeScreen />)
      wrapper.getByText('Oct 10, 2012')
    });
    test('Should contain current day', () => {
      const wrapper = render(<HomeScreen />)
      wrapper.getByText('Wednesday')
    })
  })
})