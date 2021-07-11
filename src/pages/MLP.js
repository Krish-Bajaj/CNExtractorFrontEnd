import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MLP = () => {
	return (
		<Container>
			<Link to="/results">
				<p>Click to Link account!!</p>
			</Link>
		</Container>
	)
}

export default MLP

const Container = styled.div`
	
`