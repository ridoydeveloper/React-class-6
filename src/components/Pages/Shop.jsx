import React from 'react'
import { Link } from 'react-router-dom';
import product from '../../--assets/images/shop/1.jpg';

const Shop = ({products}) => {
  return (
    
<>
<section>
        <div className="container">
          <div className="row">
            <div className="col-md-3 hidden-sm hidden-xs">
              <div className="sidebar">
              <div className="widget">
                  <h6 className="upper">Search Shop</h6>
                  <form>
                    <input type="text" placeholder="Search.." className="form-control" />
                  </form>
                </div>
                <div className="widget">
                  <h6 className="upper">Categories</h6>
                  <ul className="nav">
                    <li><a href="#">Beauty</a>
                    </li>
                    <li><a href="#">Blazers</a>
                    </li>
                    <li><a href="#">Bags</a>
                    </li>
                    <li><a href="#">Jeans</a>
                    </li>
                    <li><a href="#">Shorts</a>
                    </li>
                    <li><a href="#">Dresses</a>
                    </li>
                  </ul>
                </div>


                {/* end of widget        */}


                <div className="widget">
                  <h6 className="upper">Trending Products</h6>
                  <ul className="nav product-list">
                    <li>
                      <div className="product-thumbnail">
                        <img src={product} alt="" />
                      </div>
                      <div className="product-summary"><a href="#">Premium Suit Blazer</a><span>$199.99</span>
                      </div>
                    </li>
                  
                 
                  </ul>
                </div>
                
            
                {/* end of widget        */}
                <div className="widget">
                  <h6 className="upper">Popular Tags</h6>
                  <div className="tags clearfix"><a href="#">Hipster</a><a href="#">Fashion</a><a href="#">Shirt</a><a href="#">Modern</a><a href="#">Vintage</a>
                  </div>
                </div>

                {/* end of widget      */}
              </div>
              {/* end of sidebar*/}

            </div>

            <div className="col-md-9">
        
              <div className="container-fluid">
                <div className="row">

                 {
                   products.map( data =>
                    
                    <div className="col-md-4 col-sm-6">
                    <div className="shop-product">
                      <div className="product-thumb">
                        <Link to= { `/shop/${data.name}`}>
                          <img style={{ height : '250px' , width : '100%', objectFit : 'cover' }} src={ data.photo } alt="" />
                        </Link>
                        <div className="product-overlay"><a href="#" className="btn btn-color-out btn-sm">Add To Cart<i className="ti-bag" /></a>
                        </div>
                      </div>
                      <div className="product-info">
                        <h4 className="upper"><a href="#">{data.name}</a></h4>
                        
                        {
                          data.sale_price === '' ?
                          <span>{data.regular_price} BDT</span>
                          : 
                          <>
                           <span style={{ textDecoration : 'line-through', display : 'inline-block', marginRight : '10px' }}>{data.regular_price}</span>

                        <span style={{color : 'red'}}>{data.sale_price} BDT</span>
                          </>
                        }

                       
                        
                        <div className="save-product"><a href="#"><i className="icon-heart" /></a>
                        </div>
                      </div>
                    </div>
                  </div>

                    )
                 }

                  

                </div>

                {/* end of row*/}
                <ul className="pagination">
                  <li><a href="#" aria-label="Previous"><span aria-hidden="true"><i className="ti-arrow-left" /></span></a>
                  </li>
                  <li className="active"><a href="#">1</a>
                  </li>
                  <li><a href="#">2</a>
                  </li>
                  <li><a href="#">3</a>
                  </li>
                  <li><a href="#">4</a>
                  </li>
                  <li><a href="#">5</a>
                  </li>
                  <li><a href="#" aria-label="Next"><span aria-hidden="true"><i className="ti-arrow-right" /></span></a>
                  </li>
                </ul>
                {/* end of pagination*/}
              </div>
            </div>
          </div>
        </div>
        {/* end of container*/}
      </section>
</>
  )
}

export default Shop;