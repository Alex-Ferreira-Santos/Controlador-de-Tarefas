import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Database from './src/database/Database'
import Tarefas from './src/model/Tarefas'

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
    db.addProduct(tarefa)
  }

  selectTarefa(){
    const db = new Database
    db.Select()
  }

  selectByIdTarefa(){
    const db = new Database
    db.SelectById(1)
  }


  render() {
    return (
      <View style={styles.container}>
        
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="Adicionar Tarefa" onPress={this.insertTarefa}/>
        <Button title="Select Tarefa" onPress={this.selectTarefa}/>
        <Button title="Select by id tarefa" onPress={this.selectByIdTarefa}/>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
