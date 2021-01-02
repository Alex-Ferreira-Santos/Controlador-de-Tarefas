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
})

const tarefa = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(24,169,0,0.5)',
        width: '95%',
        height: 35,
        borderWidth: 1,
        flexDirection: 'row'
    },
    description:{
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
        fontSize: 10,
        justifyContent: 'center',
        borderRightWidth: 1,
        paddingHorizontal: 5,
    },
    prioridade:{
        justifyContent: 'center',
        paddingHorizontal: 5,
        borderRightWidth: 1,
    },
    opcoes:{
        
        flex: 1,
    },
    text:{
        textAlign: 'center',
        fontSize: 12,
        color: 'blue',

    },
    editar:{
        borderBottomWidth: 1,
    }
})

export {styles, tarefa}