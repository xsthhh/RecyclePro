import React, { Component } from 'react';
import { Row,Col,Icon,Menu,Dropdown,Input,Table } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/CheckOrder.css'
const Search = Input.Search;
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
      <span>平台单-未分类</span>
    </Menu.Item>
    <Menu.Item>
      <span>平台单-分类</span>
    </Menu.Item>
    <Menu.Item>
      <span>非平台单</span>
    </Menu.Item>
  </Menu>
);
const menuarea = (
  <Menu>
    <Menu.Item>
      <span>全部</span>
    </Menu.Item>
    <Menu.Item>
      <span>余杭区</span>
    </Menu.Item>
    <Menu.Item>
      <span>西湖区</span>
    </Menu.Item>
    <Menu.Item>
      <span>拱墅区</span>
    </Menu.Item>
    <Menu.Item>
      <span>上城区</span>
    </Menu.Item>
    <Menu.Item>
      <span>江干区</span>
    </Menu.Item>
    <Menu.Item>
      <span>下城区</span>
    </Menu.Item>
    <Menu.Item>
      <span>萧山区</span>
    </Menu.Item>
  </Menu>
);
const dataSource = [{
  key: '1',
  time: '2018/01/01 22:23:21',
  userid: '13827362856',
  id: '13766762391',
  type: '平台单-未分类',
  area: '余杭区',
  content: '1袋干垃圾、1袋湿垃圾',
  price: '￥7.20',
  operate: ''
}, {
    key: '2',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    id: '13766762391',
    type: '平台单-分类',
    area: '西湖区',
    content: '旧报纸5KG、废旧电视1台、旧杂志5KG',
    price: '￥29.80',
    operate: ''
}, {
    key: '3',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    id: '13766762391',
    type: '非平台单',
    area: '上城区',
    content: '废旧硬纸盒-30KG',
    price: '￥24.00',
    operate: ''
}, {
    key: '4',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    id: '13766762391',
    type: '平台单-未分类',
    area: '余杭区',
    content: '1袋干垃圾、1袋湿垃圾',
    price: '￥7.20',
    operate: ''
}, {
    key: '5',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    id: '13766762391',
    type: '平台单-未分类',
    area: '余杭区',
    content: '1袋干垃圾、1袋湿垃圾',
    price: '￥7.20',
    operate: ''
}, {
    key: '6',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    id: '13766762391',
    type: '平台单-未分类',
    area: '余杭区',
    content: '1袋干垃圾、1袋湿垃圾',
    price: '￥7.20',
    operate: ''
}, {
    key: '7',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    id: '13766762391',
    type: '平台单-未分类',
    area: '余杭区',
    content: '1袋干垃圾、1袋湿垃圾',
    price: '￥7.20',
    operate: ''
}, {
    key: '8',
    time: '2018/01/01 22:23:21',
    userid: '13827362856',
    id: '13766762391',
    type: '平台单-未分类',
    area: '余杭区',
    content: '1袋干垃圾、1袋湿垃圾',
    price: '￥7.20',
    operate: ''
}];

const columns = [{
  title: '订单发起时间',
  dataIndex: 'time',
  key: 'time',
},{
    title: '用户ID',
    dataIndex: 'userid',
    key: 'userid',
  },  {
  title: '回收员ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '订单分类',
  dataIndex: 'type',
  key: 'type',
}, {
  title: '订单区域',
  dataIndex: 'area',
  key: 'area',
}, {
  title: '订单内容',
  dataIndex: 'content',
  key: 'content',
  width: 200
}, {
  title: '订单成交价',
  dataIndex: 'price',
  key: 'price',
},{
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

class CheckOrder extends Component {
  render() {
    return (
      <div>
        <div className="sub-name-checkorder">查看订单</div>
        <div className="title-container">
          <div >时间段：</div>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link select-order">
               最近一周 <Icon type="down" />
            </span>
          </Dropdown>
          <div >订单分类：</div>
          <Dropdown overlay={menutype}>
            <span className="ant-dropdown-link select-order">
               全部 <Icon type="down" />
            </span>
          </Dropdown>
          <div >订单区域：</div>
          <Dropdown overlay={menuarea}>
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

export default CheckOrder;
