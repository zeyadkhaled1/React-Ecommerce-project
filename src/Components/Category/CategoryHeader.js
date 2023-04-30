import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const CategoryHeader = ({ categories }) => {
	return (
		<div className='cat-header'>
			<Container>
				<Row>
					<Col className='d-flex justify-content-start py-2 flex-wrap'>
						{categories.length > 0
							? categories.slice(0, 6).map((item, index) => (
								<Link to={`/products/category/${item._id}`} style={{textDecoration:'none'}}>

									<div key={index} className='cat-text-header '>
										{item.title}
									</div>
									</Link>
							  ))
							: null	}
						<Link to="/allcategory" style={{textDecoration:'none'}}>
						<div className='cat-text-header'>المزيد</div>
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
