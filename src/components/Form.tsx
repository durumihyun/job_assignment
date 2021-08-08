import React from 'react';

const PLACEHOLDER = "오늘 할일을 입력해주세요."

function Form() {
    return (
        <form className="Todo-form" >
            <input className="Todo-input" placeholder={PLACEHOLDER} />
        </form>
    );
};

export default Form;
