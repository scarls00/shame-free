import './App.css'
import Todo from './components/Todo.jsx'
import Modal from './components/modal.jsx'  

function App() {
  return (
    <>
      <h1>My To-do List</h1>
      <div className="todo__wrapper ">
        <Todo />
        <Todo />
        <Todo />  
      </div>
      <Modal />
    </>
  )
}

const [showModal, setShowModal] = useState(false);
<Modal onClose={() => setShowModal(false)} />

export default App
