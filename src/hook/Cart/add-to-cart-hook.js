import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotification';
import avatar from './../../Images/avatar.png';
import { addToCart } from '../../Redux/Actions/cartAction';

const AddToCartHook=(id)=>{
    const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	const res = useSelector(state => state.cartReducer.addToCart);

    const addToCartHandel=async()=>{
        setLoading(true)
        await dispatch(addToCart({
            quantity: "1"
        },id))
        setLoading(false)
    }

    useEffect(()=>{
        if(loading===false){
            if(res&&res.status===200){
                notify('تم اضافة المنتج للعربة بنجاح','success')
                setTimeout(()=>{
                    window.location.reload(true)
                },1000)
            }
            else{
                notify('هناك خطأ ما','warn')
            }
        }
    },[loading])

    return [addToCartHandel]

}
export default AddToCartHook