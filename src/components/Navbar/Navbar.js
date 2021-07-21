import { useState } from 'react'

import Modal from '../Modal/Modal'

import './Navbar.css'

const Navbar = () => {
	const [modalState, setModalState] = useState(false)

	const openModal = () => {
		setModalState(true)
	}
	const closeModal = () => {
		setModalState(!modalState)
	}
	return (
		<div className="wrapper">
			<Modal state={modalState} closeModal={closeModal} />
			<nav className="nav-container flex-alignment">
				<p className="logo">CN Extractor</p>
				<ul className="nav-list">
					<li onClick={openModal}>
						<p>Login</p>
					</li>
					<li onClick={openModal}>
						<p>Sign up</p>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
