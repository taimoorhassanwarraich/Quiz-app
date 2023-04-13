import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Stats = () => {
  return (
    <View style={styles.circle}>
      <Text style={styles.text}>50</Text>
    </View>
  )
}

export default Stats

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  },
});