import React, { Component } from 'react';
import './App.css';

import Numbers from "./components/Numbers"

let prev = '0';

class App extends Component {

  state = {
    inputVal: '',
    arr: []
  }

  setDigits = (c) => {
    let newArr = [];
    for (let i = 0; i < c; i++) {
      newArr.push(parseInt(Math.random() * 10))
    }
    this.setState({
      arr: newArr
    })
  }

  handleChange = () => {
    this.setDigits(parseInt(this.state.inputVal))
  }

  handleInputChange = (e) => {
    prev = e.target.value;
    this.setState({
      inputVal: ''
    }, this.handleTwice)
  }

  handleTwice = () => {
    this.setState({
      inputVal: prev
    })
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div>请输入数字位数</div>
          <input type="text" className="form-control" placeholder="number" onChange={this.handleInputChange}/>
          <button className="btn" onClick={this.handleChange}>换一个</button>
        </div>

        <Numbers arr={this.state.arr}/>
      </div>
    );
  }
}

export default App;
