import React, { Component } from 'react'
import { ProductConsumer } from '../common/services/context';
import { Button } from '../common/styles-components/Button';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { isModalOpen , closeModal } = value;
          const { title, img, price } = value.modalProduct;
          if (!isModalOpen) {
            return null;
          } else {
            return (
              <ModalPopup>
                <div className="container">
                  <div className="row">
                    <div 
                    id="modal" 
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                      <h5>item add to the cart</h5>
                      <img src={img} alt="product " className="img-fluid"/>
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: ${price}</h5>
                      <Link to="/">
                        <Button onClick={() => closeModal()}>
                          store
                        </Button>
                      </Link>
                      <Link to="/cart">
                        <Button cart onClick={() => closeModal()}>
                          go to cart
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalPopup>
            )
          }
        }}
      </ProductConsumer>
    )
  }
}

const ModalPopup = styled.div`
  position:fixed;
  left: 0;
  top:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background:var(--mainWhite);    
  }
`;
