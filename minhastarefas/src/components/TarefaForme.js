import React from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'

export default function TarefaForme() {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Título'
        velue={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        placeholder='Descrição'
        velue={descricao}
        onChangeText={setDescricao}
      />
      <Button title='Cadastrar' onPress={cadastrarTarefa} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center'
  }
})
