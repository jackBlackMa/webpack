import React, { Component } from 'react'

class Hello extends Component {
  constructor(props) {
    super(props)
    this.funB()
  }

  //   funA(){
  //     console.log(this)
  // }

  funB = () => {
    console.log(this)
  }
  render() {
    return (
      <h1>hello1</h1>
    )
  }
}

export default Hello;
