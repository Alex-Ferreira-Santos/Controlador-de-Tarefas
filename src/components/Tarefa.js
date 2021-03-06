import React,{Component} from 'react'
import {View, Text,TouchableHighlight} from 'react-native'
import {tarefa} from '../styles/index'
import CheckBox from '@react-native-community/checkbox'


class Tarefa extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked: false,
            done: '',
            late: '',
            textLate: ''
            
        }
    
    }

    render() {
        if(this.props.dataDeTermino < Date().slice(3,21)){
            this.state.late = tarefa.late
            if(this.state.checked){
                this.state.textLate = {color: 'black'}
            }else{
                this.state.textLate = tarefa.textLate
            }
            
        }
        return (
            <View style={[tarefa.container,this.state.late,this.state.done]}>
                <View style={tarefa.checkBox}>
                    <CheckBox disabled={false} value={this.state.checked} onValueChange={(newValue) => {
                        this.setState({checked: newValue})
                        if(!this.state.checked){
                            this.setState({done: tarefa.done})
                        }else{
                            this.setState({done:''})
                        }
                        }} />
                </View>
                <View style={tarefa.description}>
                    <Text style={tarefa.center}>{this.props.descricao}</Text>
                </View>
                <View style={tarefa.data}>
                    <Text style={[this.state.textLate,tarefa.time,tarefa.center]}>{this.props.dataDeTermino}</Text>
                </View>
                <View style={tarefa.prioridade}>
                    <Text style={tarefa.center}>{this.props.prioridade}</Text>
                </View>
                <View style={tarefa.opcoes}>
                    <TouchableHighlight style={[tarefa.button,tarefa.editar]} underlayColor='white' onPress={ () => { 
                        this.props.funcao(this.props.id)
                    }}>
                        <Text style={[tarefa.text, tarefa.center]}>Editar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={tarefa.button} underlayColor='white' onPress={ () => { 
                        this.props.excluir(this.props.id)
                    }}>
                        <Text style={[tarefa.text,tarefa.center]}>Excluir</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default Tarefa