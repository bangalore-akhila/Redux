import React, {Component} from 'react';
import {connect} from 'react-redux';
import { cakeOrdered, cakeSelled } from '../Actions/cakeActions';
import { actions } from '../Store/store';

class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {
            cakes : 0
        }
    }

    render() {
        return <>
        <h1>Cake Shop</h1>
        <div>Number of Cakes : {this.props.cakes}</div>
        <div>Add Cake to Shelf<button onClick={()=> this.props.buyCake()}>AddCake</button></div>
        <div>Sell cake to Customer<button onClick={()=> this.props.sellCake()}>Sell Cakes</button></div>
        <div>Using ActionCreator Binding</div>
        <div>Add Cake to Shelf<button onClick={()=> actions.cakeOrdered()}>AddCake</button></div>
        <div>Sell cake to Customer<button onClick={()=> actions.cakeSelled()}>Sell Cakes</button></div>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        cakes : state.cake.noOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : () => dispatch(cakeOrdered ()),
        sellCake : () => dispatch(cakeSelled())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop) ;