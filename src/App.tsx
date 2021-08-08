import React, { useState } from 'react';

import { Todo } from './interfaces';

import Form from './components/Form';
import List from './components/List';

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [todos, setTodos] = useState<Array<Todo>>([{ id: 1, text: ' javascript.info에서 javascript 공부', done: false }])

  function handleChange(value: string) {
    setNewTodo(value);
  }

  function handleAddTodo() {
    const id = new Date().getTime();
    setTodos([...todos, { id: id, text: newTodo, done: false }]);
    setNewTodo('');
  }

  return (
    <div className="App">
      <header className="App-header">
        React Todo
      </header>
      <Form
        handleAddTodo={handleAddTodo}
        handleChange={handleChange}
        newTodo={newTodo}
      />
      <List todos={todos} />
    </div>
  );
}

export default App;
