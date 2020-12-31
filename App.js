import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Database from './src/database/Database'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      teste: 'teste'
    }
  }

  OpenConnection(){
    const db = new Database()
    db.initDB()
  }

  





  render() {
    return (
      <View style={styles.container}>
        
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="Abrir conexão" onPress={this.OpenConnection}/>
        <Button title="Listar tarefa" onPress={this.closeConexao}/>
        
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
