import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { getStatus } from '../services/firebaseFunctions'
import { auth } from '../services/firebaseConfiguration'
import { postReq } from '../services/api'

import Template from '../components/Template'
import Modal from '../components/Modal/Modal'

const MLP = () => {
	const [uid, setuid] = useState()
	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) {
				setuid(user.uid)
			}
		})
	}, [uid])
	const sendData = async () => {
		postReq('/user', { key: uid })
	}
	return (
		<Template>
			<Link to="/results">
				<p>Click to Link account!!</p>
			</Link>
			<button style={{ paddingTop: '2rem' }} onClick={sendData}>
				Send Data
			</button>
			<button style={{ paddingTop: '2rem' }} onClick={getStatus}>
				Get status
			</button>
			<Modal />
		</Template>
	)
}

export default MLP
