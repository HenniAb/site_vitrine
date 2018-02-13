import React from 'react'
import { connect } from "react-redux"
import {addone, addsome, removeone} from "../../actions/counter";

class AddCounterComponent extends React.Component{


    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>The number : {this.props.counter}</p>
            <button onClick={() => {this.props.addone()}}>Add one</button>
                <button onClick={() => {this.props.removeone()}}>Remove one</button>
            </div>

        );
    }

}


const connectedAddCounterComponent = connect((store) => {
    return {
        counter : store.counter.number
    }
}, dispatch => ({
    addone : () => dispatch(addone()),
    removeone : () => dispatch(removeone())
}))(AddCounterComponent);

export default connectedAddCounterComponent;
