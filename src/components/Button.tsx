import React from 'react'
import {
  ViewProps,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native'
import { Colors } from '../constants'

interface ButtonProps extends ViewProps {
  label: string
  onPress: () => void
  loading?: boolean
}

function Button({ label, onPress, loading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} testID="button">
      <View style={styles.container} {...rest}>
        {loading ? (
          <ActivityIndicator
            testID="button-loading"
            size={24}
            color={Colors.WHITE}
          />
        ) : (
          <Text style={styles.label} testID="mock-label">
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHER_GRAY,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 19,
    color: Colors.WHITE,
  },
})

export default Button
