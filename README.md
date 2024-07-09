# Workshop de React Native

Requisitos para o desenvolvimento do projeto:

- Node.js
- Expo CLI

Caso deseje testar o aplicativo em um dispositivo físico, será necessário instalar o aplicativo Expo Go. Outra opção é utilizar um emulador, como o Android Studio ou o Xcode.

## Etapa 1 - Configuração do ambiente

Para o desenvolvimento do projeto precisamos ter o Node.js instalado em nossa máquina. Para isso, acesse o site oficial do [Node.js](https://nodejs.org/en/) e faça o download da versão LTS.

Após a instalação do Node.js, abra o terminal e execute o comando abaixo para criar um novo projeto com o Expo utilizando TypeScript:

```bash
npx create-expo-app@latest --template expo-template-blank-typescript
```

O Expo é uma ferramenta que facilita o desenvolvimento de aplicativos React Native. Com ele, é possível criar um novo projeto, executar o aplicativo em um emulador ou dispositivo físico, entre outras funcionalidades.

Podemos nomear nosso projeto como `my-app` como sugerido ou escolher outro nome de nossa preferência.

Para testar o projeto só precisamos entrar na pasta e executar o comando `npx expo start`.

## Etapa 2 - Estrutura do projeto

A estrutura do projeto é composta por diversos arquivos e pastas, mas as principais são:

- `App.tsx`: Arquivo principal do aplicativo, onde é renderizado o componente raiz.
- `assets`: Pasta onde são armazenados os arquivos de imagem, fontes, entre outros.

No React Native não temos acesso a todos os elementos HTML, como no React. Por isso, utilizamos componentes específicos para criar a interface do aplicativo.

Podemos criar uma nova pasta chamada `components` para armazenar os componentes que serão utilizados em nosso aplicativo. Em seguinda, criamos um novo componente chamado `Button`:

```tsx
import React from 'react' // Importa o React
import { TouchableOpacity, Text, StyleSheet } from 'react-native' // Importa os componentes necessários

interface ButtonProps { // Define as propriedades do componente
  title: string
  onPress: () => void
}

export function Button({ title, onPress }: ButtonProps) { // Cria o componente Button
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({ // Estiliza o componente
  button: {
    backgroundColor: '#61dafb',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10
  },
  text: {
    color: 'white'
  }
})
```

Podemos utilizar o componente `Button` em nosso aplicativo da seguinte forma:

```tsx
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
```