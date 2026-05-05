import './App.css'
import Todo from './components/Todo.jsx'
import Modal from './components/modal.jsx'  
import { useState } from 'react'


function App() {
  const [showModal, setShowModal] = useState(false);
  function openModal() {
  setShowModal(true);
}

function closeModal() {
  setShowModal(false);
}

  return (
    <>
      <Title />
      <div>
        <input type="text" onChange={(event) => setNewTodo(event.target.value)} />
        <button onClick={addTodo}>Add To-Do</button>
      </div>
      <h1>My To-do List</h1>
      <div className="todo__wrapper ">
        <Todo 
        title="Finish Frontend Simplified"/>
        <Todo 
        title="Finish Interview Section" />
        <Todo 
        title="Land a $100k Job"/>
      </div>
      <Modal title="Are you sure?" />
    </>
  )
}


export default App
