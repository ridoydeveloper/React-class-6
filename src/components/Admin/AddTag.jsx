import axios from 'axios';
import React, {  useState  } from 'react';
import { Button, Form } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

const AddTag = () => {

  const [tag , setTag]= useState();


  //slug generate
  const makeSlug =  (data) => {

    let arr =  data.split(' ');

    return arr.join('-').toLowerCase();

  }



 const handletagAdd = (e) => {

    e.preventDefault();
    let slug = makeSlug(tag);

    axios.post('http://localhost:5050/tags',{

       id   : '',
       name : tag,
       slug : slug


    }).then( res => {
      
      setTag('');
    })



 }





  return (


    <>
    <div>Add New Tag</div>
    <hr />
   
    <Link  className='btn btn-primary btn-sm' to='/admin/tag'>All Tag</Link>
    <hr />
 
     <Form  onSubmit={ handletagAdd }>
         <Form.Group my={ 3 } >

         <Form.Control type='text' value={tag} onChange={e => setTag(e.target.value)} placeholder='Tag Name'/>

        </Form.Group>
        <hr />
        <Form.Group my={ 3 } >
         
         <Button type='submit' variant='success' className='btn btn-sm'>Add Tag</Button>

        </Form.Group>

     </Form>
    </>
  )
};

export default AddTag;
