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
            console.log("Checando a integridade do plugin...")
            
                console.log("Abrindo Banco de Dados...")
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
}