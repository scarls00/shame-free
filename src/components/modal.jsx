import './modal.css'

function Modal({ title, closeModal, deleteTodo }) {
    return (
        <>
           <div className="modal">  
            <p className="modal__title">{title}</p>
            <div className="modal__buttons">
                <button onClick={closeModal}>Cancel</button>
                <button onClick={deleteTodo}>Confirm</button>
            </div>
            </div>
            <div className="backdrop" onClick={closeModal}></div>
        </>

    )
}

export default Modal