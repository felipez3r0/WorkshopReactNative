import React from 'react'

import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface ButtonProps {
  title: string
  onPress: () => void
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10
  },
  text: {
    color: 'white'
  }
})