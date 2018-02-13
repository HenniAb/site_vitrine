import React from "react"


export default class TitleText extends React.PureComponent{



    constructor(props){
        super(props);

        this.state = {style : this.props.style}


    }

    onMouseEnter(){
        this.setState({style:this.props.hoverStyle})
    }

    onMouseLeave(){
        this.setState({style : this.props.style})
    }

  render(){
      return(
          <h1 onMouseLeave={() => {this.onMouseLeave()}} onMouseEnter={() => {this.onMouseEnter()}} style={this.state.style}>{this.props.value}</h1>
      )
  }

}