import TarefaModel from "../models/TarefaModel";


class TarefaController{
    constructor(){
        this.tarefa = new TarefaModel()
    }

    handleCriarTarefa(titulo){
        this.tarefa.criarTarefa(titulo)
    }

    handleVerTarefa(){
        return this.tarefa.verTarefa()
    }

    handleEditarTarefa(id, titulo){
        this.tarefa.editarTarefa(id, titulo)
    }

    handleExcluirTarefa(id){
        this.tarefa.excluirTarefa(id)
    }
}

export default TarefaController
