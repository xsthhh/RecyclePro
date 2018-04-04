import React, { Component } from 'react';
import { Row,Col,Icon,Menu,Dropdown,Table } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/Knowledge.css'
const menu = (
    <Menu>
      <Menu.Item>
        <span>小学1-2年级</span>
      </Menu.Item>
      <Menu.Item>
        <span>小学3-6年级</span>
      </Menu.Item>
      <Menu.Item>
        <span>初中</span>
      </Menu.Item>
    </Menu>
  );
  const menuid = (
    <Menu>
      <Menu.Item>
        <span>全部</span>
      </Menu.Item>
      <Menu.Item>
        <span>认识垃圾类</span>
      </Menu.Item>
      <Menu.Item>
        <span>认识自然类</span>
      </Menu.Item>
      <Menu.Item>
        <span>认识灾害类</span>
      </Menu.Item>
      <Menu.Item>
        <span>认识地球类</span>
      </Menu.Item>
      <Menu.Item>
        <span>认识污染类</span>
      </Menu.Item>
    </Menu>
  );
  const dataSource = [{
    key: '1',
    no:'1',
    name: '《垃圾分类知多少》',
    type: '认识垃圾类',
    time: '2017/07/09',
    num: '934',
    passper: '98%',
    operate: ''
  }, {
    key: '2',
    no:'2',
    name: '《和爸爸妈妈一起种棵树》',
    type: '认识自然类',
    time: '2017/07/09',
    num: '1342',
    passper: '78%',
    operate: ''
  },{
    key: '3',
    no:'3',
    name: '《地球母亲》',
    type: '认识地球类',
    time: '2017/07/09',
    num: '123',
    passper: '86%',
    operate: ''
  }, {
    key: '4',
    no:'4',
    name: '《垃圾分类知多少》',
    type: '认识垃圾类',
    time: '2017/07/09',
    num: '934',
    passper: '98%',
    operate: ''
  }, {
    key: '5',
    no:'5',
    name: '《垃圾分类知多少》',
    type: '认识垃圾类',
    time: '2017/07/09',
    num: '934',
    passper: '98%',
    operate: ''
  }];
  
  const columns = [{
    title: '序号',
    dataIndex: 'no',
    key: 'no',
  }, {
    title: '测试名称',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '测试类型',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: '发布时间',
    dataIndex: 'time',
    key: 'time',
  }, {
    title: '参与人数',
    dataIndex: 'num',
    key: 'num',
  }, {
    title: '通过率',
    dataIndex: 'passper',
    key: 'passper',
  }, {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
  }];  

class Knowledge extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('test-participation'));
		var	option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['认识垃圾类','认识自然类','认识灾害类','认识地球类','认识污染类']
            },
            series: [
                {
                    name:'认识自然类',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'认识自然类'},
                        {value:310, name:'认识污染类'},
                        {value:234, name:'认识地球类'},
                        {value:135, name:'认识灾害类'},
                        {value:1548, name:'认识垃圾类'}
                    ]
                }
            ]	
		};
		myChart.setOption(option);
	}
  render() {
    return (
      <div>
		<div className="sub-name-knowledge">知识测试统计</div>
        {/* 测试通过率 */}
		<div className="title-container">
			<div className="count-name">测试通过率</div>
			<div className="count-time">统计日期：2018/03/09</div>
		</div>	
		<div className="user-variation-container">
			<div className="user-variation">
				<div className="user-type">小学1-2年级</div>
				<div className="knowledge-per">
					81.9%
                  <Icon type="arrow-up" className="alter-percent-arrow"/>
				  <span className="alter-percent">0.3%</span>
				</div>
			</div>
			<div className="user-variation">
				<div className="user-type">小学3-6年级</div>
				<div className="knowledge-per">
					92.5%
                  <Icon type="arrow-down" className="alter-percent-arrow down"/>
				  <span className="alter-percent down">1.4%</span>
				</div>
			</div>
			<div className="user-variation">
				<div className="user-type">初中</div>
				<div className="knowledge-per">
					87.3%
                  <Icon type="arrow-up" className="alter-percent-arrow"/>
				  <span className="alter-percent">0.7%</span>
				</div>
			</div>
		</div>
        {/* 各类型知识测试参与度统计  */}
        <div className="title-container">
		  <div className="count-name">各类型知识测试参与度统计</div>
          <div className="count-time">年级：</div>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link">
               小学1-2年级 <Icon type="down" />
            </span>
          </Dropdown>
		</div>
        {/* 图表 */}
        <div id="test-participation" ></div>
        {/* 表格 */}
        <div className="title-container">
          <div >测试类型：</div>
          <Dropdown overlay={menuid}>
            <span className="ant-dropdown-link select-collect">
               全部 <Icon type="down" />
            </span>
          </Dropdown>
        </div>
        <Table dataSource={dataSource} columns={columns} className="table-collect"/>
      </div>
    );
  }
}

export default Knowledge;
