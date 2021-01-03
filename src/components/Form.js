import React,{Component} from 'react'
import {View,Text,TextInput} from 'react-native'
import {form} from '../styles/index'
import DataPicker from 'react-native-datepicker'


class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            date: null,
        }
    }
    render() {
        return (
            <View style={form.container}>
                <Text style={form.title}>Cadastrar nova tarefa</Text>
                <View style={form.descricao}>
                    <Text style={form.label}>Descrição</Text>
                    <TextInput placeholder="Escreva a descrição aqui" style={form.input}/>
                </View>
                <View>
                    <View>
                        <Text style={form.label}>Data de término</Text>
                        <DataPicker style={form.inputDate} customStyles={{
                            dateInput:{
                                borderRadius:15,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                            },
                        }} mode='date'/>
                    </View>
                    <View>
                        <Text style={form.label}>Prioridade</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Form