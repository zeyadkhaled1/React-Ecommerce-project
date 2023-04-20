import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotification';
import avatar from './../../Images/avatar.png';
import { deleteItemFromCart } from '../../Redux/Actions/cartAction';

const DeleteItemFromCartHook=(id)=>{
    const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	const res = useSelector(state => state.cartReducer.deleteItemFromCart);

    const deleteItemFromCartHandel=async()=>{
        setLoading(true)
        await dispatch(deleteItemFromCart(id))
        setLoading(false)
    }

    useEffect(()=>{
        if(loading===false){
            if(res&&res.status===200){
                notify('تم حذف المنتج من العربة بنجاح','success')
                setTimeout(()=>{
                    window.location.reload(true)
                },500)
            }
            else{
                notify('هناك خطأ ما','warn')
            }
        }
    },[loading])

    return [deleteItemFromCartHandel]

}
export default DeleteItemFromCartHook