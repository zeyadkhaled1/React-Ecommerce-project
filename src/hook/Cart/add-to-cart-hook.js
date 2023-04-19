import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrand } from '../../Redux/Actions/brandAction';
import notify from '../useNotification';
import avatar from './../../Images/avatar.png';
import { addToCart } from '../../Redux/Actions/cartAction';

const AddToCartHook=(id)=>{
    const dispatch = useDispatch();
    const [image, setImage] = useState(avatar);
	const [name, setName] = useState('');
	const [selectedFile, setSelectedFile] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isPress, setIsPress] = useState(false);

	const res = useSelector(state => state.allBrand.createdBrand);

    const addToCartHandel=async()=>{

        await dispatch(addToCart({
            quantity: 1,
        },id))
    }

    return [addToCartHandel]

}
export default AddToCartHook