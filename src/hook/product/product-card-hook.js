import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import favoff from '../../Images/fav-off.png';
import favon from '../../Images/fav-on.png';
import notify from '../useNotification';
import {
	addProductToWishlist,
	removeProductFromWishlist
} from '../../Redux/Actions/wishlistAction';

function ProductCardHook(item, favProd) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;

	const [favImg, setFavImg] = useState(favoff);
	const [isFav, setIsFav] = useState(favProd.includes(item._id));
	const [loadingAdd, setLoadingAdd] = useState(false);
	const [press, setPress] = useState(false);
	const [loadingRemove, setLoadingRemove] = useState(false);

	const resAdd = useSelector(state => state.allWishlist.addToWishlist);
	const resDel = useSelector(state => state.allWishlist.removeFromWishlist);

	const handleFav = () => {
		if (user) {
			setPress(true);
			if (isFav) removeFromWishlist();
			else addToWishlist();
		} else {
			notify('برجاء تسجيل الدخول', 'warn');
			setTimeout(() => navigate('/login'), 2000);
		}
	};

	useEffect(() => {
		setIsFav(favProd.includes(item._id));
	}, [favProd]);

	useEffect(() => {
		if (isFav === true) setFavImg(favon);
		else if (isFav === false) setFavImg(favoff);
	}, [isFav]);

	useEffect(() => {
		if (loadingAdd === false && press === true) {
			if (resAdd && resAdd.status === 200) {
				notify('تم اضافة المنتج للمفضلة بنجاح', 'success');
			} else if (resAdd && resAdd.status >= 400) {
				notify(resAdd.data.message || 'حدثت مشكلة ما', 'error');
			}
			setPress(false);
		}
	}, [loadingAdd]);

	useEffect(() => {
		if (loadingRemove === false && press === true) {
			if (resDel && resDel.status === 200) {
				notify('تم ازالة المنتج من المفضلة', 'warn');
			} else if (resDel && resDel.status >= 400) {
				notify(resDel.data.message || 'حدثت مشكلة ما', 'error');
			}
			setPress(false);
		}
	}, [loadingRemove]);

	const addToWishlist = async () => {
		setIsFav(true);
		setFavImg(favon);
		setLoadingAdd(true);
		await dispatch(addProductToWishlist({ id: item._id }));
		setLoadingAdd(false);
	};

	const removeFromWishlist = async () => {
		setIsFav(false);
		setFavImg(favoff);
		setLoadingRemove(true);
		await dispatch(removeProductFromWishlist({ id: item._id }));
		setLoadingRemove(false);
	};

	return [favImg, handleFav];
}

export default ProductCardHook;
