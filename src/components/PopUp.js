import React,{Component} from 'react'
import {Text,View,TouchableHighlight,TouchableOpacity} from 'react-native'
import { popup } from '../styles'

class PopUp extends Component {
    render() {
        return (
            <View style={popup.container}>
                <Text style={popup.title}>Excluir Produto</Text>
                <Text style={popup.textCenter}>Tem certeza que deseja excluir a tarefa de:</Text>
                <Text style={popup.textCenter}>{this.props.description}</Text>
                <View>
                    <TouchableHighlight style={popup.voltar}>
                        <Text style={popup.textCenter}>Voltar</Text>
                    </TouchableHighlight>
                    <TouchableOpacity style={popup.excluir}>
                        <Text style={popup.textCenter}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default PopUp