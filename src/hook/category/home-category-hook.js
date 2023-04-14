import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/categoryAction';

const HomeCategoryHook=()=>{
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(getAllCategory(`?isParent=false`))
    },[])
    const response =useSelector(state =>state.allCategory.categorys)
    const loading =useSelector(state =>state.allCategory.loading)
    
    console.log(response)
    let categorys = response.categories ? response.categories : [];
    return [categorys,loading]
}
export default HomeCategoryHook