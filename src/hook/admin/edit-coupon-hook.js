import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCoupon, updateCoupon } from '../../Redux/Actions/couponAction';
import notify from '../useNotification';

function EditCouponHook(coupon) {
	const dispatch = useDispatch();

	const resDelete = useSelector(state => state.couponReducer.couponDeleted);
	const resEdit = useSelector(state => state.couponReducer.couponUpdated);

	const [code, setCode] = useState('');
	const [discount, setDiscount] = useState('');
	const [expireAt, setExpireAt] = useState('');
	const [validFrom, setValidFrom] = useState('');
	const [showEdit, setShowEdit] = useState(false);
	const [showDelete, setShowDelete] = useState('');

	const [editLoading, setEditLoading] = useState(false);
	const [deleteLoading, setDeleteLoading] = useState(false);

	useEffect(() => {
		setCode(coupon.code);
		setDiscount(coupon.discount);
		setExpireAt(moment(coupon.expireAt).format('YYYY-MM-DD'));
		setValidFrom(moment(coupon.validFrom).format('YYYY-MM-DD'));
	}, [coupon]);

	const onChangeCode = e => setCode(e.target.value);
	const onChangeDiscount = e => setDiscount(parseFloat(e.target.value));
	const onChangeValidFrom = e => setValidFrom(e.target.value);
	const onChangeExpireAt = e => setExpireAt(e.target.value);

	const handleCloseDelete = () => setShowDelete(false);
	const handleShowDelete = () => setShowDelete(true);
	const handleShowEdit = () => setShowEdit(true);
	const handleCloseEdit = () => {
		setCode(coupon.code);
		setDiscount(coupon.discount);
		setExpireAt(moment(coupon.expireAt).format('YYYY-MM-DD'));
		setValidFrom(moment(coupon.validFrom).format('YYYY-MM-DD'));
		setShowEdit(false);
	};

	const handleEdit = async () => {
		let data = {};
		code !== coupon.code && (data.code = code);
		discount !== coupon.discount && (data.discount = discount);
		expireAt !== moment(coupon.expireAt).format('YYYY-MM-DD') && (data.expireAt = expireAt);
		validFrom !== moment(coupon.validFrom).format('YYYY-MM-DD') && (data.validFrom = validFrom);

		// no changes have been made
		if (Object.keys(data).length === 0) return setShowEdit(false);

		setEditLoading(true);
		await dispatch(updateCoupon(coupon._id, data));
		setEditLoading(false);
	};

	const handleDelete = async () => {
		setDeleteLoading(true);
		await dispatch(deleteCoupon(coupon._id));
		setDeleteLoading(false);
	};

	useEffect(() => {
		if (editLoading === false) {
			if (resEdit && resEdit.status === 200) {
				notify('تم التعديل بنجاح', 'success');
				setShowEdit(false);
				setTimeout(() => window.location.reload(), 1000);
			} else if (resEdit && resEdit.status >= 400) {
				notify(
					resEdit.data && resEdit.data.message ? resEdit.data.message : 'حدثت مشكلة ما',
					'error'
				);
			}
		}
	}, [editLoading]);

	useEffect(() => {
		if (deleteLoading === false) {
			if (resDelete && resDelete.status === 200) {
				notify('تم الحذف', 'success');
				setShowDelete(false);
				setTimeout(() => window.location.reload(), 1000);
			} else if (resDelete && resDelete.status >= 400) {
				notify(
					resDelete.data && resDelete.data.message ? resDelete.data.message : 'حدثت مشكلة ما',
					'error'
				);
			}
		}
	}, [deleteLoading]);

	return [
		code,
		discount,
		validFrom,
		expireAt,
		showEdit,
		showDelete,
		onChangeCode,
		onChangeDiscount,
		onChangeValidFrom,
		onChangeExpireAt,
		handleCloseEdit,
		handleCloseDelete,
		handleShowEdit,
		handleShowDelete,
		handleEdit,
		handleDelete
	];
}

export default EditCouponHook;
