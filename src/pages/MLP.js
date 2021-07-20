import { Link } from 'react-router-dom'
import { useState } from 'react'

import { createUser, getStatus } from '../services/firebaseFunctions'

import Template from '../components/Template'

const MLP = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		setEmail(document.getElementById("getEmail").value)
		setPassword(document.getElementById("getPassword").value)

		const user = createUser(email, password)
		console.log(user)
	}

	const handleClick = () => {
		getStatus()
	}

	return (
		<Template>
			<Link to="/results">
				<p>Click to Link account!!</p>
			</Link>
			<form style={{ paddingTop: '1rem' }} onSubmit={handleSubmit}>
				<label>Email:</label>
				<input type="text" id="getEmail" />
				<label>Password:</label>
				<input type="text" id="getPassword" />
				<button>Create</button>
			</form>
			<button style={{ paddingTop: '2rem' }} onClick={handleClick}>Get status</button>
		</Template>
	)
}

export default MLP
