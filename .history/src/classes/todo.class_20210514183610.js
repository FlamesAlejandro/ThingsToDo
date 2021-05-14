
export class Todo {

    // recibir el objeto y desustructurarlo
    static fromJson( { id, tarea, completado, creado} ){
        const tempTodo = new Todo( tarea );

        tempTodo.id             = id;
        tempTodo.completado     = completado;
        tempTodo.creado         =
    }

    constructor( tarea ){

        this.tarea =        tarea;

        this.id =           new Date().getTime();
        this.completado =   false;
        this.creado =       new Date();
    }

}