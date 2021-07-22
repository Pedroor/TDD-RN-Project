import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Moment from 'moment'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../constants'



function HomeScreen() {
  const now = Moment(new Date())

  return (
    <View  testID="home-screen" style={styles.container}>
      <View style={styles.title}>
     
        <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
        <Text style={styles.day}>{now.format('dddd')}</Text>
   
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: Colors.DARK_GRAY
  },
  title: {
    justifyContent: 'flex-end'
  },
  date: {
    color: Colors.GRAY,
    fontSize: 13
  },
  day: {
    color: Colors.WHITE,
    fontSize: 21
  }
})

export default HomeScreen