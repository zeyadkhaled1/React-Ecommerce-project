import React from 'react';
import { Pagination } from '../../Components/Utility/Pagination';
import { BrandContainer } from '../../Components/Brand/BrandContainer';
import AllBrandHook from './../../hook/brand/all-brand-page-hook';

export const AllBrandPage = () => {
	const [brands, pageCount, getPage, loading] = AllBrandHook();

	return (
		<div>
			<BrandContainer data={brands} loading={loading} />
			{pageCount > 1 && <Pagination onPress={getPage} pageCount={pageCount} />}
		</div>
	);
};
