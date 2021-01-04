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
            show: false,
            time: '',
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
                    </View>
                </View>
            </View>
        )
    }
}

export default Form