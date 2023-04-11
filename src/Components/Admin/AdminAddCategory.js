import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row,Col, Spinner} from 'react-bootstrap'
import AddCategoryHook from '../../hook/category/add-category-hook';
export const AdminAddCategory = () => {

    const [img,name,loading,isPress,handleSubmit,onImageChange,onNameChange]=AddCategoryHook()

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضف تصنيف جديد </div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div>
                    <div>
                        <label for="upload-photo">
                            <img
                            src={img}
                            alt="fzx"
                            height="100px"
                            width="120px"
                            style={{cursor:"pointer"}}
                            />
                        </label>
                        <input
                        type="file"
                        name="photo"
                        onChange={onImageChange}
                        id="upload-photo"
                        />
                    </div>
                    <input
                        value={name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                        onChange={onNameChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            {isPress ? (
				loading ? (
					<Spinner animation='border' variant='primary' />
				) : (
					<h4>تم الانتهاء</h4>
				)
                
			) : null}
            <ToastContainer />
        </div>
    )
}
