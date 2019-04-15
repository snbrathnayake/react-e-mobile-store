import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import { ProductConsumer } from '../common/services/context';

export default class ProductsViews extends Component {

    state = {
        products: storeProducts
    };

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title name="e-mobile" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                { value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    }) 
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
