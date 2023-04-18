import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWishlist } from '../../Redux/Actions/wishlistAction';

function CardContainerHook(products) {
	const dispatch = useDispatch();

	const res = useSelector(state => state.allWishlist.userWishlist);
	const [loading, setLoading] = useState(false);
	const [favProd, setFavProd] = useState([]);

	useEffect(() => {
		const get = async () => {
			setLoading(true);
			await dispatch(getUserWishlist('wishlist'));
			setLoading(false);
		};
		get();
	}, [products]);

	useEffect(() => {
		if (loading === false) {
			if (res && res.data && res.data.items) {
				setFavProd(res.data.items);
			}
		}
	}, [loading]);

	return [favProd];
}

export default CardContainerHook;
