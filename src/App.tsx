import React, { useState, useEffect } from 'react';

import { Todo } from './interfaces';

import Form from './components/Form';
import List from './components/List';
import styled from 'styled-components';

const moveline = document.createElement('li');
moveline.className = 'moveline';

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

function App(){
  const [newTodo, setNewTodo] = useState<string>('');
  const [todos, setTodos] = useState<Array<Todo>>([])
  const [over, setOver] = useState<any>('')
  const [dragged, setDragged] = useState<any>('')

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
    setTodos([{ id: 1, text: 'javascript.info에서 javascript 공부', done: false },
    { id: 2, text: 'javascript.info에서 javascript 공부', done: false },
    { id: 3, text: 'javascript.info에서 javascript 공부', done: true }]);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

 function dragStart(e:any){
   setDragged(e.target);
   e.dataTransfer.effectAllowed = 'move';
   e.dataTransfer.setData('text/html',dragged);
 }

 function dragEnd(e:any){
    const place = document.querySelector('.moveline');

  if(place){
     dragged.parentNode.removeChild(moveline);
   }

  if(over.tagName === ("LI" || "P" )){
   dragged.style.display='flex';
   const data = [...todos];
   let from = Number(dragged.dataset.id);
   let to = Number(over.dataset.id);
   if(from < to) to--;
   data.splice(to, 0, data.splice(from, 1)[0]);
   setTodos(data);
   
  } else{
   dragged.style.display='flex';
   const data = [...todos];
   setTodos(data);
  }
 }

 function dragOver(e:any){
   e.preventDefault();
   dragged.style.display= 'none';
   setOver(e.target);
   if(e.target.className === 'moveline') {
     return;
   }
   if( e.target.tagName === ("LI"|| "P")){
     e.target.parentNode.insertBefore(moveline, e.target);
   } 
 }

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
        dragStart={dragStart}
        dragEnd={dragEnd}
        dragOver={dragOver}
      />
    </AppContainer>
  );
}

export default App;
