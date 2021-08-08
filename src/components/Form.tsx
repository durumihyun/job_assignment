import React, { useState } from 'react';
import styled from 'styled-components';

const PLACEHOLDER = "오늘 할일을 입력해주세요.";

const TodoForm = styled.form`
  width: 680px;
  margin-bottom: 16px;
  padding: 0 8px;
  border-bottom: 1px solid #979797;
`;

const TodoInput = styled.input`
  width: 100%;
  font-size: 20px;
  line-height: 1.6;
  color: #4D4D60;

  border: none;
  padding: 0;
  margin: 0;

  &::placeholder {
    color: #B5B7BF
}

  &:focus{
    outline: unset;
  }
`;

function Form({ handleAddTodo, handleChange, newTodo }: {
    handleAddTodo: () => void,
    handleChange: (value: string) => void,
    newTodo: string,
}) {
    const [isEmpty, setIsEmpty] = useState<Boolean>(false);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleChange(e.target.value)
        if (e.target.value) {
            setIsEmpty(false);
        }
    }

    function handleSubmit(e: React.KeyboardEvent<HTMLFormElement>) {
        e.preventDefault();
        newTodo
            ? handleAddTodo()
            : setIsEmpty(true)
    }

    return (
        <TodoForm className="Todo-form" onSubmit={handleSubmit} >
            {(isEmpty) && <div> 💥내용을 입력하세요</div>}
            <TodoInput
                className="Todo-input"
                placeholder={PLACEHOLDER}
                value={newTodo}
                onChange={onChange}
            />
        </TodoForm>
    );
};

export default Form;
