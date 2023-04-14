import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/categoryAction';

const AllCategoryHook=()=>{
    const dispatch=useDispatch();
    const pageSize = 18;
    useEffect(() => {
      dispatch(getAllCategory(`?pageNumber=1&pageSize=${pageSize}&isParent=false`))
    },[])
    const response =useSelector(state =>state.allCategory.categorys)
    const loading =useSelector(state =>state.allCategory.loading)
    
    let categorys = response.categories ? response.categories : [];
    let pageCount = response.paginationResult ? response.paginationResult.numberOfPages : 0;
  
    const getPage = page => dispatch(getAllCategory(`?pageNumber=${page}&pageSize=${pageSize}`));
    return [categorys, pageCount, getPage, loading];


}

export default AllCategoryHook