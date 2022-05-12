import axios from 'axios';
import React, {  useState } from 'react'
import { Button, Form  , Table } from 'react-bootstrap'


const Category = ({cats , makeSlug }) => {



  // add cat form

  const [addForm , setAddForm] = useState(false);
  const [editForm , setEditForm] = useState(false);

  //handle add form

  const handleAddForm = () => {

    setAddForm(true);
    setEditForm(false);
    setCat({
      name : '',
      id   : ''

    })
  }

  //import cat data
  const [ cat , setCat ]= useState({

   name : '',
   id   : ''
  });

 

  //handle Form submit

  const handleCatFormSubmit = (e) => {

    e.preventDefault();

    let slug = makeSlug(cat.name)
    axios.post('http://localhost:5050/categorys', {

      id  : '',
      name  : cat.name,
      slug  : slug
    }).then(res => {

      setAddForm(false)

    });



   
  }

//cat data edit form

const handleEditForm = (id) => {

  setAddForm(false);
  setEditForm(true);
  axios.get('http://localhost:5050/categorys/' +id).then(res =>{

 
  setCat({
    name : res.data.name,
    id : res.data.id
  })
  });
}

//update cat
const handleCatUpdate = (e) => {
 
  e.preventDefault();
   let slug = makeSlug(cat.name)
  axios.patch('http://localhost:5050/categorys/' + cat.id , {

     name  : cat.name,
     slug  : slug
  }).then(res => {
    setCat({
      name  : '',
      id    : ''
    })

    setEditForm(false);
  });

}

 

  return (
    <>
    <div>Category</div>
    
    <hr />
    <Button variant='primary' onClick={ handleAddForm} className='btn-sm'>Add new Category</Button>
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
         {

     cats.map((data , index) =>

     <tr>
     <td>{index + 1}</td>
     <td>{data.name}</td>
     <td>{data.slug}</td>
     <td>

      <Button variant='warning' onClick={() => handleEditForm(data.id)} className='btn-sm'>Edit</Button>
      <Button variant='danger' className='btn-sm'>Delete</Button>
     </td>
   </tr>

    )


         }
     
       </tbody>
     </Table>

     {
 
 addForm &&


 <>
    <h2>Add new Category</h2>

 <Form onSubmit={ handleCatFormSubmit }>

     <Form.Group my={ 3 } >

     <Form.Control type='text' value={cat.name} onChange={e => setCat({ ...cat, name : e.target.value})} placeholder='Category Name'/>

    </Form.Group>
    

    <hr />
    <Form.Group my={ 3 } >
     
     <Button type='submit'  variant='success' className='btn btn-sm'>Add</Button>

    </Form.Group>
    
    
 <hr/>

 </Form>
 
</>


}

{/* edit categoty */}
{
 
 editForm &&


 <>
    <h2>Edit Category</h2>

 <Form onSubmit={ handleCatUpdate }>

     <Form.Group my={ 3 } >

     <Form.Control type='text' value={cat.name} onChange={e => setCat({ ...cat, name : e.target.value})} placeholder='Category Name'/>

    </Form.Group>
    

    <hr />
    <Form.Group my={ 3 } >
     
     <Button type='submit'  variant='success' className='btn btn-sm'>Add</Button>

    </Form.Group>
    
    
 <hr/>

 </Form>
 
</>


}


    </>
  )
}

export default Category