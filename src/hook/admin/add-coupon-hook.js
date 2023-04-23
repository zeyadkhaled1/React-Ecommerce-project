import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotification';
import { createCoupon } from '../../Redux/Actions/couponAction';
import { CREATE_COUPON } from '../../Redux/Type';

function AddCouponHook() {
	const dispatch = useDispatch();

	const res = useSelector(state => state.couponReducer.couponCreated);

	const [code, setCode] = useState('');
	const [discount, setDiscount] = useState('');
	const [expireAt, setExpireAt] = useState(moment().add(10, 'days').format('YYYY-MM-DD'));
	const [validFrom, setValidFrom] = useState(moment().format('YYYY-MM-DD'));
	const [loading, setLoading] = useState(false);

	const onChangeCode = event => {
		setCode(event.target.value);
	};

	const onChangeDiscount = event => {
		setDiscount(parseFloat(event.target.value));
	};

	const onChangeExpireAt = event => {
		setExpireAt(event.target.value);
	};

	const onChangeValidFrom = event => {
		setValidFrom(event.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (code === '' || discount === '') return notify('من فضلك ادخل البيانات المطلوبة', 'error');

		const data = { code, discount, expireAt, validFrom };

		setLoading(true);
		await dispatch(createCoupon(data));
		setLoading(false);
	};

	useEffect(() => {
		if (loading === false) {
			if (res && res.status === 201) {
				notify('تم الاضافة بنجاح', 'success');
				setCode('');
				setDiscount('');
				setExpireAt(moment().add(10, 'days').format('YYYY-MM-DD'));
				setValidFrom(moment().format('YYYY-MM-DD'));
				dispatch({ type: CREATE_COUPON, payload: {}, loading: true });
			} else if (res && res.status >= 400) {
				notify(res.data.message || 'هناك مشكلة', 'error');
				dispatch({ type: CREATE_COUPON, payload: {}, loading: true });
			}
		}
	}, [loading]);

	return [
		code,
		discount,
		expireAt,
		validFrom,
		onChangeCode,
		onChangeDiscount,
		onChangeExpireAt,
		onChangeValidFrom,
		handleSubmit
	];
}

export default AddCouponHook;
