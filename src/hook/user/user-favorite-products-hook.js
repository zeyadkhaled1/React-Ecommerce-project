import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWishlistPopulate } from '../../Redux/Actions/wishlistAction';

function UserFavoriteProductsHook() {
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);
	const [items, setItems] = useState([]);
	const [paginationRes, setPaginationRes] = useState('');

	const res = useSelector(state => state.allWishlist.userWishlistPopulate);

	useEffect(() => {
		const get = async () => {
			setLoading(true);
			await dispatch(getUserWishlistPopulate('wishlist', 1, 12));
			setLoading(false);
		};
		get();
	}, []);

	useEffect(() => {
		if (loading === false) {
			if (res && res.status === 200) {
				res.data && res.data.items && setItems(res.data.items);
				res.data && res.data.paginationResult && setPaginationRes(res.data.paginationResult);
			}
		}
	}, [loading]);

	const onPress = async page => {
		setLoading(true);
		await dispatch(getUserWishlistPopulate('wishlist', page, 12));
		setLoading(false);
	};

	return [items, paginationRes, onPress];
}

export default UserFavoriteProductsHook;
