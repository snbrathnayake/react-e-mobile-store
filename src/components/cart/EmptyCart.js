import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../common/styles-components/Button';

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
            <h1>your cart currently empty</h1>
            <div className="p-5">
                <Link to="/">
                    <Button>back to products</Button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}  
