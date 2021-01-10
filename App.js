import React,{Component} from 'react';
import {Text, View,ScrollView} from 'react-native';
import Database from './src/database/Database'
import {styles,tarefa} from './src/styles/index'
import Tarefa from './src/components/Tarefa'
import Form from './src/components/Form'
import PopUp from './src/components/PopUp'

export default class App extends Component {

  constructor(props){
    super(props); 
    this.state = {
      teste: 'teste',
      tarefas: [],
      tarefa: [],
      formButton: 'Inserir',
      formTitle: 'Cadastrar nova tarefa',
      idTarefa: null,
    }
    this.edit = this.edit.bind(this) 
    this.selectByIdTarefa = this.selectByIdTarefa.bind(this)
    this.selectTarefa = this.selectTarefa.bind(this)
    this.tarefas = []
    this.tarefa = []
    this.selectTarefa()
  }
   
  async selectTarefa(){
    
    const db = new Database  
    await db.Select().then(data => {
      this.atribuiValor(data,this.tarefas)   
    })
    this.setState({tarefas: this.tarefas})
  }
 
  edit(){
    this.setState({formButton: 'Editar'})
    this.setState({formTitle: 'Editar a tarefa'}) 
  }
  
  atribuiValor(data,array){ 
    array.push(data)
    if(array.length > 1){
      array.shift()
    }
  } 

  async selectByIdTarefa(id){
    const db = new Database 
    await db.SelectById(id).then(data => {
      this.atribuiValor(data,this.tarefa)
    })
    this.setState({tarefa: this.tarefa})
    this.edit()
  }
 
  deleteTarefa(){
    const db = new Database
    db.deleteTarefa(1) 
  }

  render() {  
    if(this.state.tarefas[0] === undefined){
      return <Text>Loading</Text>
    }else{  
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
        
        {this.state.tarefas[0].map( tarefa =>
          (<Tarefa descricao={tarefa.descricao} key={tarefa.id} dataDeTermino={tarefa.dataDeTermino} prioridade={tarefa.prioridade} funcao={this.selectByIdTarefa} id={tarefa.id}/>) 
          
        )} 
      </ScrollView> 
         <PopUp description={'teste de descricao'}/>
        <Form titulo={this.state.formTitle} button={this.state.formButton} tarefa={this.state.tarefa} select={this.selectTarefa}/>                 
      </View>
    );
  }

  }
}