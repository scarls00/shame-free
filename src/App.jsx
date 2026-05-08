import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </Router>
    </div>
  )
}

function Title() {
  return <h1>My To-do List</h1>;
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoToDelete, setTodoToDelete] = useState(null);

  function addTodo() {
    if (newTodo.trim()) {
      setTodos([...todos, { title: newTodo, completed: false }]);
      setNewTodo('');
    }
  }

  function confirmDelete() {
    setTodos(todos.filter((_, i) => i !== todoToDelete));
    setShowModal(false);
  }

  function openModal(index) {
    setShowModal(true);
    setTodoToDelete(index);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <Title />
      <div>
        <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
        <button onClick={addTodo}>Add To-Do</button>
      </div>
      <div className="todo__wrapper">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            title={todo.title}
            openModal={() => openModal(index)}
          />
        ))}
      </div>
      {showModal && <Modal title="Are you sure?" closeModal={closeModal} deleteTodo={confirmDelete} />}
    </>
  )
}

export default App