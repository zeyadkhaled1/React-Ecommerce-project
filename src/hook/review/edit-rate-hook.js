import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import notify from './../useNotification';
import { editReview } from '../../Redux/Actions/reviewAction';

function EditRateHook(review) {
	const dispatch = useDispatch();

	const [newRateText, setNewRateText] = useState(review.review);
	const [newRateValue, setNewRateValue] = useState(review.rateValue);
	const [loading, setLoading] = useState(true);
	const [showEdit, setShowEdit] = useState(false);

	const handleCloseEdit = () => {
		setShowEdit(false);
		setNewRateText(review.review);
		setNewRateValue(review.rateValue);
	};
	const handleShowEdit = () => setShowEdit(true);

	const onChangeNewRateText = e => {
		setNewRateText(e.target.value);
	};
	const onChangeNewRateValue = val => {
		setNewRateValue(val);
	};

	const handleEdit = async () => {
		if (newRateText === review.review && newRateValue === review.rateValue)
			return setShowEdit(false);
		setLoading(true);
		await dispatch(editReview(review._id, { rateValue: newRateValue, review: newRateText }));
		setLoading(false);
		setShowEdit(false);
	};

	const res = useSelector(state => state.allReview.updatedReview);

	useEffect(() => {
		if (!loading) {
			if (res && res.status >= 400) notify(res && res.data && res.data.message, 'error');
			else if (res.status >= 200 && res.status < 300) {
				notify('تم تعديل التعليق بنجاح', 'success');
				setTimeout(() => window.location.reload(), 1500);
			}
		}
	}, [loading]);

	return [
		showEdit,
		newRateText,
		newRateValue,
		setShowEdit,
		handleCloseEdit,
		handleShowEdit,
		handleEdit,
		onChangeNewRateText,
		onChangeNewRateValue
	];
}

export default EditRateHook;
