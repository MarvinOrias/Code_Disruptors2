import React, {useState, useEffect} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

export default function WebNav(){
	const navigate = useNavigate();
	const [email, setEmail] = useState('');


	const clearToken = () => {
		localStorage.clear();
		Swal.fire({
			title: 'Successful',
			icon: 'success',
			text: 'Logged out. Come back again.'
		})
		navigate('/');
	};

	function userDetails(){
		fetch('https://code-eater-e-commerce.herokuapp.com/users/details', {
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem('user token')}`
			}
		}).then((response) => {
			return response.json();
		}).then((userDetails) => {
			setEmail(userDetails.details.email);
		})
	}

	useEffect(() => {
		if(localStorage.getItem('user token') !== null){
			userDetails();
		}
	}, [localStorage.getItem('user token')])

	return(
		<>
			<Navbar bg="light" expand="lg" sticky="top" bg="dark" variant="dark" className="Nav">
			        <Navbar.Brand as={Link} to="/" className="ms-2">Webstore Front</Navbar.Brand>
			        <Navbar.Toggle aria-controls="basic-navbar-nav" />
			        <Navbar.Collapse id="basic-navbar-nav">
			          <Nav className="ms-auto">
			            {
			            	localStorage.getItem('user token') === null
			            	?
			            	<>
			            		<Nav.Link as={Link} to="/">Home</Nav.Link>
			            		<Nav.Link as={Link} to="/products">Products</Nav.Link>
			            		<Nav.Link>User: guest</Nav.Link>
			            		<Nav.Link as={Link} to="/login">Log in</Nav.Link>
			            	</>
			            	:
			            	<>
			            		<Nav.Link as={Link} to="/">Home</Nav.Link>
			            		<Nav.Link as={Link} to="/products">Products</Nav.Link>
			            		<Nav.Link>User: {email}</Nav.Link>
			            		<Nav.Link onClick={clearToken} >Log out</Nav.Link>
			            	</>

			            }
			          </Nav>
			        </Navbar.Collapse>
			    </Navbar>
		</>
	)
}