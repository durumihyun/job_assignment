import React, { useState } from 'react';

import { Todo } from './interfaces';

import Form from './components/Form';
import List from './components/List';
import styled from 'styled-components';
import { useEffect } from 'react';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppHeader = styled.header`
  font-size: 48px;
  font-weight: bold;
  color: #4D4D60;
  text-align: center;
  padding-bottom: 32px;
`;

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [todos, setTodos] = useState<Array<Todo>>([])

  function handleChange(value: string) {
    setNewTodo(value);
  }

  function handleAddTodo() {
    const id = new Date().getTime();
    setTodos([...todos, { id: id, text: newTodo, done: false }]);
    setNewTodo('');
  }

  function handleToggle(id: number) {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, done: !todo.done }
        : todo
    ));
  }

  function handleRemove(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  useEffect(() => {
    const savedTodos = window.localStorage.getItem('todos') || '';
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
      return;
    }
    setTodos([]);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <AppContainer>
      <AppHeader>
        React Todo
      </AppHeader>
      <Form
        handleAddTodo={handleAddTodo}
        handleChange={handleChange}
        newTodo={newTodo}
      />
      <List
        todos={todos}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
      />
    </AppContainer>
  );
}

export default App;
