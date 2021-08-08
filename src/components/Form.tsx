import React, { useState } from 'react';

const PLACEHOLDER = "오늘 할일을 입력해주세요."

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
        <form className="Todo-form" onSubmit={handleSubmit} >
            {(isEmpty) && <div> 💥값을 입력하세요</div>}
            <input
                className="Todo-input"
                placeholder={PLACEHOLDER}
                value={newTodo}
                onChange={onChange}
            />
        </form>
    );
};

export default Form;
