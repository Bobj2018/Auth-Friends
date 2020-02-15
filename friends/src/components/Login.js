import React, { useState } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';

function Login(props) {
	const [ credentials, setCredentials ] = useState({ username: '', password: '' });

	function handleChange(e) {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	}

	function login(e) {
		e.preventDefault();
		axiosWithAuth()
			.post('/login', credentials)
			.then(res => {
				localStorage.setItem('token', res.data.payload);
				props.history.push('/friends');
			})
			.catch(err => {
				localStorage.removeItem('token');
				setCredentials({
					username : '',
					password : ''
				});
			});
	}

	return (
		<div>
			<h2>LOGIN</h2>
			<form onSubmit={login}>
				<input type='text' name='username' value={credentials.username} onChange={handleChange} />
				<input type='password' name='password' value={credentials.password} onChange={handleChange} />
				<button type='submit'>Login</button>
			</form>
		</div>
	);
}

export default Login;
