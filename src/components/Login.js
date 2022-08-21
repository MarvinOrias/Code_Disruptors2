import React, {useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';

export default function Login(props){
	const [showPass, setShowPass] = useState(false);

	const passwordShow = () => {
		setShowPass(!showPass);
	};

	return(
		<>
			<Form className="login" onSubmit={props.login} >
				<Row>
					<Col sm={12} md={6}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
						  <Form.Label>Email</Form.Label>
						  <Form.Control type='email' placeholder="Enter email" onChange={props.email} />
						</Form.Group>
					</Col>

					<Col sm={12} md={6}>
						<Form.Group className="mb-3" controlId="formBasicPassword">
						  <Form.Label>Password</Form.Label>
						  <Form.Control type={showPass ? 'text' : 'password'} placeholder="Password" onChange={props.password} />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicCheckbox">
						  <Form.Check type="checkbox" label="Show password" onClick={passwordShow} />
						</Form.Group>
					</Col>
				</Row>

			      <Button variant="success" type="submit" className="login-btn">
			        Log in
			      </Button>
			</Form>
		</>
	)
}