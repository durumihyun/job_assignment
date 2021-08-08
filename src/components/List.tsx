import React from 'react';

import { Todo } from '../interfaces';

import Item from './Item';
import styled from 'styled-components';

const TodoList = styled.ul`
 width: 680px;
  height: 100%;
  margin: 0;
  padding: 0;
`

function List({ todos, handleToggle, handleRemove }: {
    todos: Array<Todo>,
    handleToggle: (id: number) => void,
    handleRemove: (id: number) => void,
}) {
    return (
        <TodoList className="Todo-list">
            {todos.map(todo => (
                <Item
                    key={todo.id}
                    todo={todo}
                    handleToggle={handleToggle}
                    handleRemove={handleRemove}
                />
            ))}
        </TodoList>
    );
};

export default List;