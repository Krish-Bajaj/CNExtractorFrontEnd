import { Link } from 'react-router-dom'

import { createUser, signinUser, getStatus, logoutUser } from '../services/firebaseFunctions'

import Template from '../components/Template'
import Modal from '../components/Modal/Modal'

const MLP = () => {

	const handleSignup = e => {
		e.preventDefault()
		createUser(
			document.getElementById('getEmail1').value,
			document.getElementById('getPassword1').value
		)
	}

	const handleSignin = e => {
		e.preventDefault()
		signinUser(
			document.getElementById('getEmail2').value,
			document.getElementById('getPassword2').value
		)
	}

	return (
		<Template>
			<Link to="/results">
				<p>Click to Link account!!</p>
			</Link>

			<p style={{ paddingTop: '2rem' }}>Sign up:</p>
			<form onSubmit={handleSignup}>
				<label>Email:</label>
				<input type="email" id="getEmail1" />
				<label>Password:</label>
				<input type="text" id="getPassword1" />
				<button>Create</button>
			</form>

			<p style={{ paddingTop: '2rem' }}>Sign in:</p>
			<form onSubmit={handleSignin}>
				<label>Email:</label>
				<input type="email" id="getEmail2" />
				<label>Password:</label>
				<input type="text" id="getPassword2" />
				<button>Sign in</button>
			</form>

			<button onClick={logoutUser}>Logout!</button>
			<button style={{ paddingTop: '2rem' }} onClick={getStatus}>
				Get status
			</button>
			<Modal />
		</Template>
	)
}

export default MLP
