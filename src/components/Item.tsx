import React from 'react';

import { Todo } from '../interfaces';

import { ReactComponent as Tick } from '../Icons/tick.svg';
import { ReactComponent as Done } from '../Icons/done.svg';
import { ReactComponent as Delete } from '../Icons/x-mark.svg';

function Item({ todo }: { todo: Todo }) {
    return (
        <li className="Todo-item">
            <Tick className="Todo-check-icon" />
            <p className="Todo-text">
                {todo.text}
            </p>
            <Delete className="Todo-delete-icon" />
        </li>
    );
};

export default Item;