import React, {Component} from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {
    
    render() {
        const transactions = this.props.transactions;
        return (
            <ul className="transactions">
                {transactions.map(transaction => 
                    <Transaction key={transaction.id} {...transaction}/>)}
            </ul>
        );
    }
}

export default TransactionsList;