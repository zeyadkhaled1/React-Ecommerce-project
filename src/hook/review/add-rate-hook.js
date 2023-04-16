import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from './../useNotification';
import { createReview } from '../../Redux/Actions/reviewAction';

const AddRateHook = id => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [rateText, setRateText] = useState('');
	const [rateValue, setRateValue] = useState(0);
	const [loading, setLoading] = useState(true);

	const onChangeRateText = e => {
		setRateText(e.target.value);
	};
	const onChangeRateValue = val => {
		setRateValue(val);
	};

	const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;

	const onSubmit = async () => {
		if (rateText === '') return notify('من فضلك اكتب تعليق!', 'error');
		setLoading(true);
		await dispatch(
			createReview({
				itemId: id,
				rateValue: rateValue,
				review: rateText
			})
		);
		setLoading(false);
	};

	const res = useSelector(state => state.allReview.createdReview);

	useEffect(() => {
		if (!loading) {
			if (res) {
				console.log(res);
				if (res.status >= 400) {
					notify(res.data.message, 'error');
				} else if (res.state >= 200 && res.status < 300) {
					notify('تم التعليق بنجاح', 'success');
				}
			}
		}
	}, [loading]);

	return [user, rateText, rateValue, onChangeRateText, onChangeRateValue, onSubmit];
};

export default AddRateHook;
