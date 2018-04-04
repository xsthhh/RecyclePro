import React, { Component } from 'react';
import { Row,Col,Icon,DatePicker } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/UserCount.css'
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

class UserCount extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('user-variation-chart'));
		var	option = {
				tooltip: {
						trigger: 'axis'
				},
				legend: {
						data:['普通用户','自由回收员','家长用户']
				},
				toolbox: {
						show: true,
						feature: {
								magicType: {type: ['line', 'bar']},
								saveAsImage: {}
						}
				},
				xAxis:  {
						type: 'category',
						boundaryGap: false,
						data: ['2018/03/01','2018/03/03','2018/03/06','2018/03/09','2018/03/12','2018/03/15','2018/03/18','2018/03/21','2018/03/24','2018/03/27','2018/03/30']
				},
				yAxis: {
						type: 'value',
						axisLabel: {
								formatter: '{value} '
						}
				},
				series: [
						{
								name:'普通用户',
								type:'line',
								data:[3020, 2736, 2677, 1934, 2762, 2455, 2177,2367,2287,2673,2321],
								markPoint: {
										data: [
												{type: 'max', name: '最大值'},
												{type: 'min', name: '最小值'}
										]
								},
								markLine: {
										data: [
												{type: 'average', name: '平均值'}
										]
								}
						},
						{
								name:'自由回收员',
								type:'line',
								data:[670, 562, 832, 654, 643, 501, 587,567,487,773,621],
								markPoint: {
										data: [
												{type: 'max', name: '最大值'},
												{type: 'min', name: '最小值'}
										]
								},
								markLine: {
										data: [
												{type: 'average', name: '平均值'}
										]
								}
						},
						{
								name:'家长用户',
								type:'line',
								data:[1520, 1302, 1432, 934, 1243, 1201, 1287,1167,1287,1273,1221],
								markPoint: {
										data: [
												{type: 'max', name: '最大值'},
												{type: 'min', name: '最小值'}
										]
								},
								markLine: {
										data: [
												{type: 'average', name: '平均值'}
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
				<div className="sub-name">用户量统计</div>
				{/* 用户量统计 */}
				<div className="title-container">
				  <div className="count-name">总用户量</div>
					<div className="count-time">统计时间：2018/03/09</div>
				</div>
				<div className="chart-container">  
					<div className="count-left">
					  <div className="chart-name">用户版APP</div>
						<div className="childchart-container">
						  <div className="legend">
							  <div className="red-part">
								  <div className="red-bar"></div>
									<span>普通用户</span>
								</div>
								<div className="blue-part">
							  	<div className="blue-bar"></div>
									<span>家长用户</span>
								</div>
							</div>
							<div className="mid-chart">
								<div className="num-people">29847</div>
								<img src="img/chart-for-user.png" className="chart-for-user" />
							</div>
							<div className="ratio">
								<div className="rate-for-red">68.1%</div>
								<div className="rate-for-blue">31.9%</div>
							</div>
						</div>
					</div>
					<div className="departline"></div>
					<div className="count-right">
					<div className="chart-name">回收员版APP</div>
						<div className="childchart-container">
						  <div className="legend">
							  <div className="red-part">
								  <div className="red-bar"></div>
									<span>站点回收员</span>
								</div>
								<div className="blue-part">
							  	<div className="blue-bar"></div>
									<span>自由回收员</span>
								</div>
							</div>
							<div className="mid-chart">
								<div className="num-people">16847</div>
								<img src="img/chart-for-collector.png" className="chart-for-user" />
							</div>
							<div className="ratio">
								<div className="rate-for-red">65.2%</div>
								<div className="rate-for-blue">34.8%</div>
							</div>
						</div>
					</div>
				</div>
				{/* 单日用户变化量 */}
				<div className="title-container">
				  <div className="count-name">单日用户变化量</div>
					<div className="count-time">日期：2018/03/09</div>
				</div>
				<div className="user-variation-container">
					<div className="user-variation">
						<div className="user-type">普通用户</div>
						<div className="user-num">
						  <Icon type="arrow-up" />336
							<span className="peo-num">人</span>
					  </div>
					</div>
					<div className="user-variation">
					  <div className="user-type">家长用户</div>
						<div className="user-num">
						  <Icon type="arrow-up" />543
							<span className="peo-num">人</span>
					  </div>
					</div>
					<div className="user-variation">
						<div className="user-type">自由回收员</div>
						<div className="user-num-down">
						  <Icon type="arrow-down" />1
							<span className="peo-num">人</span>
					  </div>
					</div>
				</div>
				{/* 单月用户变化量 */}
				<div className="title-container">
					<div className="count-name">单月用户变化量</div>
					<div className="count-time">统计时段：</div>
					<div className="time-picker">
						<RangePicker
							defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
							format={dateFormat}
						/>
					</div>	
				</div>
        <div id="user-variation-chart" ></div>
      </div>
    );
  }
}

export default UserCount;
