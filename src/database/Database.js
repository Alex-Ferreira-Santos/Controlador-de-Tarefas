import SQLite from 'react-native-sqlite-storage'


SQLite.DEBUG(true)
SQLite.enablePromise(true)

const database_name = "Tarefas.db"
const database_version = "1.0"
const database_display_name = "Controlador de Tarefas"
const database_size = 200000

export default class Database{

    initDB(){
        let db
        return new Promise(resolve =>{
            SQLite.openDatabase(database_name,database_version,database_display_name,database_size).then(DB => {
                db = DB
                console.log("banco de dados aberto")
                db.executeSql("SELECT 1 FROM Tarefas LIMIT 1").then(()=>{
                    console.log("o banco de dados está pronto ... executando consulta SQL")
                }).catch((error)=>{
                    db = DB
                    console.log(`Erro recebido ${error}`)
                    console.log("O banco de dados não está pronto ... Criando dados")
                    db.transaction((tx)=>{
                        tx.executeSql("CREATE TABLE IF NOT EXISTS Tarefas(id, descricao, dataDeTermino, prioridade)")
                    }).then(()=>{
                        console.log("Tabela criada com sucesso")
                    }).catch(error => console.log(error))
                })
                resolve(db)
            }).catch(error => console.log("Erro causado na linha 20, causa: "+error))
        })
    }

    closeDatabase(db){
        if(db){
            console.log("Fechando Banco de dados")
            db.close().then( status => {
                console.log("Banco de dados desconectado")
            }).catch(error => this.errorCB(error))
        }else{
            console.log("A conexão com o banco não está aberta")
        }
    }

    Select(){
        return new Promise((resolve) =>{
            const products = []
            this.initDB().then( db => {
                db.transaction( tx => {
                    tx.executeSql('SELECT * FROM Tarefas',[]).then(([tx,result]) => {
                        console.log('Consulta completa')
                        console.log(result)
                        var len = result.rows.length
                        for(let i = 0; i < len; i++){
                            let row = result.rows.item(i)
                            console.log(`Tarefa ID: ${row.id}, Tarefa descricao: ${row.descricao}, Tarefa dataDeTermino: ${row.dataDeTermino}, Tarefa prioridade: ${row.prioridade}`)
                            const {id,descricao,dataDeTermino,prioridade} = row
                            products.push({id,descricao,dataDeTermino, prioridade})
                        }
                        console.log(products)
                        resolve(products)
                    })
                }).then(result => this.closeDatabase(db)).catch(err => console.log(err))
            }).catch( err => console.log(err))
        }) 
    }

    SelectById(id){
        console.log(id)
        return new Promise( resolve => {
            this.initDB().then(db => {
                db.transaction( tx => {
                    tx.executeSql(`SELECT * FROM Tarefas WHERE id = ${id}`,[]).then(([tx, result]) => {
                        console.log(result)
                        if(result.rows.length > 0) {
                            let row = result.rows.item(0)
                            console.log(`Tarefa ID: ${row.id}, Tarefa descricao: ${row.descricao}, Tarefa dataDeTermino: ${row.dataDeTermino}, Tarefa prioridade: ${row.prioridade}`)
                            resolve(row)
                        }
                    })
                }).then( result => {
                    this.closeDatabase(db)
                }).catch( err => console.log(err))
            }).catch( err => console.log(err))
        })
    }

    addProduct(tarefa){
        return new Promise(resolve => {
            this.initDB().then(db =>{
                db.transaction(tx => {
                    tx.executeSql('INSERT INTO Tarefas VALUES(?, ?, ?, ?)',[tarefa.id, tarefa.descricao, tarefa.dataDeTermino, tarefa.prioridade]).then(([tx,results]) => {
                        resolve(results)
                    })
                }).then( results => {
                    this.closeDatabase(db)
                }).catch( err => console.log(err))
            }).catch( err => console.log(err))
        })
    }
}