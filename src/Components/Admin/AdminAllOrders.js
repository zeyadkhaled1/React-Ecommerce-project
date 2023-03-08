import React from 'react'
import { AdminAllOrdersItem } from './AdminAllOrdersItem'
import { Row } from 'react-bootstrap'
export const AdminAllOrders = () => {
  return (
    <div>
         <div className='admin-content-text'>ادارة جميع الطلبات
    </div> 
    <Row>
      <AdminAllOrdersItem/>
      <AdminAllOrdersItem/>
      <AdminAllOrdersItem/>
      <AdminAllOrdersItem/>
    </Row>
    </div>
  )
}
