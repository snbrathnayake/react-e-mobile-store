import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../common/services/context'; // addToCart func
 
import PropTypes from 'prop-types';

export default class Product extends Component {
  
  render() {

    const { id, title, img, price, inCart } = this.props.product;

    return (
     <ProductWrapper className="col-9 col-md-6 col-lg-3 mx-auto my-3">
       <div className="card">
       <ProductConsumer>
         {(value) =>{
           return (
            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
            <Link to="/details">
              <img src={img} alt="product-img" className="card-img-top"/>
            </Link>
              <button className="card-btn" disabled={inCart ? true : false}
              onClick={() =>{ 
                value.addToCart(id);
                value.openModal(id);
                }}>
              {inCart ? (<p className="text-capitalize mb-0" disabled>in cart</p>)
              : <i className="fas fa-cart-plus" />}
              </button>
          </div>
           )
         }}
    
        </ProductConsumer>
        {/* cart footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue mb-0"><span className="mr-1">$</span>{price}</h5>
        </div>
        
       </div>
       
     </ProductWrapper>
    )
  }
}

/**
 * data type
 * Product is component name
 * Assign data type to prperties of Product
 */
Product.propTypes = {
  product:PropTypes.shape({
    id: PropTypes.number,
    title:PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
} 


const ProductWrapper = styled.div `
  .card {
    border-color:transparent;
    transition:all 1s linear;
  }
  .card-footer { 
    border-color:transparent;
    border-top: transparent;
    transition:all 1s linear;
  }
  &:hover {
    .card {
      border:0.04rem solid rgba(0,0,0,0.2);
      box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
      background:rgba(247,247,247);
    }
  }

  .img-container{
    position:relative;
    overflow:hidden;
  }
  .card-img-top{
    transition:all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform:scale(1.2);
  }
  .card-btn {
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background: var(--lightBlue);
    color: var(--mainWhite);
    border: none;
    border-radius: 0.5rem 0 0 0;
    transform:translate(100%,100%);
  }
  .img-container:hover .card-btn {
    transform:translate(0,0);
    transition:all 1s linear;
  }
  .card-btn:hover {
    color:var(--mainBlue);
    cursor:pointer;
  }
`