import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Database from './src/database/Database'
import Tarefas from './src/model/Tarefas'
import {styles} from './src/styles/index'
import Tarefa from './src/components/Tarefa'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      teste: 'teste'
    }
  }

  insertTarefa(){
    const tarefa = new Tarefas(1,'teste de descricao','alta','19/10/2000')
    const db = new Database()
    db.addTarefa(tarefa)
  }

  selectTarefa(){
    const db = new Database
    db.Select()
  }

  selectByIdTarefa(){
    const db = new Database
    db.SelectById(1)
  }

  updateTarefa(){
    const tarefa = new Tarefas(1,'teste de update','media','1/1/2021')
    const db = new Database
    db.updateTarefa(1, tarefa)
  }

  deleteTarefa(){
    const db = new Database
    db.deleteTarefa(1)
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tarefas</Text>
        <Tarefa descricao={'lavar a louça'} dataDeTermino={'01/01/2021 10:00'} prioridade={'Baixa'}/>
      </View>
    );
  }

  
}