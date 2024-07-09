import React from 'react'
import { View, Text } from 'react-native'
import { Button } from './components/button'

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Meu primeiro app!</Text>
      <Button title="Aperte aqui" onPress={() => alert('Olá!')} />
    </View>
  )
}