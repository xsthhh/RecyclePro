import React, { Component } from 'react';
import { Row,Col,Icon,Menu,Dropdown } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/StationRecycle.css'
const menu = (
    <Menu>
      <Menu.Item>
        <span>最近一周</span>
      </Menu.Item>
      <Menu.Item>
        <span>最近一月</span>
      </Menu.Item>
      <Menu.Item>
        <span>最近六月</span>
      </Menu.Item>
    </Menu>
);
const menucity = (
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

class StationRecycle extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('unsort-sort-chart'));
		var	option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['未分类废品','分类废品']
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['上城区','下城区','江干区','拱墅区','西湖区','滨江区','萧山区','余杭区']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'未分类废品',
                    type:'bar',
                    barWidth:10,
                    data:[900,1000,1300,990,600,400,600,900],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'分类废品',
                    type:'bar',
                    barWidth:10,
                    data:[1200,1000,900,1000,800,1200,1000,1100],
                    markPoint : {
                        data : [
                            {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                            {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
		};
		myChart.setOption(option);
	}
  render() {
    return (
      <div>
				<div className="sub-name-station">站点废品回收统计</div>
				{/* 站点分类与未分类废品变化量 */}
				<div className="title-container">
				  <div className="count-name">站点分类与未分类废品变化量</div>
				  <div className="count-time">时间段：</div>
                  <Dropdown overlay={menu}>
                    <span className="ant-dropdown-link">
                    最近半年 <Icon type="down" />
                    </span>
                  </Dropdown>
                  <div className="count-time">城市：</div>
                  <Dropdown overlay={menucity}>
                    <span className="ant-dropdown-link">
                    杭州 <Icon type="down" />
                    </span>
                  </Dropdown>
				</div>
				<div className="chart-container-all">  
                  <div className="box-container">
                    <div className="lasttime-all">统计时段</div>
                    <div className="lastdate-all">2011/11/01 - 2018/03/31</div>
                  </div>
                  <div className="departline-all"></div>
                  <div className="box-container">
                    <div className="lasttime-all">统计城市</div>
                    <div className="lastdate-all">杭州</div>
                  </div>
                  <div className="departline-all"></div>
                  <div className="box-container">
                    <div className="lasttime-all">废品总量</div>
                    <div className="lastdate-all">17157.8KG</div>
                  </div>
				</div>
                <div id="unsort-sort-chart" ></div>
      </div>
    );
  }
}

export default StationRecycle;
