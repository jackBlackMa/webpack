import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super(props);
  }

 componentDidMount(){
     this.refs.button.addEventListener('click',e =>{
        this._handleClick(e)
     })
 }


componentWillUnmount(){
    this.refs.button.removeEventListener('click')
}

 _handleClick = (e) => {
     console.log(this)
 }

  render() {
    return(
      <div>
         <button ref="button">按钮1</button>
      </div>
    )
  }
}

export default Hello;
