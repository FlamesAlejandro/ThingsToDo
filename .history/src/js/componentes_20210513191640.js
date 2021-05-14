
export const crearTodoHtml = ( todo ) =>{

    const htmlTodo = `
        <li class="completed" data-id="abc">
            <div class="view">
                <input class="toggle" type="checkbox" checked>
                <label>${t}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;
}