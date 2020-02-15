import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './utils/ProtectedRoute';
import FriendList from './components/FriendList';

function App() {
	return (
		<Router>
			<header>
				<h1>Auth-Friends</h1>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/friends'>Friends</Link>
						</li>
						<li>
							<Link to='/login'>Login</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className='App'>
				<Switch>
					<ProtectedRoute exact path='/friends' component={FriendList} />
					<Route path='/login' component={Login} />
					<Route path='/' component={Home} />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
