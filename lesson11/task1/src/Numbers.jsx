import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Numbers extends PureComponent {
    /* shouldComponentUpdate(nextProps) {
        if(this.props.numbers !== nextProps.number &&
                this.props.title !== nextProps.title)
                return true;
        return false;
    } */

    render() {
        return (
            <div className="number">
                <span className="number__title">
                    {this.props.title}
                </span>
                <span className="number__value">
                    {this.props.number}
                </span>
            </div>
        );
    }
}

Numbers.propTypes = {
    title: PropTypes.string,
    number: PropTypes.number.isRequired,
};

Numbers.defaultProps = {
    title: 'My title',
};

export default Numbers;