import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }

  componentDidMount() {
    document.body.addEventListener('click',e => {
        this.setState({
            status: !this.state.status,
        })
    })
    document.querySelector(".code").addEventListener('click', e=>{
        e.stopPropagation();
    })
    document.querySelector(".button").addEventListener('click', e=>{
        e.stopPropagation();
        this.setState({
            status: !this.state.status
          });
    })
  }

  componentWillUnmount() {
    // this.refs.button.removeEventListener("click");
  }

  _handleClick = e => {
    this.setState({
      status: !this.state.status
    });
  };

  render() {
    let { status } = this.state;
    return (
      <div>
        <button className='button'>按钮1</button>
        <div
          style={{
            width: "100px",
            height: "100px",
            background: "red",
            display: status ? "block" : "none"
          }}
          className="code"
        />
      </div>
    );
  }
}

export default Hello;
