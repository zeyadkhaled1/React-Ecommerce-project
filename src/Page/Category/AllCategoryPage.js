import React from 'react'
import { CategoryContainer } from '../../Components/Category/CategoryContainer'
import { Pagination } from '../../Components/Utility/Pagination'
import AllCategoryHook from '../../hook/category/all-category-page-hook';
export const AllCategoryPage = () => {
  
  const [parentCategorys,loading]=AllCategoryHook()
  return (
    <div>
        <CategoryContainer parentCategorys={parentCategorys} loading={loading}/>
        <Pagination/>
    </div>
  )
}
