import React,{useEffect} from 'react'
import { CategoryContainer } from '../../Components/Category/CategoryContainer'
import { Pagination } from '../../Components/Utility/Pagination'
import { useDispatch,useSelector } from 'react-redux';
import { getMainCategory } from '../../Redux/Actions/categoryAction';
export const AllCategoryPage = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getMainCategory())
  },[])
  const parentCategorys =useSelector(state =>state.allCategory.mainCategory)
  const loading =useSelector(state =>state.allCategory.loading)

  return (
    <div>
        <CategoryContainer parentCategorys={parentCategorys} loading={loading}/>
        <Pagination/>
    </div>
  )
}
