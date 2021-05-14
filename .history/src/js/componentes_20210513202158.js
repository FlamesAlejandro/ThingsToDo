// seleccionar html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

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

txtInput.addEventListener('keyup', () => {
    
})