import './Todo.css'

function Todo({ title, openModal }) {
    return (
      <div className="todo">    
        <p>{ title }</p>
        <button onClick={openModal}>Delete</button>
      </div>
    )
}

export default Todo