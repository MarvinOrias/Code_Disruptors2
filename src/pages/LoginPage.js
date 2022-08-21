import React, {useState} from 'react';
import Swal from 'sweetalert2';
import {useNavigate, Navigate} from 'react-router-dom';

import Login from '../components/Login';

export default function LoginPage(){
	const [users, setUsers] = useState([]);
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const navigate = useNavigate();

	function emailShow(e){
		setEmail(e.target.value);
	}

	function passwordShow(e){
		setPass(e.target.value);
	}

	const login = (e) => {
		e.preventDefault();
		
		if(email === '' || pass === ''){
			Swal.fire({
				title: 'Missing field(s)',
				icon: 'error',
				text: 'All fields required'
			})
		}
		else{
			/*fetch('https://code-eater-e-commerce.herokuapp.com/users/login', {
				method: "POST",
				headers: {
					"Content-Type":"application/json"
				},
				body: JSON.stringify({
					email: email,
					password: pass
				})
			}).then((response) => {
				return response.json();
			}).then((login) => {
				if(login.message === 'Email or password incorrect'){
					Swal.fire({
						title: 'Incorrect',
						icon: 'warning',
						text: `${login.message}`
					})
				}
				else{
					localStorage.setItem('user token', login.Token_Created);
					fetch('https://code-eater-e-commerce.herokuapp.com/users/details', {
						method: "GET",
						headers: {
							Authorization: `Bearer ${login.Token_Created}`
						}
					}).then((response) => {
						return response.json();
					}).then((userDetails) => {
						localStorage.setItem('user lvl', userDetails.details.isAdmin);
						Swal.fire({
							title: 'Successful',
							icon: 'success',
							text: 'Logged in'
						});
						setTimeout(() => {
							navigate('/');
						}, 1500)
					})
				}
			})*/
			fetch(`https://fakestoreapi.com/users/1`)
			.then(res=>res.json())
			.then((allUsers) => {
				console.log(allUsers)
				setUsers(allUsers);
				if(email !== allUsers.username || pass !== allUsers.password){
					Swal.fire({
						text: 'Email or password incorrect'
					})
				}
				else{
					localStorage.setItem('user token', allUsers.username);
					Swal.fire({
							title: 'Successful',
							icon: 'success',
							text: 'Logged in'
						});
						setTimeout(() => {
							navigate('/');
						}, 1500)
				}
			})
		}
	};

	return(
		<>
			{
				localStorage.getItem('user token') === null
				?
				<Login login={login} email={emailShow} password={passwordShow} />
				:
				<Navigate to="/" />
			}
		</>
	)
}