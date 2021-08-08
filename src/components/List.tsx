import React from 'react';

import { Todo } from '../interfaces';

import Item from './Item';

function List({ todos }: { todos: Array<Todo> }) {
    return (
        <ul className="Todo-list">
            {todos.map(todo => <Item key={todo.id} todo={todo} />)}
        </ul>
    );
};

export default List;