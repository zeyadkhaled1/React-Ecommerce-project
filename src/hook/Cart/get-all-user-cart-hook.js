import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrand } from '../../Redux/Actions/brandAction';
import notify from '../useNotification';
import avatar from './../../Images/avatar.png';
import { addToCart, getAllUserCartItems } from '../../Redux/Actions/cartAction';

const GetAllUserCartHook=()=>{
    const dispatch = useDispatch();
    const [itemsNum, setItemsNum] = useState(0);
	const [cartItems, setCartItems] = useState([]);
	const [totalCartPrice, setTotalCartPrice] = useState(0);
	const [loading, setLoading] = useState(true);
	const [isPress, setIsPress] = useState(false);

	const res = useSelector(state => state.cartReducer.getAllUserCart);

    useEffect(()=>{
        const get=async()=>{
        setLoading(true)
        await dispatch(getAllUserCartItems())
        setLoading(false)
    }
    get()
    },[])
    

    useEffect(()=>{
        if(loading===false){
            if(res&&res.status===200){
                setItemsNum(res.data.cart.items.length)
                setCartItems(res.data.cart.items)
                setTotalCartPrice(res.data.cart.bill)
            }
            else{
                setItemsNum(0)
                setCartItems([])
                setTotalCartPrice(0)
            }
        }
    },[loading])

    return [itemsNum,cartItems,totalCartPrice]

}
export default GetAllUserCartHook