import React,{Component} from 'react'
import {View,Text,TextInput} from 'react-native'
import {form} from '../styles/index'
import DateTimePicker from '@react-native-community/datetimepicker'


class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            date: null,
            mode: 'date',
            show: false
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
                        <DateTimePicker mode="datetime" value={new Date(1598051730000)} onChange={(value,data)=> {




                            alert(data.toString())
                            //continuar a colocar o input de hora




                        }} is24Hour={true}  
                        />
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