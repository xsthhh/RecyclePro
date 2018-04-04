import React, { Component } from 'react';
import { Row,Col,Icon,Menu,Dropdown,Input,Table } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/CheckFeedback.css'
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
const menutype = (
  <Menu>
    <Menu.Item>
      <span>全部</span>
    </Menu.Item>
    <Menu.Item>
      <span>已处理</span>
    </Menu.Item>
    <Menu.Item>
      <span>未处理</span>
    </Menu.Item>
  </Menu>
);

const dataSource = [{
  key: '1',
  time: '2018/01/01 22:23:21',
  userid: '13827362856',
  theme: '等待时间久',
  content: '仓溢绿苑校区，站点回收员接单了1小时还没有上门回收',
  status: '已处理',
  check: '查看详情',
  operate: ''
}, {
    key: '2',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    theme: '等待时间久',
    content: '仓溢绿苑校区，站点回收员接单了1小时还没有上门回收',
    status: '已处理',
    check: '查看详情',
    operate: ''
  }, {
    key: '3',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    theme: '等待时间久',
    content: '仓溢绿苑校区，站点回收员接单了1小时还没有上门回收',
    status: '已处理',
    check: '查看详情',
    operate: ''
  }, {
    key: '4',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    theme: '等待时间久',
    content: '仓溢绿苑校区，站点回收员接单了1小时还没有上门回收',
    status: '已处理',
    check: '查看详情',
    operate: ''
  }, {
    key: '5',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    theme: '等待时间久',
    content: '仓溢绿苑校区，站点回收员接单了1小时还没有上门回收',
    status: '已处理',
    check: '查看详情',
    operate: ''
  }, {
    key: '6',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    theme: '等待时间久',
    content: '仓溢绿苑校区，站点回收员接单了1小时还没有上门回收',
    status: '已处理',
    check: '查看详情',
    operate: ''
  }, {
    key: '7',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    theme: '等待时间久',
    content: '仓溢绿苑校区，站点回收员接单了1小时还没有上门回收',
    status: '已处理',
    check: '查看详情',
    operate: ''
  }, {
    key: '8',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    theme: '等待时间久',
    content: '仓溢绿苑校区，站点回收员接单了1小时还没有上门回收',
    status: '已处理',
    check: '查看详情',
    operate: ''
  }];

const columns = [{
  title: '反馈时间',
  dataIndex: 'time',
  key: 'time',
},{
    title: '用户ID',
    dataIndex: 'userid',
    key: 'userid',
  }, {
  title: '反馈主题',
  dataIndex: 'theme',
  key: 'theme',
},  {
  title: '反馈内容',
  dataIndex: 'content',
  key: 'content',
  width: 250
}, {
  title: '处理状态',
  dataIndex: 'status',
  key: 'status',
}, {
    title: '查看详情',
    dataIndex: 'check',
    key: 'check',
}, {
  title: '操作',
  dataIndex: 'operate',
  key: 'operate',
//   render: () => (
//     <span className="table-operation">
//       <a href="#">Pause</a>
//       <a href="#">Stop</a>
      
//     </span>
//   ),
}];

class CheckFeedback extends Component {
  render() {
    return (
      <div>
        <div className="sub-name-checkorder">查看反馈</div>
        <div className="title-container">
          <div >时间段：</div>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link select-order">
               最近一周 <Icon type="down" />
            </span>
          </Dropdown>
          <div >反馈处理状态：</div>
          <Dropdown overlay={menutype}>
            <span className="ant-dropdown-link select-order">
               全部 <Icon type="down" />
            </span>
          </Dropdown>
        </div>
        <Table dataSource={dataSource} columns={columns} className="table-collect"/>
      </div>
    );
  }
}

export default CheckFeedback;
