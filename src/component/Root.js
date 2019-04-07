import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super(props);
   this._handleClickC = this._handleClickC.bind(this)
  }

  objA = {
    // this指向Hello组件
    a: () => {
      console.error(this);
    },
    b() {
      // 指向objA
      console.warn(this);
    },
    c: function() {
      console.log(this);
    }
  };

  _handleClick(e){
    console.log(this)
  }

  _handleClickB = (e) => {
    console.log(this)
  }

  _handleClickC(e){
    console.log(this)
  }

  render() {
    return(
      <div>
         <h1 onClick={this._handleClick}>hello1</h1>;
         <h1 onClick={this._handleClickB}>helloB</h1>;
         <h1 onClick={this._handleClickC}>helloB</h1>;
      </div>
    )
  }
}

export default Hello;
