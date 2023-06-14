import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptVendorReq } from '../../Redux/Actions/authAction';
import notify from '../useNotification';
import { ACCEPT_VENDOR_REQUEST, CANCEL_VENDOR_REQUEST } from '../../Redux/Type';
import { cancelVendorReq } from '../../Redux/Actions/authAction';

function VendorRequestHook(id, userId) {
	const dispatch = useDispatch();

	const [loadingAccept, setLoadingAccept] = useState(false);
	const [loadingCancel, setLoadingCancel] = useState(false);

	const cancelRes = useSelector(state => state.auth.cancelVendorRequest);
	const acceptRes = useSelector(state => state.auth.acceptVendorRequest);

	const handleAcceptRequest = async () => {
		setLoadingAccept(true);
		await dispatch(acceptVendorReq(userId));
		setLoadingAccept(false);
	};

	const handleCancelRequest = async () => {
		setLoadingCancel(true);
		await dispatch(cancelVendorReq(id));
		setLoadingCancel(false);
	};

	useEffect(() => {
		if (loadingAccept === false) {
			if (acceptRes && acceptRes.status === 200) {
				notify('تم قبول الطلب', 'success');
				dispatch({ type: ACCEPT_VENDOR_REQUEST, payload: {}, loading: true });
				setTimeout(() => window.location.reload(), 1500);
			} else if (acceptRes && acceptRes.status >= 400) {
				notify(
					acceptRes.data && acceptRes.data.message ? acceptRes.data.message : 'حدثت مشكلة ما',
					'error'
				);
				dispatch({ type: ACCEPT_VENDOR_REQUEST, payload: {}, loading: true });
				setTimeout(() => window.location.reload(), 1500);
			}
		}
	}, [loadingAccept]);

	useEffect(() => {
		if (loadingCancel === false) {
			if (cancelRes && cancelRes.status === 200) {
				notify('تم الحذف', 'success');
				dispatch({ type: CANCEL_VENDOR_REQUEST, payload: {}, loading: true });
				setTimeout(() => window.location.reload(), 1500);
			} else if (cancelRes && cancelRes.status >= 400) {
				notify(
					cancelRes.data && cancelRes.data.message ? cancelRes.data.message : 'حدثت مشكلة ما',
					'error'
				);
				dispatch({ type: CANCEL_VENDOR_REQUEST, payload: {}, loading: true });
				setTimeout(() => window.location.reload(), 1500);
			}
		}
	}, [loadingCancel]);

	return [handleAcceptRequest, handleCancelRequest];
}

export default VendorRequestHook;
