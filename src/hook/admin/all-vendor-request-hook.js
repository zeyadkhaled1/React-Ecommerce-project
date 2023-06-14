import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVendorReq } from '../../Redux/Actions/authAction';

function AllVendorRequestHook(id) {
	const dispatch = useDispatch();

	const res = useSelector(state => state.auth.vendorRequests);

	const [requests, setRequests] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const run = async () => {
			setLoading(true);
			await dispatch(getVendorReq());
			setLoading(false);
		};
		run();
	}, []);

	useEffect(() => {
		if (loading === false) {
			if (res && res.data) {
				setRequests(res.data.requests);
			}
		}
	}, [loading]);

	return [requests];
}

export default AllVendorRequestHook;
