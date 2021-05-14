import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

TodoList.todos.forEach( todo => crearTodoHtml( todo ) );
