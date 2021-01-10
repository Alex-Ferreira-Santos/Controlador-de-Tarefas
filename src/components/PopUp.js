import React,{Component} from 'react'
import {Text,View,TouchableHighlight,TouchableOpacity} from 'react-native'
import { popup } from '../styles'

class PopUp extends Component {
    render() { 
        return (
            <View style={popup.container}>
                <Text style={popup.title}>Excluir Produto</Text>
                <Text style={popup.textCenter}>Tem certeza que deseja excluir a tarefa de:</Text>
                <Text style={popup.description}>{this.props.description[0].descricao}</Text>
                <View style={popup.buttons}>
                    <TouchableHighlight style={popup.voltar} onPress={() => {
                        
                    }}>
                        <Text style={popup.textCenter}>Voltar</Text>
                    </TouchableHighlight>
                    <TouchableOpacity style={popup.excluir} onPress={() => {}}>
                        <Text style={popup.textCenter}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default PopUp