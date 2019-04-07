import React, { Component } from 'react';


class Select extends Component{
    constructor(props){
        super(props)
        this.state = {
            area:['a','b'],
        }
    }

    handleChange = (e) => {
        const {options} = e.target;
        const area = Object.keys(options).
        filter( i => options[i].selected === true).
        map( i => options[i].value);
        console.log(area)

        this.setState({
            area
        })
    }

    render(){
        const {area} = this.state;
        return(
            <select multiple={true}  value={area} onChange={this.handleChange}>
                <option value='a'>a</option>
                <option value='b'>b</option>
                <option value='c'>c</option>
            </select>
        )
    }
}

export default Select