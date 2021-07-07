import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MLP from './pages/MLP'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={MLP} />
			</Switch>
		</Router>
	)
}

export default App
