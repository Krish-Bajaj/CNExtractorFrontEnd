import { useState } from 'react'

import { signinUser, createUser, logoutUser } from '../../services/firebaseFunctions'
import Modal from '../Modal/Modal'

import './Navbar.css'

const Navbar = () => {
	const [modalState, setModalState] = useState(false)
	const [type, setType] = useState('login')

	const openModal = action => {
		setType(action)
		setModalState(true)
	}
	const closeModal = () => {
		setModalState(!modalState)
	}
	return (
		<div className="wrapper">
			<Modal
				state={modalState}
				closeModal={closeModal}
				type={type === 'login' ? <LoginForm /> : <SignupForm />}
			/>
			<nav className="nav-container flex-alignment">
				<p className="logo">CN Extractor</p>
				<ul className="nav-list">
					<li onClick={() => openModal('login')}>
						<p>Login</p>
					</li>
					<li onClick={() => openModal('signup')}>
						<p>Sign up</p>
					</li>
					<li onClick={logoutUser}>
						<p>Logout</p>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar

const LoginForm = () => {
	const handleSignin = e => {
		e.preventDefault()
		signinUser(
			document.getElementById('getEmail2').value,
			document.getElementById('getPassword2').value
		)
	}
	return (
		<div>
			<p style={{ paddingTop: '2rem' }}>Sign in:</p>
			<form onSubmit={handleSignin}>
				<label>Email:</label>
				<input type="email" id="getEmail2" />
				<label>Password:</label>
				<input type="text" id="getPassword2" />
				<button>Sign in</button>
			</form>
		</div>
	)
}

const SignupForm = () => {
	const handleSignup = e => {
		e.preventDefault()
		createUser(
			document.getElementById('getEmail1').value,
			document.getElementById('getPassword1').value
		)
	}
	return (
		<div>
			<p style={{ paddingTop: '2rem' }}>Sign up:</p>
			<form onSubmit={handleSignup}>
				<label>Email:</label>
				<input type="email" id="getEmail1" />
				<label>Password:</label>
				<input type="text" id="getPassword1" />
				<button>Create</button>
			</form>
		</div>
	)
}
