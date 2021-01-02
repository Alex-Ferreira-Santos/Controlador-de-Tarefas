import React,{Component} from 'react'
import {View, Text,TouchableOpacity} from 'react-native'
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
            <View style={tarefa.container}>
                <View style={tarefa.checkBox}>
                    <CheckBox disabled={false} value={this.state.checked} onValueChange={(newValue) => {this.setState({checked: newValue})}} />
                </View>
                <View style={tarefa.description}>
                    <Text>{this.props.descricao}</Text>
                </View>
                <View style={tarefa.data}>
                    <Text>{this.props.dataDeTermino}</Text>
                </View>
                <View style={tarefa.prioridade}>
                    <Text>{this.props.prioridade}</Text>
                </View>
                <View style={tarefa.opcoes}>
                    <TouchableOpacity style={tarefa.button} onPress={ () => { }}>
                        <Text style={tarefa.text}>Editar</Text>
                    </TouchableOpacity>
                    
                    <Text style={tarefa.text}>Excluir</Text>
                </View>
            </View>
        )
    }
}

export default Tarefa