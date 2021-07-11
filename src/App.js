import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MLP from './pages/MLP'
import Results from './pages/Results'

import './App.css'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/results" component={Results} />
				<Route path="/" component={MLP} />
			</Switch>
		</Router>
	)
}

export default App
