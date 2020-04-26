import React, {Component} from 'react';
import ProductList from './ProductList';
import CartTitle from './CartTitle';

class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            cartItems: [
                {
                    id: '1',
                    name: 'Iphone 11',
                    price: 999,
                },
                {
                    id: 2,
                    name: 'Ipad Pro',
                    price: 799,
                },
            ],
        };
    }
    
    render() {
        const count = this.state.cartItems.length;
        return(
            <div className="column">
                <CartTitle 
                    userName={this.props.userData.firstName}
                    count={count}
                />
                <ProductList cartItems={this.state.cartItems} />
            </div>
        );
    }
}

export default ShoppingCart;