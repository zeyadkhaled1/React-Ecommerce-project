import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoupons } from '../../Redux/Actions/couponAction';

function AllCouponPageHook() {
	const dispatch = useDispatch();

	const res = useSelector(state => state.couponReducer.coupons);

	const [coupons, setCoupons] = useState([]);
	const [numberOfPages, setNumberOfPages] = useState(0);

	useEffect(() => {
		dispatch(getCoupons());
	}, []);

	useEffect(() => {
		if (res.data) {
			setCoupons(res.data.coupons);
			setNumberOfPages(res.data.paginationResult.numberOfPages);
		}
	}, [res]);

	const onPress = async page => {
		await dispatch(getCoupons(page));
	};

	return [coupons, numberOfPages, onPress];
}

export default AllCouponPageHook;
