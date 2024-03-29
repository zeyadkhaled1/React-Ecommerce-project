import { transform } from 'framer-motion';
import React from 'react'
import { Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const BrandCard = ({ img,id }) => {
	return (
		<Col xs='6' sm='6' md='4' lg='2' className='my-2 d-flex justify-content-center'>
			<Card
				className='my-1'
				style={{
					width: '151px',
					height: '151px',
					borderRadius: '8px',
					border: 'none',
					backgroundColor: '#FFFFFF'
				}}>
					<Link to={`/products/brand/${id}`}>
				<Card.Img style={{ width: '151px', height: '151px',transform: 'translateX(63px)'}} src={img} />
				</Link>
			</Card>
		</Col>
	);
};
    
    export default BrandCard