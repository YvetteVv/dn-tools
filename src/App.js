import React, { Component } from 'react';
import Numbers from "./components/Numbers"
import './App.css';
import 'antd/dist/antd.css';

import { Checkbox, Tag, Divider, Layout} from 'antd';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['剑圣', '战神','箭神', '游侠', '元素', '魔导', '祭司', '贤者', '工程师', '炼金术士', '呐喊者', '舞者', '暗之使徒', '光明之怒', '枪术士', '唤术士', '守护者', '冲击者'];
const defaultCheckedList = ['剑圣', '战神','箭神', '游侠', '元素', '魔导', '祭司', '贤者', '工程师', '炼金术士', '呐喊者', '舞者', '暗之使徒', '光明之怒', '枪术士', '唤术士', '守护者', '冲击者'];
const { Footer } = Layout;
class App extends Component {

  state = {
    inputVal: '',
    arr: [],
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
    count:1
  };

  generateOccu = (c) => {
    let size = this.state.checkedList.length;
    let newArr = [];
    for (let i = 0; i < c; i++) {
      let index = parseInt(Math.random() * (size));
      newArr.push(this.state.checkedList[index]);
    }
    this.setState({
      arr:newArr
    })
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });

  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });

  };

  render() {
    //console.log(this.state.checkedList)
    return (
      <div className="cell-wall">
        <div className="cell-membrane">
          <Divider orientation="left">随机职业生成器</Divider>
          <div>
            <Tag color="magenta">DN</Tag>
            {/*<Tag color="lime">Destiny公会</Tag>*/}
            {/*<Tag color="volcano">活动</Tag>*/}
            {/*<Tag color="orange">orange</Tag>*/}
            <Tag color="gold">Destiny公会</Tag>
            {/*<Tag color="lime">lime</Tag>*/}
            {/*<Tag color="green">green</Tag>*/}
            <Tag color="cyan">活动</Tag>
            {/*<Tag color="blue">blue</Tag>*/}
            {/*<Tag color="geekblue">geekblue</Tag>*/}
            {/*<Tag color="purple">purple</Tag>*/}
          </div>
        <div>
          <br/>
          <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
            options={plainOptions}
            value={this.state.checkedList}
            onChange={this.onChange}
        />
        <div className="wrapper">
          <div>请输入一次性需要生成的个数</div>

          <input
              type="text"
              className="form-control"
              placeholder="number"
              value={this.state.count}
              onChange={(e)=>{this.setState({count:e.target.value})}}
          />
          <button className="btn" onClick={()=>{this.generateOccu(this.state.count)}}>生成</button>
        </div>

        <Numbers arr={this.state.arr}/>
        <Footer style={{ textAlign: 'center',backgroundColor:'#e3f2fd'}}>DragonNest ©2020 Created by 言卿</Footer>
        </div>
      </div>
    );
  }
}

export default App;
