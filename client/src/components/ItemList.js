import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ItemList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    deleteItem = id => {
        this.props.deleteItem(id);
    }

    render () {
        const { items } = this.props.item;

        return (
            <div>
                <ListGroup>
                    <TransitionGroup>
                        {items.map(({ _id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger" 
                                        size="sm"
                                        onClick={this.deleteItem.bind(this, _id)}    
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </div>
        );
    }

}

ItemList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});  

export default connect(mapStateToProps, { getItems, deleteItem })(ItemList);