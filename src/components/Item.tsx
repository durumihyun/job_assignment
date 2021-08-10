import React from 'react';

import styled from 'styled-components';

import { Todo } from '../interfaces';

import { ReactComponent as Tick } from '../Icons/tick.svg';
import { ReactComponent as Done } from '../Icons/done.svg';
import { ReactComponent as Delete } from '../Icons/x-mark.svg';

const Container = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 40px;
  margin-bottom: 4px;
  line-height: 40px;
  .Todo-delete-icon{
    display: none;
  }
  &:hover {
       .Todo-delete-icon{
           display: inline-block;
       }
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    &:hover {
       .Todo-check-icon{
           fill: #32E6BC;
       }
    }
`;

const TodoText = styled.p<{ done: boolean }>`
  margin: 0;
  font-size: 18px;
  color: #4D4D60;
  cursor: pointer;
  text-decoration: ${(props) => props.done ? 'line-through' : 'none'}
 `

function Item({ todo, handleToggle, handleRemove, draggable, dragStart, dragEnd,i  }: {
    todo: Todo,
    handleToggle: (id: number) => void,
    handleRemove: (id: number) => void,
    draggable:boolean,
    dragEnd: (e: any) => void,
    dragStart: (e: any) => void,
    i:Number,
}) {
    const { id, text, done } = todo;

    return (
        <Container draggable={true}  onDragStart={dragStart} onDragEnd={dragEnd} data-id={i}>
            <Wrapper>
                {done
                    ? <Done className="Todo-check-icon" onClick={() => handleToggle(id)} />
                    : <Tick className="Todo-check-icon" onClick={() => handleToggle(id)} />

                }
                <TodoText onClick={() => handleToggle(id)} done={done}>
                    {text}
                </TodoText>
            </Wrapper>
            <Delete className="Todo-delete-icon" onClick={() => handleRemove(id)} />
        </Container>
    );
};

export default Item;