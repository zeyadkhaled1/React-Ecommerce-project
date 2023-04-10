import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Row,Col, Spinner } from 'react-bootstrap'
import avatar from '../../Images/avatar.png'
import { useSelector,useDispatch } from 'react-redux'
import { createCategory } from '../../Redux/Actions/categoryAction'
import axios from 'axios'
export const AdminAddCategory = () => {

    const dispatch=useDispatch()
    const [img,setImg]=useState(avatar)
    const [name,setName]=useState('')
    const [selectedFile,setSelectedFile]=useState(null)
    const [loading,setLoading]=useState(true)
    



    const onImageChange=(e)=>{
        if(e.target.files&&e.target.files[0]){
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }

    }

    

    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(name===""||selectedFile===null){
            notify('أكمل البيانات','warn')
        }
        else{
        const formData=new FormData()
        formData.append('title',name)
        formData.append('image',selectedFile)

        setLoading(true)
        
       await dispatch(createCategory(formData))
       setLoading(false)
        }
    }
    const res =useSelector(state =>state.allCategory.category)
    

    useEffect(()=>{
        if(!loading){
            setImg(avatar)
            setName('')
            setSelectedFile(null)
            setLoading(true)
            

            if(res.status===201&&res){
                notify('تمت عملية الاضافة','success')
            }
            else
            {
                notify('هناك مشكلة في عملية الاضافة','error')  
            }
        }
    },[loading])
    const notify = (msg,type) =>{
       if(type==='warn')  toast.warn(msg)
       else if(type==='success')  toast.success(msg)
       else if(type==='error')  toast.error(msg)
    }
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
                        onChange={(e)=>setName(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
    )
}
