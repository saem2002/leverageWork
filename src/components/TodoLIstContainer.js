import React, { useState } from 'react';
import TodoList from './TodoList';
import './container.css';
import Navbar from './Navbar';
const TodoListContainer = () => {
  const [lists, setLists] = useState([1]); 

  const addList = () => {
    setLists([...lists, lists.length + 1]);
  };

  return (
    <>
    <Navbar/>
    <div>
      <button className='box' onClick={addList}>+</button>
      <div className="lists-container" style={{ display: 'flex', flexWrap: 'wrap', maxHeight: '80vh', overflowY: 'auto' }}>
        {lists.map((listId) => (
          <div key={listId} style={{ marginRight: '10px', marginBottom: '10px' }}>
            <TodoList />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TodoListContainer;
