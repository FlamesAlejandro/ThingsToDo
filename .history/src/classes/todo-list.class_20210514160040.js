
export class TodoList {

    constructor() {
        this.todos = [];
    }

    nuevoTodo() {
        this.todos.push( todo );
    }

    eliminarTodo( id ){
        // filtrar el arreglo con filter, sacar solo el todo que tenga el mismo id
        this.todos = this.todos.filter( todo => todo.id != )

    }

    marcarCompletado( id ){
        // la tarea en esta lista de tareas
        for( const todo in this.todos ){
            // con 2 parentesis porque todo.id puede ser string
            if( todo.id == id){
                // !todo.completado es la negacion del estado actual
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletado(){

    }

}