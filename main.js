/**
 
import show from './show.js';
import './main.css';


show('webpack');
 */
import './main.css';
import './main.scss';
import React, { Component } from 'react';
import {render} from 'react-dom'

class Hello extends Component{
    render(){
      return (
        <h1>hello</h1>
      )
    }
}

render(<Hello/>,document.querySelector('#app'))
