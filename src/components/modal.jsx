import './modal.css'

function Modal() {
    return (
        <>
           <div className="modal">  
            <p className="modal__title">Modal Title</p>
            <div className="modal__buttons">This is a modal window</div>
                <button className="modal__close" onClick={onClose}>Close</button>
                <button className="modal__confirm">Confirm</button>
            </div>
            <div className="backdrop" onClick={onClose}></div>
        </>

    )
}

export default Modal