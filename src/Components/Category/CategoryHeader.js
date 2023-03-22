import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const CategoryHeader = ({ categories }) => {
	return (
		<div className='cat-header'>
			<Container>
				<Row>
					<Col className='d-flex justify-content-start py-2 flex-wrap'>
						<div className='cat-text-header '>الكل</div>
						{categories
							? categories.map((item, index) => (
									<div key={index} className='cat-text-header '>
										{item.title}
									</div>
							  ))
							: null}
						<div className='cat-text-header'>تخفيضات</div>
						<div className='cat-text-header'>المزيد</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
