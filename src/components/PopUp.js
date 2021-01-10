import React,{Component} from 'react'
import {Text,View} from 'react-native'
import { popup } from '../styles'

class PopUp extends Component {
    render() {
        return (
            <View style={popup.container}>
                <Text style={popup.title}>Excluir Produto</Text>
                <Text>Tem certeza que deseja excluir a tarefa de: {this.props.description}</Text>
            </View>
        )
    }
}

export default PopUp