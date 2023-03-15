import React,{useEffect} from 'react'
import { CategoryContainer } from '../../Components/Category/CategoryContainer'
import { Pagination } from '../../Components/Utility/Pagination'
import { useDispatch,useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/categoryAction';
export const AllCategoryPage = () => {
  const dispatch=useDispatch();
useEffect(() => {
  dispatch(getAllCategory())
},[])
const data =useSelector(state =>state.allCategory.category)
const loading =useSelector(state =>state.allCategory.loading)
console.log(data)
console.log(loading)
  return (
    <div>
        <CategoryContainer/>
        <Pagination/>
    </div>
  )
}
