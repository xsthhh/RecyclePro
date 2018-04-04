import React, { Component } from 'react';
import { Table, Menu, Dropdown,Icon,DatePicker } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/UserLocal.css'
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const menu = (
  <Menu>
    <Menu.Item>
      <span>杭州</span>
    </Menu.Item>
    <Menu.Item>
      <span>上海</span>
    </Menu.Item>
    <Menu.Item>
      <span>北京</span>
    </Menu.Item>
  </Menu>
);
const dataSource = [{
  key: '1',
  area: '1 余杭区',
  rate: '35.3%'
}, {
  key: '2',
  area: '2 西湖区',
  rate: '24.2%'
}, {
  key: '3',
  area: '3 下城区',
  rate: '15.9%'
}, {
  key: '4',
  area: '4 上城区',
  rate: '15.1%'
}, {
  key: '5',
  area: '5 江干区',
  rate: '3.7%'
}, {
  key: '6',
  area: '6 拱墅区',
  rate: '2.3%'
}, {
  key: '7',
  area: '7 滨江区',
  rate: '1.6%'
}];

const columns = [{
  title: '区域/排名',
  dataIndex: 'area',
  key: 'area',
}, {
  title: '注册占比(3219人)',
  dataIndex: 'rate',
  key: 'rate',
}];

class UserLocal extends Component {
  render() {
    return (
      <div>
        <div className="sub-name-local">用户地区分布统计</div>
				{/* 用户注册地区分布 */}
				<div className="title-container">
				  <div className="count-name">用户注册地区分布</div>
          <div className="count-time">统计时段：</div>
					<div className="time-picker">
						<RangePicker
							defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
							format={dateFormat}
						/>
					</div>
          <div className="count-time">城市：</div>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link">
               杭州 <Icon type="down" />
            </span>
          </Dropdown>
				</div>
        <div className="local-container">
          <img src="img/local-map.png" className="local-map" />
          <div className="local-rank">
            <div className="rank-title">
              <div className="area-rank">区域/排名</div>
              <div className="regi-rate">注册占比(9872人)</div>
            </div>
            <div className="rank-area-rate">
              <div className="rank-r">1   余杭区</div>
              <div className="ratebar"></div>
              <div className="rate">35.3%</div>
            </div>
            <div className="rank-area-rate">
              <div className="rank-r">2   西湖区</div>
              <div className="ratebar-2"></div>
              <div className="rate">24.2%</div>
            </div>
            <div className="rank-area-rate">
              <div className="rank-r">3   下城区</div>
              <div className="ratebar-3"></div>
              <div className="rate">15.9%</div>
            </div>
            <div className="rank-area-rate">
              <div className="rank-r">4   上城区</div>
              <div className="ratebar-4"></div>
              <div className="rate">15.1%</div>
            </div>
            <div className="rank-area-rate">
              <div className="rank-r">5   江干区</div>
              <div className="ratebar-5"></div>
              <div className="rate">3.7%</div>
            </div>
            <div className="rank-area-rate">
              <div className="rank-r">6   拱墅区</div>
              <div className="ratebar-6"></div>
              <div className="rate">2.3%</div>
            </div>
            <div className="rank-area-rate">
              <div className="rank-r">7   滨江区</div>
              <div className="ratebar-7"></div>
              <div className="rate">1.6%</div>
            </div>
            <div className="rank-area-rate">
              <div className="rank-r">8   萧山区</div>
              <div className="ratebar-8"></div>
              <div className="rate">1.4%</div>
            </div>
            <div className="rank-area-rate">
              <div className="rank-r">9   临安区</div>
              <div className="ratebar-9"></div>
              <div className="rate">0.8%</div>
            </div>
            <div className="rank-area-rate">
              <div className="rank-r">10   富阳区</div>
              <div className="ratebar-10"></div>
              <div className="rate">0.2%</div>
            </div>
          </div>
        </div>
        {/* 自由回收员注册地区分布 */}
				<div className="title-container">
				  <div className="count-name">自由回收员注册地区分布</div>
          <div className="count-time">统计时段：</div>
					<div className="time-picker">
						<RangePicker
							defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
							format={dateFormat}
						/>
					</div>
          <div className="count-time">城市：</div>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link">
               杭州 <Icon type="down" />
            </span>
          </Dropdown>
				</div>
        <div className="local-container">
          <img src="img/local-map.png" className="local-map" />
          <Table dataSource={dataSource} columns={columns} className="table-rank"/>
        </div>
      </div>
    );
  }
}

export default UserLocal;
