import React, {useEffect, useState} from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

import Error404 from './Error404';

export default function Products(props){
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
						.then(res=>res.json())
						.then((json) => {
						setProducts(json);
			           })
	}, [localStorage.getItem('user token')]);

	const newItems = products.map((items) => {
		return(
			<Col sm={12} md={6} xl={4} key={items.id}>
				<Card id="Card">
					<img variant="top" src={items.image} className="image" alt={'1234'} style={{padding: '10px', borderRadius: '15%'}}/>
					<Card.Body>

					<Card.Text>Details:
						<div>
							Item No. {items.id}
						</div>

						<div>
							{items.category}
						</div>

						<div>
							Price: {items.price}
						</div>

						<div>
							Rating: {items.rating.rate}
						</div>

						<div>
							{items.title}
						</div>

					</Card.Text>

				    </Card.Body>
				</Card>
			</Col>
		)
	})

	return(
		<>
			{
				localStorage.getItem('user token') === null
				?
				<Error404 />
				:
				<div className="products">
					<Row>
						{newItems}
					</Row>
				</div>
			}
		</>
	)
}