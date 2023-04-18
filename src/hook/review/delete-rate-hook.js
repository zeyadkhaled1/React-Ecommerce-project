import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from './../useNotification';
import { createReview } from '../../Redux/Actions/reviewAction';
import { deleteReview } from '../../Redux/Actions/reviewAction';

function DeleteRateHook(review) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);

	const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;

	const [showDelete, setShowDelete] = useState(false);
	const handleCloseDelete = () => setShowDelete(false);
	const handleShowDelete = () => setShowDelete(true);

	const handleDelete = async () => {
		setLoading(true);
		await dispatch(deleteReview(review._id));
		setLoading(false);
		setShowDelete(false);
	};

	const res = useSelector(state => state.allReview.deletedReview);

	useEffect(() => {
		if (!loading) {
			if (res.status >= 400) notify(res.data.message, 'error');
			else if (res.status >= 200 && res.status < 300) {
				notify('تم حذف التعليق بنجاح', 'success');
				setTimeout(() => window.location.reload(), 1500);
			}
		}
	}, [loading]);

	return [user, showDelete, setShowDelete, handleCloseDelete, handleShowDelete, handleDelete];
}

export default DeleteRateHook;
