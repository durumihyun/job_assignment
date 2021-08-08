import React from 'react';
import { ReactComponent as Tick } from '../Icons/tick.svg';
import { ReactComponent as Done } from '../Icons/done.svg';
import { ReactComponent as Delete } from '../Icons/x-mark.svg';

function Item() {
    return (
        <li className="Todo-item">
            <Tick className="Todo-check-icon" />
            <p className="Todo-text">javascript.info에서 javascript 공부</p>
            <Delete className="Todo-delete-icon" />
        </li>
    );
};

export default Item;