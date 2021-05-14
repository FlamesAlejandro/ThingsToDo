import { Todo } from '../classes';

import { todoList } from '../index';
// seleccionar html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrarCompletado = document.querySelector('.clear-completed');

export const crearTodoHtml = ( todo ) =>{

    // crear html
    const htmlTodo = `
        <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
            <div class="view">
                <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
                <label>${ todo.tarea }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;

    // crear elemento div que contendra el html
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    // unir html al elemento html seleccionado, first element child para que tome el primer div del html, y siga desde ahi
    divTodoList.append( div.firstElementChild );
    
    return div.firstElementChild;
}

// Eventos

txtInput.addEventListener('keyup', ( event ) => {

    if ( event.keyCode === 13 && txtInput.value.length > 0 ){
        
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo );
        txtInput.value = "";
    }
});

divTodoList.addEventListener('click', (event) => {

    const nombreElemento = event.target.localName; // Para ver si el seleccionado es un input, label, button
    const todoElemento = event.target.parentElement.parentElement; // para seleccionar el li
    const todoId = todoElemento.getAttribute('data-id'); // sacar el valor de data-id

    if ( nombreElemento.includes('input')){ //click en el checkbox
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed'); //para añadir el tachado a tareas hechas, classList toma todos los elementos, y cambiamos el completed
    
    } else if( nombreElemento.includes('button')) { // click en la X para borrar 
        todoList.eliminarTodo( todoId ); // eliminar de la lista
        divTodoList.removeChild( todoElemento ); // eliminar el html

    }
})

btnBorrarCompletado.addEventListener('click', (event) => {
    todoList
})