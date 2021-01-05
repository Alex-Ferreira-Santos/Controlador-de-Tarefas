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
    
    /*Colocar função de edição via props */

    render() {
        return (
            <View style={[tarefa.container]}>
                <View style={tarefa.checkBox}>
                    <CheckBox disabled={false} value={this.state.checked} onValueChange={(newValue) => {this.setState({checked: newValue})}} />
                </View>
                <View style={tarefa.description}>
                    <Text style={tarefa.center}>{this.props.descricao}</Text>
                </View>
                <View style={tarefa.data}>
                    <Text style={[tarefa.time,tarefa.center]}>{this.props.dataDeTermino}</Text>
                </View>
                <View style={tarefa.prioridade}>
                    <Text style={tarefa.center}>{this.props.prioridade}</Text>
                </View>
                <View style={tarefa.opcoes}>
                    <TouchableHighlight style={tarefa.button} underlayColor='white' onPress={ () => { }}>
                        <Text style={[tarefa.text, tarefa.editar,tarefa.center]}>Editar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={tarefa.button} underlayColor='white' onPress={ () => { }}>
                        <Text style={[tarefa.text,tarefa.center]}>Excluir</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default Tarefa