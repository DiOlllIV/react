import React, {Component} from 'react';
import Product from './Product';

class ProductsList extends Component {

    render() {
        const total = this.props.cartItems
            .reduce((acc,item) => acc + item.price, 0);

        return(
            <div className="products">
                <ul className="products__list">
                    {this.props.cartItems
                        .map(item =>
                        <Product
                            key={item.id}
                            name={item.name}
                            price={item.price}
                        />
                    )}
                </ul>
                <div className="products__total">
                    {`Total: ${total}`}
                </div>
            </div>
        );
    }
}

export default ProductsList;