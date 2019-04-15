import React from 'react'


// d-none d-lg-block : display none and only visibled for larg-screen
export default function CartColumn() {
    return (
        <div className="container-fluid text-center  d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">name of products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>
            </div>
        </div>
    )
}
