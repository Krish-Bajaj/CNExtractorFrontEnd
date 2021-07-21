import './Modal.css'

const Modal = ({ state, closeModal }) => {
	return (
		<div>
			<div className={state ? 'blur' : ''} />
			<div className={state ? 'modal-wrapper open' : 'modal-wrapper'}>
				<div className="modal">
					<div className="head">
						<p className="btn-close" onClick={closeModal}></p>
					</div>
					<div className="content">
                        hello
                    </div>
				</div>
			</div>
		</div>
	)
}

export default Modal
