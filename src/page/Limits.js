import React, { Component } from 'react';
import { Icon,Button,Input,Menu,Dropdown,Table  } from 'antd'
import moment from 'moment';
import './css/Limits.css'
const menu = (
  <Menu>
    <Menu.Item>
      <span>杭州-余杭区</span>
    </Menu.Item>
    <Menu.Item>
      <span>杭州-西湖区</span>
    </Menu.Item>
    <Menu.Item>
      <span>杭州-上城区</span>
    </Menu.Item>
  </Menu>
);
const menutype = (
  <Menu>
    <Menu.Item>
      <span>全部</span>
    </Menu.Item>
    <Menu.Item>
      <span>用户</span>
    </Menu.Item>
    <Menu.Item>
      <span>站点回收员</span>
    </Menu.Item>
    <Menu.Item>
      <span>自由回收员</span>
    </Menu.Item>
    <Menu.Item>
      <span>管理员</span>
    </Menu.Item>
  </Menu>
);
const dataSource = [{
  key: '1',
  type: '用户',
  uselimit: '√',
  loginlimit: '——',
  msglimit: '——'
}, {
    key: '2',
    type: '回收员(站点/自由)',
    uselimit: '√',
    loginlimit: '——',
    msglimit: '——'
}, {
    key: '3',
    type: '管理员',
    uselimit: '√',
    loginlimit: '√',
    msglimit: '√'
}];

const columns = [{
  title: '用户类型',
  dataIndex: 'type',
  key: 'type',
  width: 100
},{
    title: '使用权限',
    dataIndex: 'uselimit',
    key: 'uselimit',
    width: 100
  },  {
  title: '后台登录权限',
  dataIndex: 'loginlimit',
  key: 'loginlimit',
  width: 100
},  {
  title: '信息管理权限',
  dataIndex: 'msglimit',
  key: 'msglimit',
  width: 100
}];
// table 2
const dataSourcelimits = [{
  key: '1',
  no: '1',
  userid: '13827362856',
  name: 'Alice',
  phone: '13827362856',
  email: '644596096@qq.com',
  area: '杭州-余杭区',
  type: '用户',
  operate: ''
}, {
  key: '2',
  no: '2',
  userid: '15827362856',
  name: '001',
  phone: '15827362856',
  email: '644596096@qq.com',
  area: '杭州-余杭区',
  type: '管理员',
  operate: ''
}, {
  key: '3',
  no: '3',
  userid: '17827362856',
  name: '张三',
  phone: '17827362856',
  email: '644596096@qq.com',
  area: '杭州-西湖区',
  type: '站点回收员',
  operate: ''
}, {
  key: '4',
  no: '4',
  userid: '17827362856',
  name: '回收一姐',
  phone: '17827362856',
  email: '644596096@qq.com',
  area: '杭州-余杭区',
  type: '自由回收员',
  operate: ''
}, {
  key: '5',
  no: '5',
  userid: '13827362856',
  name: 'Alice',
  phone: '18100178779',
  email: '644596096@qq.com',
  area: '杭州-余杭区',
  type: '用户',
  operate: ''
}];

const columnslimits = [{
  title: '序号',
  dataIndex: 'no',
  key: 'no',
},{
    title: '用户ID',
    dataIndex: 'userid',
    key: 'userid',
  }, {
  title: '用户名',
  dataIndex: 'name',
  key: 'name',
},  {
  title: '电话号码',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '邮箱',
  dataIndex: 'email',
  key: 'email',
}, {
    title: '地区',
    dataIndex: 'area',
    key: 'area',
}, {
  title: '用户类型',
  dataIndex: 'type',
  key: 'type',
}, {
  title: '操作',
  dataIndex: 'operate',
  key: 'operate',
}];

class Limits extends Component {
  render() {
    return (
      <div>
        <div className="sub-name-checkorder">权限设置</div>
        <Table dataSource={dataSource} columns={columns} className="table-limits"/>
        <div className="title-container for-limits">
          <div >用户类型：</div>
          <Dropdown overlay={menutype}>
            <span className="ant-dropdown-link select-order">
               全部 <Icon type="down" />
            </span>
          </Dropdown>
          <div >地区：</div>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link select-order">
               全部 <Icon type="down" />
            </span>
          </Dropdown>
        </div>
        <Table dataSource={dataSourcelimits} columns={columnslimits} className="table-collect"/>
      </div>
    );
  }
}

export default Limits;
