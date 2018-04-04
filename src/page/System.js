import React, { Component } from 'react';
import { Icon,Button,Input,Radio } from 'antd'
import moment from 'moment';
import './css/System.css'
const RadioGroup = Radio.Group;

class System extends Component {
    state = {
        value: 2,
      }
      onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      }
  render() {
    return (
      <div>
        <div className="sub-name-checkorder">系统设置</div>
        <center>
          <div className="account-container">
            <img src="img/greenman.png" className="head-portrait system-img"></img>
            <Button className="rein">更改LOGO</Button>
            <div className="msg-container">
              <div className="inputname systemname">系统名称：</div>
              <Input placeholder="绿巨人回收"/>
            </div>
            <div className="msg-container">
              <div className="inputname for-system">登录验证码：</div>
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>开启</Radio>
                <Radio value={2}>关闭</Radio>
              </RadioGroup>
            </div>
            <div className="msg-container">
              <div className="inputname for-system">会话有效期：</div>
              <Input placeholder="一周"/>
            </div>
            <Button className="confirm">确认修改</Button>
          </div>
        </center>
      </div>
    );
  }
}

export default System;
