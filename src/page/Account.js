import React, { Component } from 'react';
import { Icon,Button,Input } from 'antd'
import moment from 'moment';
import './css/Account.css'

class Account extends Component {
  render() {
    return (
      <div>
        <div className="sub-name-checkorder">账号设置</div>
        <center>
          <div className="account-container">
            <img src="img/setting.png" className="head-portrait system-img"></img>
            <Button className="rein">重新上传</Button>
            <div className="msg-container">
              <div className="inputname">账号：</div>
              <Input placeholder="管理员01"/>
            </div>
            <div className="msg-container">
              <div className="inputname">密码：</div>
              <Input placeholder="*********"/>
            </div>
            <div className="msg-container">
              <div className="inputname">邮箱：</div>
              <Input placeholder="644596096@qq.com"/>
            </div>
            <div className="msg-container">
              <div className="inputname">电话：</div>
              <Input placeholder="18100178779"/>
            </div>
            <Button className="confirm">确认修改</Button>
          </div>
        </center>
      </div>
    );
  }
}

export default Account;
