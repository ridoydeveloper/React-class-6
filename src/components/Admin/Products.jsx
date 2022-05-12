import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <>
    <div>Products</div>
    <hr />
    <hr />
    <Link to='/admin/Add-Products' className='btn btn-primary btn-sm '>Add new Product</Link>
    <hr />
    <Table>
       <thead>
         <tr>
           <th>#</th>
           <th>Name</th>
           <th>Slug</th>
           <th>Action</th>
          
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>Men</td>
           <td>Men</td>
           <td>
            <Button variant='info' className='btn-sm'>View</Button>
            <Button variant='warning' className='btn-sm'>Edit</Button>
            <Button variant='danger' className='btn-sm'>Delete</Button>
           </td>
         </tr>
       </tbody>
     </Table>

    </>
  )
}

export default Products