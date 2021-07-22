import { Link } from 'react-router-dom'

import { getStatus } from '../services/firebaseFunctions'

import Template from '../components/Template'
import Modal from '../components/Modal/Modal'

const MLP = () => {
	return (
		<Template>
			<Link to="/results">
				<p>Click to Link account!!</p>
			</Link>

			<button style={{ paddingTop: '2rem' }} onClick={getStatus}>
				Get status
			</button>
			<Modal />
		</Template>
	)
}

export default MLP
