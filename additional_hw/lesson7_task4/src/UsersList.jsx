import React, {Component} from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            currentPage: 0,
            itemsPerPage: 3,
        };
    }

    goPrev = () => {
        this.setState({
            currentPage: this.state.currentPage - 1,
        })
    };

    goNext = () => {
        this.setState({
            currentPage: this.state.currentPage + 1,
        })
    }

    render() {
        const {users} = this.props;
        const {currentPage, itemsPerPage} = this.state;
        const start = currentPage * itemsPerPage;
        const displayedUsers = users.slice(start, start + itemsPerPage);

        return (
            <div>
                <Pagination
                    goPrev={this.goPrev}
                    goNext={this.goNext}
                    currentPage={currentPage}
                    totalItems={users.length}
                    itemsPerPage={itemsPerPage}
                />
                <ul>
                    {displayedUsers.map((user) => 
                        <User key={user.id} user={user} />
                    )}
                </ul>
            </div>
        ); 
    }
};

export default UsersList;