import {StyleSheet,Dimensions} from 'react-native'


var width = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        
    },
    title:{
        fontSize: 34,
        margin: 60,
    },
    legend: {
        flexDirection: 'row',
        width: '95%',
        backgroundColor: '#d6d6d6',
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        alignItems: 'center',
    },
    textLower:{
        fontSize: 11.5,
    },
    border: {
        borderLeftWidth: 1,
    },
    description:{
        paddingHorizontal: 29,
    },
    data:{
        borderRightWidth: 1,
        paddingHorizontal: 3,
    }
})

const tarefa = StyleSheet.create({
    container:{
        backgroundColor: '#D6D6D6',
        width: '95%',
        borderWidth: 1,
        flexDirection: 'row'
    },
    description:{
        flex:0.8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        paddingHorizontal: 5,
    },
    checkBox: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        
    },
    data:{
        justifyContent: 'center',
        borderRightWidth: 1,
        paddingHorizontal: 5,
    },
    time:{
        fontSize: 12,
    },
    prioridade:{
        flex:0.3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderRightWidth: 1,
    },
    opcoes:{
        flex:0.39,
    },
    text:{
        textAlign: 'center',
        fontSize: 12,
        color: 'blue',

    },
    editar:{
        borderBottomWidth: 1,
    },
    done:{
        backgroundColor: 'rgba(24,169,0,0.5)',
    },
    late:{
        backgroundColor: 'rgba(192,69,69,0.9)',
    },
    textLate:{
        color: '#DCD300'
    }
})

export {styles, tarefa}