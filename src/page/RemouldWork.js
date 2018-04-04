import React, { Component } from 'react';
import { Icon,Menu,Dropdown,Table,DatePicker } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/RemouldWork.css'
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
        <span>旧衣物改造</span>
      </Menu.Item>
      <Menu.Item>
        <span>旧家具改造</span>
      </Menu.Item>
      <Menu.Item>
        <span>旧鞋子改造</span>
      </Menu.Item>
      <Menu.Item>
        <span>旧金属改造</span>
      </Menu.Item>
      <Menu.Item>
        <span>其他废品改造</span>
      </Menu.Item>
    </Menu>
  );
  const dataSource = [{
    key: '1',
    time:'2018/01/01',
    id:'13766762391',
    type: '旧衣物改造',
    name: '《如何二次利用不要穿的旧衣物》',
    num: '9345',
    content: '查看详情',
    operate: ''
  }, {
    key: '2',
    time:'2018/01/01',
    id:'17766762391',
    type: '旧家具改造',
    name: '《关于旧家具——你所不知道的事》',
    num: '1245',
    content: '查看详情',
    operate: ''
  }, {
    key: '3',
    time:'2018/01/02',
    id:'18766762391',
    type: '旧鞋子改造',
    name: '《用旧鞋子种花》',
    num: '945',
    content: '查看详情',
    operate: ''
  }, {
    key: '4',
    time:'2018/01/01',
    id:'13766762391',
    type: '旧衣物改造',
    name: '《那些年你抛弃的T恤衫》',
    num: '9345',
    content: '查看详情',
    operate: ''
  }, {
    key: '5',
    time:'2018/01/01',
    id:'13766762391',
    type: '旧鞋子改造',
    name: '《家里的小船》',
    num: '9345',
    content: '查看详情',
    operate: ''
  }];
  
  const columns = [{
    title: '作品上传时间',
    dataIndex: 'time',
    key: 'time',
  }, {
    title: '作者ID',
    dataIndex: 'id',
    key: 'id',
    width: 150
  }, {
    title: '作品类别',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: '作品标题',
    dataIndex: 'name',
    key: 'name',
    width: 200
  }, {
    title: '作品浏览量',
    dataIndex: 'num',
    key: 'num',
  }, {
    title: '作品详情',
    dataIndex: 'content',
    key: 'content',
  }, {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
  }];  

class RemouldWork extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('remould-per'));
		var	option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['旧衣物改造', '旧家具改造','旧鞋子改造','旧金属改造','其他废品改造'],
                orient: 'vertical',
                width:150,
                right:50,
                top:50
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis:  {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['一月','二月','三月','四月','五月','六月']
            },
            series: [
                {
                    name: '旧衣物改造',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 35,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [320, 302, 301, 400, 390, 330]
                },
                {
                    name: '旧鞋子改造',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 35,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [120, 132, 101, 300, 90, 230]
                },
                {
                    name: '旧金属改造',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 35,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330]
                },
                {
                    name: '旧家具改造',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 35,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [150, 212, 201, 154, 190, 330]
                },
                {
                    name: '其他废品改造',
                    type: 'bar',
                    stack: '总量',
                    barWidth: 35,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [1600, 832, 901, 832, 600, 500]
                }
            ]
		};
		myChart.setOption(option);
	}
  render() {
    return (
      <div>
		<div className="sub-name-knowledge">作品上传统计</div>
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
                <div className="lasttime-all">最近一月上传作品数量</div>
                <div className="lastdate-all">6549</div>
            </div>
            <div className="departline-all"></div>
                <div className="box-container">
                <div className="lasttime-all">日均上传作品数量</div>
                <div className="lastdate-all">218</div>
            </div>
		</div>
        {/* 废品改造作品上传类别占比统计 */}
        <div className="title-container">
		  <div className="count-name">废品改造作品上传类别占比统计</div>  
          <Icon type="trophy" className="work-top" />
          <div className="bar remould"></div>旧衣物改造
		</div>
        {/* 图表 */}
        <div id="remould-per" ></div>
        {/* 表格 */}
        <div className="title-container">
            <div>时间：</div>
            <div className="time-picker">
                <RangePicker
                defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
                    format={dateFormat}/>
            </div>
            <div className="title-container-worktype">
                <div>作品类型：</div>
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

export default RemouldWork;
