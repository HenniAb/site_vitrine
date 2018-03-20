import React from 'react'
import {connect} from "react-redux";
import TitleText from "component/hoverComponent/TitleText";



const textStyle = {
    color : "blue"
};

const hoverTextStyle = {
    color:"red"
}

class HoverComponent extends React.Component{

    handleMouseOver(){

    }

    render() {
        return (
          <div>
            <TitleText value="First" hoverStyle={hoverTextStyle} style={textStyle}/>
              <p>Ici, lorsqu'on passe la souris sur le titre, sa couleur change.</p>
              <p>Voir le component HoverComponent/TitleText pour le fonctionnement</p>

          </div>

        );
    }

}

const connectedHoverComponent = connect((store) => {
    return {
        counter : store.counter.number
    }
}, null)(HoverComponent);

export default connectedHoverComponent;
