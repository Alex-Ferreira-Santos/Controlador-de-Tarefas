import {StyleSheet,Dimensions} from 'react-native'


var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        zIndex:0,
    },
    containerScroll:{
        alignItems: 'center',
        minHeight:height - 24,
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
        textAlign: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    textLower:{
        fontSize: 11.3,
    },
    border: {
        borderLeftWidth: 1,
    },
    description:{
        width:'30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        paddingHorizontal: 5,
    },
    data:{
        width:'30%',
        justifyContent: 'center',
        borderRightWidth: 1,
        paddingHorizontal: 5,
    },
    footer:{
        width: width,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        bottom: 0,
    },
    check: {
        width:'10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
    },
    prioridade:{
        width:'17%',
        justifyContent: 'center',
        alignItems: 'center',
        
        borderRightWidth: 1,
    },
    opcoes:{
        width:'13%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3DCCAA',
        width: '80%'
    },
    invisible:{
        display: 'none',
    }
})

const tarefa = StyleSheet.create({
    container:{
        backgroundColor: '#D6D6D6',
        width: '95%',
        borderWidth: 1,
        flexDirection: 'row',
        textAlign: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    description:{
        width:'30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        paddingHorizontal: 5,
    },
    data:{
        width:'30%',
        justifyContent: 'center',
        borderRightWidth: 1,
        paddingHorizontal: 5,
    },
    time:{
        fontSize: 12,
    },
    checkBox: {
        width:'10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
    },
    prioridade:{
        width:'17%',
        justifyContent: 'center',
        alignItems: 'center',
        
        borderRightWidth: 1,
    },
    opcoes:{
        width:'13%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        textAlign: 'center',
        fontSize: 12,
        color: 'blue',
    },
    done:{
        backgroundColor: 'rgba(24,169,0,0.5)',
    },
    late:{
        backgroundColor: 'rgba(192,69,69,0.9)',
    },
    textLate:{
        color: '#DCD300'
    },
    button:{
        flex:1,
        justifyContent: 'center',
    }
})

const form = StyleSheet.create({
    container:{
        backgroundColor: 'lightblue',
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        position: 'absolute',
        paddingBottom: 10,
        bottom: 0,
        transform: [
            {translateY:215}
        ]
        
    },
    title:{
        fontSize:25,
        margin: 10,
    },
    input:{
        backgroundColor: '#F0F0F0',
        borderRadius: 15,
        height: 35,
        borderWidth: 1,
        paddingVertical: 7,
        borderColor: '#959595',
        marginBottom: 10
        
    },
    inputDate:{
        width: 200,
        backgroundColor: '#f0f0f0',
        borderLeftWidth: 0,
        borderRadius: 15,
    },
    descricao:{
        width:310,
        height: 'auto',
    },
    label: {
        fontSize: 15,
    },
    row:{
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button:{
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        width:'48%',
        borderRadius: 15,
    },
    voltar:{
        backgroundColor: 'rgba(192,69,69,0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        width:'48%',
        borderRadius: 15,
    },
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, 
    },
    inputAndroid: {  
        width: 150,
        backgroundColor: '#f0f0f0',
        fontSize: 16,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: '#959595',
        borderRadius: 15,
        color: 'black',
    },
    placeholder:{
        fontSize: 14,
        color: '#919191'
    }
  });

export {styles, tarefa,form,pickerSelectStyles}