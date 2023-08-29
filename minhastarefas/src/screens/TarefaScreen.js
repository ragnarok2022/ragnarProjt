import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import TarefaController from '../controllers/TarefaController'


export default function TarefaScreen() {
  const [titulo, setTitulo] = useState('')
  const [mudarTarefaId, setMudarTarefaId] = useState(null)
  const [tarefas, setTarefas] = useState([])
  const tarefaController = new TarefaController()

  function editarTarefas(){
    setTarefas(tarefaController.handleVerTarefa())
  }

  function handleAdicionarTarefa(){
    if(titulo.trim() !== ''){
      if(mudarTarefaId){
        tarefaController.handleEditarTarefa(mudarTarefaId, titulo)
        setMudarTarefaId(null)
      } else {
        tarefaController.handleCriarTarefa(titulo)
      }
      setMudarTarefaId('')
      editarTarefas()
    }
  }

  function handleApagarTarefa(id){
    tarefaController.handleExcluirTarefa(id)
    editarTarefas()
  }

  function handleMudarTarefa(id, titulo){
    setTitulo(titulo)
    setMudarTarefaId(id)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>Lista de Tarefas</Text>
      <FlatList
        data={tarefas}
        renderItem={({ item })=> (
          <View>
            <Text>T{item.titulo}</Text>
            <Button title='Editar' onPress={()=>handleMudarTarefa(item.id, Item.titulo)} />
            <Button title='Excluir' onPress={()=>handleApagarTarefa(item.id)} />
          </View>)}
        keyExtractor={(item)=> item.id.toString()}   
      
            
      />
      <View style={styles.addTarefa}>
        <TextInput style={styles.textInput} placeholder='Digite a tarefa' />
        <Button title='Adicionar' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleApp: {
    paddingTop: 20,
    fontSize: 30,
    fontWeight: 'bold'
  },
  addTarefa: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    flex: 1,
    marginRight: 10,
    flexDirection: 'row'
  }
})

