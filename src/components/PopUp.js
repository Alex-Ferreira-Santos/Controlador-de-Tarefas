import React,{Component} from 'react'
import {Text,View,TouchableOpacity} from 'react-native'
import { popup } from '../styles'
import Database from '../database/Database'

class PopUp extends Component {

    deleteTarefa(id){
        const db = new Database
        db.deleteTarefa(id) 
    }

    render() { 
        return (
            <View style={popup.container}>
                <Text style={popup.title}>Excluir Produto</Text>
                <Text style={popup.textCenter}>Tem certeza que deseja excluir a tarefa de:</Text>
                <Text style={popup.description}>{this.props.description[0].descricao}</Text>
                <View style={popup.buttons}>
                    <TouchableOpacity style={popup.voltar} onPress={() => {
                        this.props.close()
                    }}>
                        <Text style={popup.textCenter}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={popup.excluir} onPress={() => {
                        this.deleteTarefa(this.props.description[0].id)
                        this.props.select()
                        this.props.close()
                    }}>
                        <Text style={popup.textCenter}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default PopUp