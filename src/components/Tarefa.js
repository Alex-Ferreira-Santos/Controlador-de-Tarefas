import React,{Component} from 'react'
import {View, Text,TouchableHighlight} from 'react-native'
import {tarefa} from '../styles/index'
import CheckBox from '@react-native-community/checkbox'


class Tarefa extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked: false
        }
    }
    

    render() {
        return (
            <View style={[tarefa.container]}>
                <View style={tarefa.checkBox}>
                    <CheckBox disabled={false} value={this.state.checked} onValueChange={(newValue) => {this.setState({checked: newValue})}} />
                </View>
                <View style={tarefa.description}>
                    <Text>{this.props.descricao}</Text>
                </View>
                <View style={tarefa.data}>
                    <Text style={tarefa.time}>{this.props.dataDeTermino}</Text>
                </View>
                <View style={tarefa.prioridade}>
                    <Text>{this.props.prioridade}</Text>
                </View>
                <View style={tarefa.opcoes}>
                    <TouchableHighlight underlayColor='white' onPress={ () => { }}>
                        <Text style={[tarefa.editar, tarefa.text]}>Editar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='white' onPress={ () => { }}>
                        <Text style={tarefa.text}>Excluir</Text>
                    </TouchableHighlight>
                    
                </View>
            </View>
        )
    }
}

export default Tarefa