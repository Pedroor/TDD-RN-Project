import React from 'react'
import { render, waitFor } from '@testing-library/react-native'
import { View } from 'react-native'

import AppNavigator from '..'
import HomeScreen from '../HomeScreen'

jest.mock('../HomeScreen', () => jest.fn())

describe('AppNavigator', () => {
  test('should render HomeScreen by default', async () => {
    ;(HomeScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-home-screen" />,
    )
    const wrapper = render(<AppNavigator />)

    await waitFor(() => {
      wrapper.getByTestId('mock-home-screen')
    })
  })
})
