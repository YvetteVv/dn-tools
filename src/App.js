import React, { Component } from 'react';
import Numbers from "./components/Numbers"
import './App.css';

class App extends Component {

  state = {
    inputVal: '',
    arr: []
  }

  setDigits = (c) => {
    let newArr = [];
    this.setState({
      arr: []
    }, () => {
      for (let i = 0; i < c; i++) {
        newArr.push(parseInt(Math.random() * 10))
      }
      this.setState({
        arr: newArr
      })
      console.log("更换成功")
    })

    // setTimeout(()=>{
    //   for (let i = 0; i < c; i++) {
    //     newArr.push(parseInt(Math.random() * 10))
    //   }
    //   this.setState({
    //     arr: newArr
    //   })
    //   console.log("set time")
    // },50)

  }

  handleChange = () => {
    this.setDigits(parseInt(this.state.inputVal))
  }

  handleInputChange = (e) => {
    let prev = e.target.value;
    this.setState({
        inputVal: ''
      }, () => {
        this.setState({
          inputVal: prev
        })
      }
    )
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
