import React, { Component } from 'react';
import { Icon,Button,Input,Menu,Dropdown,Table  } from 'antd'
import moment from 'moment';
import './css/ElseSet.css'
const menu = (
  <Menu>
    <Menu.Item>
      <span>最近一周</span>
    </Menu.Item>
    <Menu.Item>
      <span>最近一月</span>
    </Menu.Item>
    <Menu.Item>
      <span>最近半年</span>
    </Menu.Item>
  </Menu>
);

const dataSource = [{
  key: '1',
  no: '1',
  user: '17898232476',
  ip: '172.196.32.1',
  name: '——'
}, {
    key: '2',
    no: '2',
    user: '13898232476',
    ip: '172.196.56.2',
    name: 'logo参数'
  }, {
    key: '3',
    no: '3',
    user: '13398232476',
    ip: '172.196.56.2',
    name: 'logo参数'
  }];

const columns = [{
  title: '序号',
  dataIndex: 'no',
  key: 'no',
},{
    title: '用户',
    dataIndex: 'user',
    key: 'user',
  },  {
  title: 'IP地址',
  dataIndex: 'ip',
  key: 'ip',
},  {
  title: '类名',
  dataIndex: 'name',
  key: 'name',
}];
// table 2
const dataSourcelimits = [
{
  key: '1',
  no: '1',
  user: '17898232476',
  ip: '172.196.32.1',
  name: '——'
}, {
    key: '2',
    no: '2',
    user: '13898232476',
    ip: '172.196.56.2',
    name: 'logo参数'
  }, {
    key: '3',
    no: '3',
    user: '13398232476',
    ip: '172.196.56.2',
    name: 'logo参数'
  }
];

const columnslimits = [{
    title: '序号',
    dataIndex: 'no',
    key: 'no',
  },{
      title: '用户',
      dataIndex: 'user',
      key: 'user',
    },  {
    title: 'IP地址',
    dataIndex: 'ip',
    key: 'ip',
  },  {
    title: '任务名称',
    dataIndex: 'name',
    key: 'name',
  }];

class ElseSet extends Component {
  render() {
    return (
      <div>
        <div className="sub-name-checkorder">权限设置</div>
        <div className="title-container">
		  <div className="count-name">系统日志</div>
          <div className="count-time">时间段：</div>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link">
               最近一周 <Icon type="down" />
            </span>
          </Dropdown>
		</div>
        <Table dataSource={dataSource} columns={columns} className="table-collect"/>  
        <div className="count-name">定时任务</div>
        <Table dataSource={dataSourcelimits} columns={columnslimits} className="table-collect"/>
      </div>
    );
  }
}

export default ElseSet;
