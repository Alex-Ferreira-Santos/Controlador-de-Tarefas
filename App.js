import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Database from './src/database/Database'

export default class App extends Component {

  conexao(){
    const database = new Database()
    database.initDB()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="testar conexão" onPress={this.conexao}/>
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
