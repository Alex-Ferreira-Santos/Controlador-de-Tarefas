import {StyleSheet,Dimensions} from 'react-native'

var width = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 34,
    },
})

const tarefa = StyleSheet.create({
    container:{
        width: width,
        border: '1px solid'
    }
})

export {styles, tarefa}