// seleccionar html
const divTodoList = document.querySelector('.todo-list');

export const crearTodoHtml = ( todo ) =>{

    // crear html
    const htmlTodo = `
        <li class="${ (todo.completado) }" data-id="abc">
            <div class="view">
                <input class="toggle" type="checkbox" checked>
                <label>${ todo.tarea }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;

    // crear elemento div que contendra el html
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    // unir html al elemento html seleccionado
    divTodoList.append( div );
    
    return div;
}