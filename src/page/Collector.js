import React, { Component } from 'react';
import { Row,Col,Icon,Menu,Dropdown,Input,Table } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/Collector.css'
const Search = Input.Search;
const menu = (
  <Menu>
    <Menu.Item>
      <span>全部</span>
    </Menu.Item>
    <Menu.Item>
      <span>站点</span>
    </Menu.Item>
    <Menu.Item>
      <span>自由</span>
    </Menu.Item>
  </Menu>
);
const menustar = (
  <Menu>
    <Menu.Item>
      <span>全部</span>
    </Menu.Item>
    <Menu.Item>
      <span>三星</span>
    </Menu.Item>
    <Menu.Item>
      <span>二星</span>
    </Menu.Item>
    <Menu.Item>
      <span>一星</span>
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
const menumethod = (
  <Menu>
    <Menu.Item>
      <span>全部</span>
    </Menu.Item>
    <Menu.Item>
      <span>按星级</span>
    </Menu.Item>
    <Menu.Item>
      <span>按日均订单量</span>
    </Menu.Item>
    <Menu.Item>
      <span>按总订单量</span>
    </Menu.Item>
  </Menu>
);
const dataSource = [{
  key: '1',
  no: '1',
  id: '13766762391',
  identity: '站点',
  area: '余杭区',
  daily: '13',
  total: '11432',
  star: '三星',
  record: '查看详情',
  operate: ''
}, {
  key: '2',
  no: '2',
  id: '17766762391',
  identity: '自由',
  area: '西湖区',
  daily: '6',
  total: '7654',
  star: '三星',
  record: '查看详情',
  operate: ''
}, {
  key: '3',
  no: '3',
  id: '15766762391',
  identity: '站点',
  area: '余杭区',
  daily: '13',
  total: '11432',
  star: '三星',
  record: '查看详情',
  operate: ''
}
, {
  key: '4',
  no: '4',
  id: '13366762391',
  identity: '自由',
  area: '江干区',
  daily: '5',
  total: '432',
  star: '二星',
  record: '查看详情',
  operate: ''
}, {
  key: '5',
  no: '5',
  id: '13766762391',
  identity: '站点',
  area: '余杭区',
  daily: '7',
  total: '432',
  star: '二星',
  record: '查看详情',
  operate: ''
}
, {
  key: '6',
  no: '6',
  id: '13766762391',
  identity: '站点',
  area: '余杭区',
  daily: '1',
  total: '32',
  star: '一星',
  record: '查看详情',
  operate: ''
}];

const columns = [{
  title: '序号',
  dataIndex: 'no',
  key: 'no',
}, {
  title: '回收员ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '身份类别',
  dataIndex: 'identity',
  key: 'identity',
}, {
  title: '注册地区',
  dataIndex: 'area',
  key: 'area',
}, {
  title: '日均订单量',
  dataIndex: 'daily',
  key: 'daily',
}, {
  title: '总订单量',
  dataIndex: 'total',
  key: 'total',
}, {
  title: '服务星级',
  dataIndex: 'star',
  key: 'star',
}, {
  title: '订单记录',
  dataIndex: 'record',
  key: 'record',
}, {
  title: '操作',
  dataIndex: 'operate',
  key: 'operate',
}];

class Collector extends Component {
  render() {
    return (
      <div>
        <div className="sub-name">回收员统计</div>
        {/* 评价统计 */}
        <div className="title-container">
          <Icon type="pushpin-o" />
          <div className="collector-name">评价统计</div>
        </div>
        {/* 三星服务 */}
				<div className="title-container">
				  <div className="count-name-collect">三星服务</div> 
          <div className="count-time">统计时间：2018/03/09</div>
				</div>
        <div className="user-variation-container">
					<div className="user-variation-collect">
						<div className="user-type">站点回收员</div>
						<div className="num-percent">
						  87%
              <Icon type="arrow-up" className="alter-percent-arrow"/>
							<span className="alter-percent">0.3%</span>
					  </div>
					</div>
					<div className="user-variation-collect">
					  <div className="user-type">自由回收员</div>
						<div className="num-percent-free">
						  54%
              <Icon type="arrow-up" className="alter-percent-arrow"/>
							<span className="alter-percent">0.9%</span>
					  </div>
					</div>
				</div>
        {/* 二星服务 */}
        <div className="title-container">
				  <div className="count-name-collect">二星服务</div> 
          <div className="count-time">统计时间：2018/03/09</div>
				</div>
        <div className="user-variation-container">
					<div className="user-variation-collect">
						<div className="user-type">站点回收员</div>
						<div className="num-percent">
						  12%
              <Icon type="arrow-up" className="alter-percent-arrow"/>
							<span className="alter-percent">0.1%</span>
					  </div>
					</div>
					<div className="user-variation-collect">
					  <div className="user-type">自由回收员</div>
						<div className="num-percent-free">
						  43%
              <Icon type="arrow-up" className="alter-percent-arrow"/>
							<span className="alter-percent">1.5%</span>
					  </div>
					</div>
				</div>
        {/* 一星服务 */}
        <div className="title-container">
				  <div className="count-name-collect">二星服务</div> 
          <div className="count-time">统计时间：2018/03/09</div>
				</div>
        <div className="user-variation-container">
					<div className="user-variation-collect">
						<div className="user-type">站点回收员</div>
						<div className="num-percent">
						  1%
              <Icon type="arrow-down" className="alter-percent-arrow down"/>
							<span className="alter-percent down">0.4%</span>
					  </div>
					</div>
					<div className="user-variation-collect">
					  <div className="user-type">自由回收员</div>
						<div className="num-percent-free">
						  3%
              <Icon type="arrow-down" className="alter-percent-arrow down"/>
							<span className="alter-percent down">2.4%</span>
					  </div>
					</div>
				</div>
        {/* 服务统计 */}
        <div className="title-container">
          <Icon type="pushpin-o" />
          <div className="collector-name">服务统计</div>
        </div>
        <div className="title-container">
          <div >身份类别：</div>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link select-collect">
               全部 <Icon type="down" />
            </span>
          </Dropdown>
          <div >服务星级：</div>
          <Dropdown overlay={menustar}>
            <span className="ant-dropdown-link select-collect">
               全部 <Icon type="down" />
            </span>
          </Dropdown>
          <div >注册地区：</div>
          <Dropdown overlay={menuarea}>
            <span className="ant-dropdown-link select-collect">
               全部 <Icon type="down" />
            </span>
          </Dropdown>
          <div >排序方式：</div>
          <Dropdown overlay={menumethod}>
            <span className="ant-dropdown-link select-collect">
               按星级 <Icon type="down" />
            </span>
          </Dropdown>
          <div className="searchbar">
            <Search placeholder="input search text" onSearch={value => console.log(value)}
            enterButton />
          </div>
        </div>
        <Table dataSource={dataSource} columns={columns} className="table-collect"/>
      </div>
    );
  }
}

export default Collector;
