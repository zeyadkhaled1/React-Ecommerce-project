import React from 'react';
import { CategoryContainer } from '../../Components/Category/CategoryContainer';
import { Pagination } from '../../Components/Utility/Pagination';
import AllCategoryHook from '../../hook/category/all-category-page-hook';

export const AllCategoryPage = () => {
	const [Categorys, pageCount, getPage, loading] = AllCategoryHook();

	return (
		<div >
			<CategoryContainer data={Categorys} loading={loading} />
			{pageCount > 1 && <Pagination onPress={getPage} pageCount={pageCount} />}
		</div>
	);
};
