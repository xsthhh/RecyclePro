import React, { Component } from 'react';
import { Icon,Menu,Dropdown,Table,DatePicker } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/GiftGrant.css'
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const menu = (
    <Menu>
      <Menu.Item>
        <span>最近一月</span>
      </Menu.Item>
      <Menu.Item>
        <span>最近一周</span>
      </Menu.Item>
      <Menu.Item>
        <span>最近半年</span>
      </Menu.Item>
    </Menu>
  );
  const menuid = (
    <Menu>
      <Menu.Item>
        <span>全部</span>
      </Menu.Item>
      <Menu.Item>
        <span>是</span>
      </Menu.Item>
      <Menu.Item>
        <span>否</span>
      </Menu.Item>
    </Menu>
  );
  const dataSource = [{
    key: '1',
    time:'2018/01/01',
    id:'13766762391',
    name: '张可乐',
    worknum: '4',
    testnum: '6',
    istrue: '是',
    operate: ''
  }, {
    key: '2',
    time:'2018/01/01',
    id:'17766762391',
    name: '胡一天',
    worknum: '2',
    testnum: '6',
    istrue: '否',
    operate: ''
  }, {
    key: '3',
    time:'2018/01/01',
    id:'15766762391',
    name: '尹大宝',
    worknum: '3',
    testnum: '3',
    istrue: '是',
    operate: ''
  }, {
    key: '4',
    time:'2018/01/01',
    id:'13766762391',
    name: '张可乐',
    worknum: '4',
    testnum: '6',
    istrue: '是',
    operate: ''
  }, {
    key: '5',
    time:'2018/01/01',
    id:'13766762391',
    name: '张可乐',
    worknum: '4',
    testnum: '6',
    istrue: '是',
    operate: ''
  }];
  
  const columns = [{
    title: '日期',
    dataIndex: 'time',
    key: 'time',
  }, {
    title: '用户ID',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '学生姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '符合要求作品数',
    dataIndex: 'worknum',
    key: 'worknum',
  },  {
    title: '符合要求测试数',
    dataIndex: 'testnum',
    key: 'testnum',
  }, {
    title: '是否满足申领条件',
    dataIndex: 'istrue',
    key: 'istrue',
  }, {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
  }];  

class GiftGrant extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('gift-percent'));
		var	option = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data : ['2018/03/01','2018/03/03','2018/03/06','2018/03/09','2018/03/12','2018/03/15','2018/03/18','2018/03/21','2018/03/24','2018/03/27','2018/03/30']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [20, 32, 22, 16, 29, 23, 32,10,23,18,34],
                type: 'line',
                smooth: true
            }]
		};
		myChart.setOption(option);
	}
  render() {
    return (
      <div>
		<div className="sub-name-gift">小礼物发放统计</div>
        <div className="eduwork-time">时间段：
            <Dropdown overlay={menu}>
                <span className="ant-dropdown-link">
                最近一月 <Icon type="down" />
                </span>
            </Dropdown>
        </div>       
		<div className="chart-container-all">  
            <div className="box-container">
                <div className="lasttime-all">统计时段</div>
                <div className="lastdate-all">2018/03/01 - 2018/03/31</div>
            </div>
            <div className="departline-all"></div>
            <div className="box-container">
                <div className="lasttime-all">最近一月小礼物发放数量</div>
                <div className="lastdate-all">549</div>
            </div>
            <div className="departline-all"></div>
                <div className="box-container">
                <div className="lasttime-all">最近一月满足申领条件用户数</div>
                <div className="lastdate-all">782</div>
            </div>
		</div>
        {/* 奖励小礼物发放统计  */}
        <div className="title-container">
		  <div className="count-name">奖励小礼物发放统计</div>  
          <div className="count-time">时间段：
            <Dropdown overlay={menu}>
                <span className="ant-dropdown-link">
                最近一月 <Icon type="down" />
                </span>
            </Dropdown>
          </div> 
		</div>
        {/* 图表 */}
        <div id="gift-percent" ></div>
        {/* 表格 */}
        <div className="title-container">
            <div>时间：</div>
            <div className="time-picker">
                <RangePicker
                defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
                    format={dateFormat}/>
            </div>
            <div className="title-container-worktype">
                <div>是否满足申领条件：</div>
                <Dropdown overlay={menuid}>
                    <span className="ant-dropdown-link select-collect">
                    全部 <Icon type="down" />
                    </span>
                </Dropdown>
            </div>
        </div>
        <Table dataSource={dataSource} columns={columns} className="table-collect"/>
      </div>
    );
  }
}

export default GiftGrant;
