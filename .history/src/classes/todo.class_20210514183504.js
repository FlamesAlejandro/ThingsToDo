
export class Todo {

    // recibir el objeto y des
    static fromJson( { id, tarea, completado, creado} ){

    }

    constructor( tarea ){

        this.tarea =        tarea;

        this.id =           new Date().getTime();
        this.completado =   false;
        this.creado =       new Date();
    }

}