class TarefaModel {
    constructor() {
        this.tarefas = []
    }

    // parâmetros da tarefas: id e título

    // métodos das tarefas
    // Lambrar do CRUD

    criarTarafa(titulo) {
        const tarefa = {
            id: Date.now().toString(),
            titulo: titulo
        }
        this.tarefas.push(tarefa)
    }

    Vertarefa() {
        return this.tarefas
    }

    editarTarefa(id, titulo) {
        const tarefa = this.tarefas.findIndex((tarefa) => tarefa.id === id)
        tarefa.titulo = titulo
    }

    excluirTarefa(id) {
        const index = this.tarefas.findIndex((tarefa) => tarefa.id === id)
        if (index !== -1) {
            this.tarefas.splice(index, 1)
        }
    } 1
}

export default TarefaModel 