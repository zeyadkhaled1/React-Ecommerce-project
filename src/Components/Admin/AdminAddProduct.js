import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MultiImageInput from 'react-multiple-image-input';
import { ToastContainer } from 'react-toastify';
import AdminAddProductHook from '../../hook/product/add-product-hook';

export const AdminAddProduct = () => {
	const [
		mainCategories,
		brands,
		subCategories,
		prodPrice,
		qty,
		images,
		prodName,
		prodDescription,
		catID,
		brandID,
		subCatID,
		setImages,
		onSelectBrand,
		onSelectMainCategory,
		onSelectSubCategory,
		handleSubmit,
		onChangeProdName,
		onChangeDescription,
		onChangePrice,
		onChangeQty
	] = AdminAddProductHook();

	return (
		<div>
			<Row className='justify-content-start '>
				<div className='admin-content-text pb-4'> اضافه منتج جديد</div>
				<Col sm='8'>
					<div className='text-form pb-2'> صور للمنتج</div>

					<MultiImageInput
						images={images}
						setImages={setImages}
						theme={'light'}
						allowCrop={false}
						max={5}
					/>

					<div className='form-floating'>
						<input
							type='text'
							className='form-control'
							id='productName'
							placeholder='اسم المنتج'
							value={prodName}
							onChange={onChangeProdName}
							required
						/>
						<div class='valid-feedback'>Looks good!</div>
						<label for='productName'>اسم المنتج</label>
					</div>

					<div className='form-floating mt-3'>
						<textarea
							className='form-control'
							style={{ height: '100px' }}
							id='productDescription'
							placeholder='وصف المنتج'
							value={prodDescription}
							onChange={onChangeDescription}
						/>
						<label for='productDescription'>وصف المنتج</label>
					</div>

					<div className='form-floating mt-3'>
						<input
							type='number'
							className={`form-control ${prodPrice < 0 ? 'is-invalid' : ''} ${
								prodPrice > 0 ? 'is-valid' : ''
							}`}
							placeholder='سعر المنتج'
							id='productPrice'
							value={prodPrice}
							onChange={onChangePrice}
						/>
						<label for='productPrice'>سعر المنتج</label>
					</div>

					<div className='form-floating mt-3'>
						<input
							type='number'
							className={`form-control ${qty < 0 ? 'is-invalid' : ''} ${qty > 0 ? 'is-valid' : ''}`}
							placeholder='الكمية المتاحة'
							id='productQty'
							value={qty}
							onChange={onChangeQty}
						/>
						<label for='productQty'>الكمية المتاحة</label>
					</div>

					<div className='form-floating mt-3'>
						<select
							name='mainCategories'
							id='mainCategory'
							className='form-select'
							value={catID}
							onChange={onSelectMainCategory}>
							<option value='0'>اختر تصنيف</option>
							{mainCategories
								? mainCategories.map(item => <option value={item._id}>{item.title}</option>)
								: null}
						</select>
						<label for='mainCategory'>التصنيف الرئيسي</label>
					</div>

					<div className='form-floating mt-3'>
						<select
							name='subCategories'
							id='subCategory'
							className='form-select'
							value={subCatID}
							onChange={onSelectSubCategory}
							disabled={!subCategories || subCategories.length < 1 ? true : false}>
							<option value='0'>اختر تصنيف فرعي</option>
							{subCategories
								? subCategories.map(item => <option value={item._id}>{item.title}</option>)
								: null}
						</select>
						<label for='subCategory'>التصنيف الفرعي</label>
					</div>

					<div className='form-floating mt-3'>
						<select
							name='brands'
							id='brand'
							className='form-select'
							value={brandID}
							onChange={onSelectBrand}>
							<option value='0'>اختر ماركة</option>
							{brands ? brands.map(item => <option value={item._id}>{item.name}</option>) : null}
						</select>
						<label for='brand'>الماركة</label>
					</div>
				</Col>
			</Row>
			<Row>
				<Col sm='8' className='d-flex justify-content-end '>
					<button onClick={handleSubmit} className='btn-save d-inline mt-2 '>
						حفظ التعديلات
					</button>
				</Col>
			</Row>
			<ToastContainer />
		</div>
	);
};
