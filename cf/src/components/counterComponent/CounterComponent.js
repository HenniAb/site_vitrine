import React from "react"
import {connect} from "react-redux";
import TitleText from "component/hoverComponent/TitleText";


class CounterComponent extends React.PureComponent{


    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <p>Ce compteur est le même que la page add compteur demo mais grace au store, tout est syncro</p>
                <TitleText value={this.props.counter}/>
            </div>
        )
    }

}


const ConnectedCounterComponent = connect(store => {
    return {
        counter : store.counter.number
    }
}, null)(CounterComponent);

export default ConnectedCounterComponent