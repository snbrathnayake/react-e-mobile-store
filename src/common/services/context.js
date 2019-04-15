import React, { Component } from 'react'
import { storeProducts , detailProduct } from '../../data'
// this object container two : ProductContext.provider & consumer | .utill class
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        details: [],
        cart: [],
        isModalOpen: false,
        modalProduct: [],

        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item } // coping values
            tempProducts = [...tempProducts, singleItem]; // coping single val to PRODUCTS array : EX=>sum = sum + 1;
        })

        this.setState(() =>{
            return {products: tempProducts}
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id );
        return product;
    }

    handleDetail = (id) => {
        const choosedProduct = this.getItem(id);
        this.setState(() => {
            return { details: choosedProduct }
        })
    }

    addToCart = (id) => {
        let tempProducts = [];

        tempProducts = [...this.state.products]; // copy to temp array
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];

        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        
        this.setState(() => {
            return { 
                products: tempProducts,
                cart:[...this.state.cart, product] 
            }
        }, ()=> {
           this.addTotal();
        })
    }

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { 
                modalProduct: product,
                isModalOpen:true
            }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return { isModalOpen:false }
        })
    }
    
    increment = (id) => {
        console.log('increment function... : ' , id);
        let tempCart = [...this.state.cart];

        const updateItem = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(updateItem);

        const product = tempCart[index];

        product.count =  product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return { cart: [...tempCart] }
        },()=>this.addTotal())
    }

    decrement = (id) => {

        let tempCart = [...this.state.cart];

        const updateItem = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(updateItem);

        const product = tempCart[index];

        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;

            this.setState(() => {
                return { cart: [...tempCart] }
            }, () => this.addTotal())
        }

    }

    removeItem = (id) => {
        console.log('removeItem function... : ', id);
        let tempProduct = [...this.state.products];
        let tempCart = [...this.state.cart];

        // return all cart-item except selected item(id) to remove
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProduct.indexOf(this.getItem(id));
        const removeProduct = tempProduct[index];

        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;

        this.setState(() =>{
            return {
                cart:[...tempCart],
                products: [...tempProduct]
            }
        },()=>{
            this.addTotal();
        })
    }

    clearCart = () => {
        this.setState(() => {
            return { cart:[] };
        },()=>{
            // refresh the product status & total-amt
            this.setProducts(); 
            this.addTotal();
        })
    }

    addTotal = () => {
        let subTotal = 0;

        this.state.cart.map(item => subTotal += item.total);
        const tax = parseFloat((subTotal * 0.1).toFixed(2)); // 10% tax
        const total = subTotal + tax;

        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,

                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
            {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };