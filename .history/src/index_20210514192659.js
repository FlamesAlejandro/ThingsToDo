import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//cargar los todo en el html
TodoList.todos.forEach(crearTodoHtml);
// lo mismo ( todo => crearTodoHtml( todo ) );
