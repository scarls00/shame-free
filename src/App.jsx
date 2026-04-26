import './App.css'
import Todo from './components/Todo.jsx'
import Modal from './components/modal.jsx'  

function App() {
  return (
    <>
      <Title />
      <div className="todo__wrapper ">
      <h1>My To-do List</h1>
        <Todo />
        <Todo />
        <Todo />  
      </div>
      <Modal />
    </>
  )
}

export default App
