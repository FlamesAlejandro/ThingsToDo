
export class Todo {

    // 
    static fromJson( { id, tarea, completado, creado} ){

    }

    constructor( tarea ){

        this.tarea =        tarea;

        this.id =           new Date().getTime();
        this.completado =   false;
        this.creado =       new Date();
    }

}