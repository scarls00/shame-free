import './modal.css'

function Modal({ title }) {
    return (
        <>
           <div className="modal">  
            <p className="modal__title">{title}</p>
            <div className="modal__buttons">This is a modal window</div>
                <button onClick={() => console.log(`cancel`)}>Cancel</button>
                <button onClick={() => console.log(`Confirm`)}>Confirm</button>
            </div>
            <div className="backdrop" onClick={onClose}></div>
        </>

    )
}

export default Modal