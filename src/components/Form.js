import React,{Component} from 'react'
import {View,Text,TextInput,TouchableHighlight,TouchableOpacity } from 'react-native'
import {form, pickerSelectStyles,styles} from '../styles/index'
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
            invisible: '',
            hideInsert: '',
            hour: '',
            day:''
        }
        this.hide = this.hide.bind(this)
        
    }
    hide(){

    }

    insertTarefa(description,date,priority){
        const tarefa = new Tarefas(description,date,priority)
        const db = new Database()
        db.addTarefa(tarefa)
    }

    updateTarefa(id,description,date,priority){ 
        const tarefa = new Tarefas(description,date,priority)
        const db = new Database
        db.updateTarefa(id, tarefa)
    }

    render() {
        return (
            <View style={[form.container,this.state.invisible]}>
                <View style={[this.state.hideInsert,styles.footer]}>
                    <TouchableOpacity style={styles.button} onPress={() =>{ 
                        this.setState({invisible: {transform:[{translateY:0}]}})
                        this.setState({hideInsert: styles.invisible})
                        
                    }}>
                        <Text>Inserir nova tarefa</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={form.title}>{this.props.titulo}</Text>
                    <View style={form.descricao}>
                        <Text style={form.label}>Descrição</Text>
                        <TextInput required={true} placeholder="Escreva a descrição aqui" style={form.input} onChangeText={(value)=>{
                            this.setState({description: value})
                        }}/>
                    </View>
                    <View style={form.row}>
                        <View>
                            <Text style={form.label}>Data de término</Text>
                            <TextInput style={form.input} placeholder="Coloque a data do fim" value={this.state.time} onFocus={()=>{this.setState({show: true})}}/>
                            {this.state.show && (<DateTimePicker mode={this.state.mode} value={new Date(1598051730000)} onChange={(value,data)=> {
                                let hour = ''
                                if(data === undefined){
                                    return;
                                }
                                if(this.state.mode === 'date'){
                                    this.setState({day: data.toString().slice(3,15)})
                                    console.log(this.state.day)
                                    console.log(this.state.hour)
                                    this.setState({mode:'time'})
                                    return;
                                }

                                //O tempo está vindo sempre dia 21 de agosto

                                if(this.state.mode === 'time'){
                                    this.setState({hour: data.toString().slice(15,21)})
                                    console.log(this.state.day)
                                    console.log(this.state.hour)
                                    this.setState({show:false})
                                    this.setState({mode:'date'})
                                }

                                this.setState({time: `${this.state.day}${this.state.hour}`})

                                
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
                    <View style={form.row}>
                        <TouchableOpacity style={form.voltar} onPress={()=>{
                            this.setState({invisible: ''})
                            this.setState({hideInsert: ''})
                        }}>
                            <Text>Voltar</Text>
                        </TouchableOpacity>
                        <TouchableHighlight style={form.button} onPress={()=>{
                            if(this.props.button === 'Inserir'){
                                this.insertTarefa(this.state.description,this.state.time,this.state.prioridade)
                                this.setState({invisible: ''}) 
                                this.setState({hideInsert: ''})
                            }else{
                                this.updateTarefa(    0  ,this.state.description,this.state.time,this.state.prioridade)
                            }
                            
                            
                        }}>
                            <Text>{this.props.button}</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

export default Form