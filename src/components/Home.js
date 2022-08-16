import React, {useEffect} from 'react';
import Swal from 'sweetalert2';

export default function Home(){
	useEffect(() => {
		Swal.fire({
			text: `The api that I used for the users was mine. I've created an account for codedisruptors.
			Email: codedisruptors@email.com
			pw: codedisruptors
			Thank you and have a nice day!`
		})
	}, []);

	return(
		<>
			<div className="home">
				<h3>Welcome</h3>
				<h3>to</h3>
				<h3>Landing page</h3>
			</div>
		</>
	)
}