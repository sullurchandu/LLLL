import React, { Component } from 'react'


export default class Garage extends Component {
    constructor(props){
        super(props)
        this.state={
            brand:"ford",
            model:'mustang',
            color:'red',
            year:1964,
        }
    }
    ChangeColor=()=>{
        this.setState({brand:'bmw',model:'reborn',year:1908,color:'yellow'});
    }
   
  render() {
    return (
     <>
     <h1>my brand {this.state.brand}</h1>
     <p>this is models is {this.state.model} and color is {this.state.color} form {this.state.year}</p>
     <button type="button" onClick={this.ChangeColor}>ChangeColor</button>
     </>
    )
  }
}
