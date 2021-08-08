import React from 'react';
import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';


function App() {
  const [state, setState] = useState({
    todos: [],
    todo: '',
  });
  return (
    <div className="App">
      <header className="App-header">
        React Todo
      </header>
      <Form />
      <List />
    </div>
  );
}

export default App;
