import React, { Component } from 'react';
import { Icon,Menu,Dropdown,Table,DatePicker } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/EduWork.css'
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
        <span>环保作文</span>
      </Menu.Item>
      <Menu.Item>
        <span>环保漫画</span>
      </Menu.Item>
      <Menu.Item>
        <span>环保手抄报</span>
      </Menu.Item>
      <Menu.Item>
        <span>环保电影</span>
      </Menu.Item>
      <Menu.Item>
        <span>环保知识课堂</span>
      </Menu.Item>
      <Menu.Item>
        <span>环保演讲稿</span>
      </Menu.Item>
    </Menu>
  );
  const dataSource = [{
    key: '1',
    time:'2018/01/01',
    id:'13766762391',
    type: '环保作文',
    name: '《我和爸爸妈妈一起种的一棵小树》',
    num: '9345',
    content: '查看详情',
    operate: ''
  }, {
    key: '2',
    time:'2018/01/01',
    id:'17766762391',
    type: '环保漫画',
    name: '《假如没有干净的水》',
    num: '1245',
    content: '查看详情',
    operate: ''
  }, {
    key: '3',
    time:'2018/01/02',
    id:'18766762391',
    type: '环保手抄报',
    name: '《我们的地球母亲》',
    num: '945',
    content: '查看详情',
    operate: ''
  }, {
    key: '4',
    time:'2018/01/01',
    id:'13766762391',
    type: '环保作文',
    name: '《我和爸爸妈妈一起种的一棵小树》',
    num: '9345',
    content: '查看详情',
    operate: ''
  }, {
    key: '5',
    time:'2018/01/01',
    id:'13766762391',
    type: '环保作文',
    name: '《我和爸爸妈妈一起种的一棵小树》',
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

class EduWork extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('work-percent'));
		var	option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data:['环保电影','环保漫画','环保知识课堂','环保演讲稿','环保手抄报','环保作文']
            },
            calculable : true,
            series : [
                
                {
                    name:'作品类型',
                    type:'pie',
                    radius : [30, 110],
                    center : ['50%', '50%'],
                    roseType : 'area',
                    data:[
                        {value:100, name:'环保电影'},
                        {value:135, name:'环保手抄报'},
                        {value:123, name:'环保漫画'},
                        {value:117, name:'环保知识课堂'},
                        {value:201, name:'环保演讲稿'},
                        {value:143, name:'环保作文'}
                        
                    ]
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
        {/* 上传环保作品类别占比统计  */}
        <div className="title-container">
		  <div className="count-name">上传环保作品类别占比统计</div>  
          <Icon type="trophy" className="work-top" />
          <div className="bar"></div>环保作文
		</div>
        {/* 图表 */}
        <div id="work-percent" ></div>
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

export default EduWork;
