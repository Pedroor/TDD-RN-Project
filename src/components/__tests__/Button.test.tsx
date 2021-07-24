import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import Button from '../Button'

describe('Button', () => {
  test('should render correctly', () => {
    const wrapper = render(<Button label="" onPress={jest.fn()} />)
    wrapper.getByTestId('button')
  })
  test('should render loader when loading', () => {
    const wrapper = render(<Button label="" onPress={jest.fn()} loading />)
    wrapper.getByTestId('button-loading')
  })
  test('Should call given onPress when clicked', () => {
    const mockOnPress = jest.fn()
    const wrapper = render(<Button label="" onPress={mockOnPress} />)
    const button = wrapper.getByTestId('button')

    fireEvent.press(button)
    expect(mockOnPress).toHaveBeenCalled()
  })

  test('Shold render label', () => {
    const wrapper = render(<Button label="mock-label" onPress={jest.fn()} />)
    wrapper.getByTestId('mock-label')
  })
  test('Should accept custom view props', () => {
    const wrapper = render(
      <Button label="" onPress={jest.fn()} testID="mock-test-id" />,
    )
    wrapper.getByTestId('mock-test-id')
  })
})
