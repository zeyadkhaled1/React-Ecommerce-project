import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotification';
import { editOrderStatus } from '../../Redux/Actions/orderAction';
import { UPDATE_ORDER } from '../../Redux/Type';

function OrderDetailsHook(order) {
	const dispatch = useDispatch();

	const [orderStatus, setOrderStatus] = useState('');
	const [loading, setLoading] = useState(false);

	const onChangeOrderStatus = e => {
		setOrderStatus(e.target.value);
	};

	useEffect(() => {
		setOrderStatus(order && order.status);
	}, [order]);

	const handleChangeOrderStatus = async () => {
		if (orderStatus === '' || orderStatus === order.status)
			return notify('من فضلك اختر حالة الطلب', 'warn');
		setLoading(true);
		await dispatch(editOrderStatus(order._id, { status: orderStatus }));
		setLoading(false);
	};

	const res = useSelector(state => state.orderReducer.orderUpdated);

	useEffect(() => {
		if (loading === false) {
			if (res) {
				if (res.status >= 200 && res.status < 300) {
					notify('تم التعديل بنجاح', 'success');
					dispatch({ type: UPDATE_ORDER, payload: {}, loading: true });
					setTimeout(() => window.location.reload(), 1500);
				} else if (res.status >= 400) {
					notify((res.data && res.data.message) || 'هناك مشكلة', 'error');
					dispatch({ type: UPDATE_ORDER, payload: {}, loading: true });
				}
			}
		}
	}, [loading]);

	return [orderStatus, onChangeOrderStatus, handleChangeOrderStatus];
}

export default OrderDetailsHook;
