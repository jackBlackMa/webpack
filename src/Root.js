import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.objA.a();
    this.objA.b();
    this.objA.c();
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

  render() {
    return <h1>hello1</h1>;
  }
}

export default Hello;
