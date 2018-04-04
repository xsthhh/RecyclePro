import React, { Component } from 'react';
import { Icon,DatePicker } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/AppFocus.css'
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
   
class AppFocus extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
        // 图表1
		var myChartfocus = echarts.init(document.getElementById('app-focus'));
		var	optionfocus = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['用户版APP','回收员版APP','微信公众号']
            },
            toolbox: {
                show : true,
                feature : {
                    magicType : {show: true, type: ['line', 'bar']},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['2018/01/01','2018/01/02','2018/01/03','2018/01/04','2018/01/05','2018/01/06','2018/01/07']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'用户版APP',
                    type:'bar',
                    barWidth : 10,
                    data:[1264,2987,2234,3004,1876,2693,1781],
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
                    name:'回收员版APP',
                    type:'bar',
                     barWidth : 10,
                    data:[764,987,1077,764,899,1034,965],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                },
                {
                    name:'微信公众号',
                    type:'bar',
                    barWidth : 10,
                    data:[2164,3180,3872,2234,3201,3367,3442],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
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
        myChartfocus.setOption(optionfocus);
        // 图表2
        var myChartdownload = echarts.init(document.getElementById('app-download'));
		var	optiondownload = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['官方网站','应用商店','APP Store','豌豆荚','360手机助手','小米应用商店','华为应用市场','应用宝','百度手机助手','其他']
            },
            series: [
                {
                    name:'下载来源',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],
        
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'官方网站', selected:true},
                        {value:1548, name:'应用商店'}
                    ]
                },
                {
                    name:'下载来源',
                    type:'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:335, name:'APP Store'},
                        {value:1048, name:'豌豆荚'},
                        {value:234, name:'360手机助手'},
                        {value:135, name:'小米应用商店'},
                        {value:310, name:'华为应用市场'},
                        {value:251, name:'应用宝'},
                        {value:177, name:'百度手机助手'},
                        {value:122, name:'其他'}
                    ]
                }
            ]
		};
		myChartdownload.setOption(optiondownload);
	}
  render() {
    return (
      <div>
		<div className="sub-name-appfocus">应用关注量统计</div>
        {/* 单日下载（关注）量 */}
		<div className="title-container">
			<div className="count-name">单日下载（关注）量</div>
			<div className="count-time">统计日期：2018/03/09</div>
		</div>	
		<div className="user-variation-container">
			<div className="user-variation">
				<div className="user-type">用户版APP</div>
				<div className="knowledge-per">
					2781次
                  <Icon type="arrow-up" className="alter-percent-arrow"/>
				  <span className="alter-percent">0.3%</span>
				</div>
			</div>
			<div className="user-variation">
				<div className="user-type">回收员版APP</div>
				<div className="knowledge-per">
					965次
                  <Icon type="arrow-down" className="alter-percent-arrow down"/>
				  <span className="alter-percent down">1.4%</span>
				</div>
			</div>
			<div className="user-variation">
				<div className="user-type">微信公众号</div>
				<div className="knowledge-per">
					3442次
                  <Icon type="arrow-up" className="alter-percent-arrow"/>
				  <span className="alter-percent">0.7%</span>
				</div>
			</div>
		</div>
        {/* 单周下载（关注）量  */}
        <div className="title-container">
		  <div className="count-name">单周下载（关注）量</div>
          <div className="count-time">统计时段：</div>
			<div className="time-picker">
				<RangePicker
					defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
					format={dateFormat}/>
		  </div>  
		</div>
        {/* 图表1 */}
        <div id="app-focus" ></div>
        {/* 应用下载来源  */}
        <div className="title-container">
		  <div className="count-name">应用下载来源</div>
          <div className="count-time">统计时段：</div>
			<div className="time-picker">
				<RangePicker
					defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
					format={dateFormat}/>
		  </div>  
		</div>
        {/* 图表2 */}
        <div id="app-download" ></div>
      </div>
    );
  }
}

export default AppFocus;
