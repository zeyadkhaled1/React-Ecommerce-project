import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getMainCategory } from '../../Redux/Actions/categoryAction';

const AllCategoryHook=()=>{
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(getMainCategory())
    },[])
    const parentCategorys =useSelector(state =>state.allCategory.mainCategory)
    const loading =useSelector(state =>state.allCategory.loading)

    return [parentCategorys,loading]

}

export default AllCategoryHook