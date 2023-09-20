import './App.css';

import {BrowserRouter, Route,Routes}from 'react-router-dom'


import TodoListContainer from './components/TodoLIstContainer';


function App() {
  return (
    <>
    
    <BrowserRouter>
       
      <Routes>
       
        <Route path='/' element={<TodoListContainer/>}/>
        <Route path='/weather' />
        <Route path='/cal'/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
