import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { SidebarSearchHook } from '../../hook/search/sidebar-search-hook';
import { motion, AnimatePresence } from 'framer-motion';

export const SideFilter = () => {
	const [category, brand, SubCat, searchCat, ClickBrand, priceFrom, priceTo] = SidebarSearchHook();
	const [activeCategory, setActiveCategory] = useState(null);
	const [showAllCategories, setShowAllCategories] = useState(false);
	const [showAllBrands, setShowAllBrands] = useState(false);
	const BrandToShow = showAllBrands ? brand : brand.slice(0, 5);
	const categoryToShow = showAllCategories ? category : category.slice(0, 5);
	let localFrom = localStorage.getItem('priceFrom') || '';
	let localTo = localStorage.getItem('priceTo') || '';
	let localBrandArr = localStorage.getItem('brandChecked') || '';
	const handleCategoryClick = (category, SubCatArr) => {
		setActiveCategory(activeCategory === category.title ? null : category.title);
		if (activeCategory !== category.title) {
			if (SubCatArr != 0) {
				const idArray = [category._id, ...SubCatArr.map(item => item._id)];
				searchCat(idArray);
			} else {
				searchCat(SubCatArr);
			}
		}
	};
	const handleSubCategoryClick = id => {
		searchCat(id);
	};
	return (
		<div className='mt-3'>
			<Row>
				<div className='d-flex flex-column mt-2'>
					<div className='filter-title'>الفئة</div>
					<div className='list-basic mt-3' onClick={() => handleCategoryClick('0', '0')}>
						الكل&gt;&gt;
					</div>
					{categoryToShow ? (
						<AnimatePresence>
							{categoryToShow.map((item, index) => {
								return (
									<motion.div
										key={index}
										className='d-flex mt-3'
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}>
										<ul className='mx-0 my-0 px-0'>
											<li
												className='m-0 p-0 list-basic'
												onClick={() => handleCategoryClick(item, SubCat[item.title])}>
												{item.title} &gt;
											</li>
											{SubCat[item.title] &&
											SubCat[item.title].length > 0 &&
											activeCategory === item.title ? (
												<ul>
													<AnimatePresence>
														{SubCat[item.title].map((item2, index2) => (
															<motion.li
																key={index2}
																onClick={() => {
																	handleSubCategoryClick(item2._id);
																}}
																className='list-basic-nested my-1'
																initial={{ opacity: 0, y: -10 }}
																animate={{ opacity: 1, y: 0 }}
																exit={{ opacity: 0, y: -10 }}>
																<span>{item2.title}</span>
															</motion.li>
														))}
													</AnimatePresence>
												</ul>
											) : null}
										</ul>
									</motion.div>
								);
							})}
						</AnimatePresence>
					) : (
						<h6>لا يوجد تصنيفات</h6>
					)}
					<div className='mt-3'>
						{category.length > 5 && (
							<motion.div
								className='list-basic'
								style={{ color: '#2954cc' }}
								onClick={() => setShowAllCategories(!showAllCategories)}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}>
								{showAllCategories ? 'اظهر أقل <<' : 'اظهر المزيد >>'}
							</motion.div>
						)}
					</div>
				</div>

				<div className='d-flex flex-column mt-2'>
					<div className='filter-title mt-3'>الماركة</div>
					<div className='d-flex mt-3'>
						<input type='checkbox' value='0' onChange={ClickBrand} />
						<div className='filter-sub me-2 '>الكل</div>
					</div>
					{BrandToShow ? (
						<AnimatePresence>
							{BrandToShow.map((item, index) => {
								return (
									<motion.div
										value={item._id}
										key={index}
										className='d-flex mt-2'
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}>
										<motion.input
											type='checkbox'
											value={item._id}
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											onChange={ClickBrand}
											// checked={localBrandArr!==""?localBrandArr.includes(item._id):false}
										/>
										<div className='filter-sub me-2 '>{item.name}</div>
									</motion.div>
								);
							})}
						</AnimatePresence>
					) : (
						<h6>لا يوجد ماركات</h6>
					)}
					<div className='mt-3'>
						{brand.length > 5 && (
							<motion.div
								className='list-basic'
								style={{ color: '#2954cc' }}
								onClick={() => setShowAllBrands(!showAllBrands)}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}>
								{showAllBrands ? 'اظهر أقل >>' : 'اظهر المزيد >>'}
							</motion.div>
						)}
					</div>
				</div>

				<div className='filter-title my-3'>السعر</div>
				<div className='d-flex'>
					<p className='filter-sub my-2'>من:</p>
					<input
						onChange={priceFrom}
						className='m-2 text-center'
						type='number'
						min='0'
						style={{ width: '50px', height: '25px' }}
						value={localFrom}
					/>
				</div>
				<div className='d-flex'>
					<p className='filter-sub my-2'>الي:</p>
					<input
						onChange={priceTo}
						className='m-2 text-center'
						min='0'
						type='number'
						style={{ width: '50px', height: '25px' }}
						value={localTo}
					/>
				</div>
			</Row>
		</div>
	);
};
