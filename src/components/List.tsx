import React from 'react';

import { Todo } from '../interfaces';

import Item from './Item';
import styled from 'styled-components';

const TodoList = styled.ul`
 width: 680px;
  height: 100%;
  margin: 0;
  padding: 0;
  .moveline{
      border: 5px solid #3CE6BE;
      background: #3CE6BE;
      list-style:none;      
  }
`;

function List({ todos, handleToggle, handleRemove, dragStart, dragEnd, dragOver }: {
    todos: Array<Todo>,
    handleToggle: (id: number) => void,
    handleRemove: (id: number) => void,
    dragStart: (e: any) => void,
    dragEnd: (e: any) => void,
    dragOver: (e: any) => void,
}) {
    return (
        <TodoList className="Todo-list" onDragOver={dragOver}>
            {todos.map((todo,i) => (
                <Item
                    key={todo.id}
                    i={i}
                    todo={todo}
                    handleToggle={handleToggle}
                    handleRemove={handleRemove}
                    draggable={true}
                    dragStart={dragStart}
                    dragEnd={dragEnd}
                />
            ))}
        </TodoList>
    );
};

export default List;