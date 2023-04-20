import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import notify from '../useNotification';
import avatar from './../../Images/avatar.png';
import {  updateItemInCart } from '../../Redux/Actions/cartAction';

const UpdateItemInCartHook=(item)=>{
    const dispatch = useDispatch();
	const [itemQuantity, setItemQuantity] = useState(0);
	const [loading, setLoading] = useState(true);

	const res = useSelector(state => state.cartReducer.updateItemInCart);

    const onChangeQuantity=(e)=>{
        setItemQuantity(e.target.value)
    }

    useEffect(()=>{
        if(item) setItemQuantity(item.quantity)
    },[])

    const updateItemInCartHandel=async()=>{
        setLoading(true)
        await dispatch(updateItemInCart(item.item,{
            quantity: itemQuantity
        }))
        setLoading(false)
    }

    useEffect(()=>{
        if(loading===false){
            if(res&&res.status===200){
                notify('تم تحديث المنتج في العربة بنجاح','success')
                setTimeout(()=>{
                    window.location.reload(true)
                },500)
            }
            else{
                notify('هناك خطأ ما','warn')
            }
        }
    },[loading])

    return [itemQuantity,onChangeQuantity,updateItemInCartHandel]

}
export default UpdateItemInCartHook