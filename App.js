import React,{Component} from 'react';
import {Text, View,ScrollView, TouchableOpacity } from 'react-native';
import Database from './src/database/Database'
import Tarefas from './src/model/Tarefas'
import {styles,tarefa} from './src/styles/index'
import Tarefa from './src/components/Tarefa'
import Form from './src/components/Form'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      teste: 'teste',
    }
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
      <View style={{flex:1}}>
      <ScrollView style={styles.container} contentContainerStyle={styles.containerScroll}>
        <Text style={styles.title}>Tarefas</Text>
        <View style={[tarefa.container]}>
          <View style={styles.check}>
            <Text style={styles.textLower}>Check</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.textLower}>Descrição</Text>
          </View>
          <View style={styles.data}>
            <Text style={styles.textLower}>Data de término</Text>
          </View>
          <View style={styles.prioridade}>
            <Text style={styles.textLower}>prioridade</Text>
          </View>
          <View style={styles.opcoes}>
            <Text style={styles.textLower}>Opções</Text>
          </View>
        </View>
        
        <Tarefa descricao={'lavar a louça'} dataDeTermino={'01/01/2021 10:00'} prioridade={'Baixa'}/>
        <Tarefa descricao={'Estudar para a prova de matematica amanha'} dataDeTermino={'01/01/2021 10:00'} prioridade={'Alta'}/>
        <Tarefa descricao={'lavar a louça'} dataDeTermino={'01/01/2021 10:00'} prioridade={'Media'}/>
        
        
      </ScrollView>
        <Form titulo={'Cadastrar nova tarefa'} button={'Inserir'}/>
        
        
        
        
        
        
        
       
        
        
        
        
        
        
        
        
        
        
      </View>
    );
  }

  
}