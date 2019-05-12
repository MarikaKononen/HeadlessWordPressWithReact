import React from 'react'
import Home from './pages/home.js';
import Link from 'next/link'

class App extends React.Component {
	render() {
		
		
		return (
			<div>
				<Home />
				
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));