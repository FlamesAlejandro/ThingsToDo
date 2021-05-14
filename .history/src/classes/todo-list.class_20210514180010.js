
export class TodoList {

    constructor() {
        this.cargarLocalStorage();
    }

    nuevoTodo() {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ){
        // filtrar el arreglo con filter, sacar solo el todo que tenga el mismo id
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();

    }

    marcarCompletado( id ){
        // la tarea en esta lista de tareas
        for( const todo in this.todos ){
            // con 2 parentesis porque todo.id puede ser string
            if( todo.id == id){
                // !todo.completado es la negacion del estado actual
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletado(){
        this.todos = this.todos.filter( todo => !todo.completado ); // Eliminar todos los completados, el filter solo excepciona segun la condicion
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem( 'todo', JSON.stringify(this.todos) ); // this.todos es un objeto, pasarlo como string lista
    }

    cargarLocalStorage(){
        if ( localStorage.getItem( 'todo' )){
            this.todos = localStorage.getItem( 'todo' );
        }
    }

}