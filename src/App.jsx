import './App.css'
import Todo from './components/Todo.jsx'
import Modal from './components/modal.jsx'  
import { useState } from 'react'


function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h1>My To-do List</h1>
      <div className="todo__wrapper ">
        <Todo />
        <Todo />
        <Todo />
      </div>
      <Modal onClose={() => setShowModal(false)} />
    </>
  )
}


export default App
