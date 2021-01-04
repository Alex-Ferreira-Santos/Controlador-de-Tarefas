import React,{Component} from 'react'
import {View,Text,TextInput,TouchableHighlight } from 'react-native'
import {form, pickerSelectStyles} from '../styles/index'
import DateTimePicker from '@react-native-community/datetimepicker'
import RNPickerSelect from 'react-native-picker-select' ;
import Tarefas from '../model/Tarefas'
import Database from '../database/Database'


class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            mode: 'date',
            show: false,
            time: '',
            prioridade:'Selecione a prioridade',
            description: '',
        }
        
    }

    insertTarefa(description,priority,date){
        const tarefa = new Tarefas(description,priority,date)
        const db = new Database()
        db.addTarefa(tarefa)
    }

    render() {
        return (
            <View style={[form.container,this.props.show]}>
                <Text style={form.title}>{this.props.titulo}</Text>
                <View style={form.descricao}>
                    <Text style={form.label}>Descrição</Text>
                    <TextInput placeholder="Escreva a descrição aqui" style={form.input} onChangeText={(value)=>{
                        this.setState({description: value})
                    }}/>
                </View>
                <View style={form.row}>
                    <View>
                        <Text style={form.label}>Data de término</Text>
                        <TextInput style={form.input} placeholder="Coloque a data do fim" value={this.state.time} onFocus={()=>{this.setState({show: true})}}/>
                        {this.state.show && (<DateTimePicker mode={this.state.mode} value={new Date(1598051730000)} onChange={(value,data)=> {
                            if(this.state.mode === 'date'){
                                this.setState({mode:'time'})
                            }
                            

                            let hour = data.toString().slice(15,21)
                            let day = data.toString().slice(3,15)
                            
                            this.setState({time: `${day}${hour}`})

                            if(this.state.mode === 'time'){
                                this.setState({show:false})
                                this.setState({mode:'date'})
                            }

                            
                        }} is24Hour={true}  
                        />)}
                    </View>
                    <View>
                        <Text style={form.label}>Prioridade</Text>
                        <RNPickerSelect
                            useNativeAndroidPickerStyle={false}
                            placeholder={{
                                label: 'Selecione a prioridade',
                                value: null,
                                color: '#9EA0A4',
                              }}
                            onValueChange={(value)=>{
                                this.setState({prioridade: value})
                            }}
                            style={pickerSelectStyles}
                            items={[
                                { label: 'Baixa', value: 'Baixa'},
                                { label: 'Média', value: 'Media'},
                                { label: 'Alta', value: 'Alta'},
                            ]}
                            value={this.state.prioridade} 
                        />
                    </View>
                </View>
                <TouchableHighlight style={form.button} onPress={()=>{
                    this.insertTarefa(this.state.description,this.state.prioridade,this.state.time)
                }}>
                    <Text>{this.props.button}</Text>
                </TouchableHighlight>
                
            </View>
        )
    }
}

export default Form