
import React, { useEffect, useState } from 'react';
import './App.css';
import './--assets/css/bundle.css'
import './--assets/css/style.css'
import Shop from './components/Pages/Shop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductSingle from './components/Pages/ProductSingle';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Dashboard from './components/Admin/Dashboard';
import Category from './components/Admin/Category';
import Tag from './components/Admin/Tag';
import Products from './components/Admin/Products';
import Dash from './components/Admin/Dash';
import AddTag from './components/Admin/AddTag';
import ProductsAdd from './components/Admin/ProductsAdd';
import axios from 'axios';

function App() {


  // tag state

  const [tags , setTags] = useState([]);

   //get all cats

   const [ cats , setCats] = useState([]);

    //set all products

    const [ products , setProducts] = useState([]);


        //slug generate
        const makeSlug =  (data) => {

          let arr =  data.split(' ');
      
          return arr.join('-').toLowerCase();
      
        }




  useEffect(() => {

    axios.get('http://localhost:5050/tags').then(res =>{

    setTags(res.data.reverse());

    });
    axios.get('http://localhost:5050/categorys').then( res => {

      setCats(res.data);

    });

    axios.get('http://localhost:5050/products').then( res => {

      setProducts(res.data);

    });

  },[tags , cats , products]);

 



  return (
    <>





<Header/>

  <Routes>

  <Route path='/' element= { <Home/> } /> 
  <Route path='/shop' element= { <Shop products={products}/> } /> 
  <Route path='/shop/:slug' element= { <ProductSingle/> } /> 
  <Route path='/admin' element= { <Dashboard/> } > 

      <Route path='/admin/dashboard' element={ <Dash/>} />
      <Route path='/admin/products' element={ <Products products={products} />} />
      <Route path='/admin/Add-products' element={ <ProductsAdd cats={cats} tags={tags}  makeSlug = {makeSlug}/>} />
      <Route path='/admin/category' element={ <Category cats={cats} makeSlug = {makeSlug}/>} />
      <Route path='/admin/tag' element={ <Tag tags={tags} makeSlug = {makeSlug}/>} />
      <Route path='/admin/add-tag' element={ <AddTag/>} />
      
     

   </Route>
  </Routes>

<Footer/>




    
    </>
  );
}

export default App;
