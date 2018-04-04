import React, { Component } from 'react';
import { Icon,DatePicker } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/WorkShare.css'
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
   
class WorkShare extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
        // 图表1
		var myChartnum = echarts.init(document.getElementById('workshare-num'));
		var	optionnum = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['环保知识篇','废品改造篇']
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
                    name:'环保知识篇',
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
                    name:'废品改造篇',
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
                }
            ]
		};
        myChartnum.setOption(optionnum);
        // 图表2
        var myChartway = echarts.init(document.getElementById('workshare-way'));
		var	optionway = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['微信好友','朋友圈','QQ好友','QQ空间','微博']
            },
            series: [
                {
                    name:'作品分享去向',
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
                        {value:335, name:'微信好友'},
                        {value:1048, name:'朋友圈'},
                        {value:310, name:'QQ好友'},
                        {value:135, name:'QQ空间'},
                        {value:234, name:'微博'}
                    ]
                }
            ]
		};
		myChartway.setOption(optionway);
	}
  render() {
    return (
      <div>
		<div className="sub-name-appfocus">作品分享量统计</div>
        {/* 单日分享量 */}
		<div className="title-container">
			<div className="count-name">单日分享量</div>
			<div className="count-time">统计日期：2018/03/09</div>
		</div>	
		<div className="user-variation-container">
			<div className="user-variation-collect">
				<div className="user-type">环保知识篇</div>
				<div className="num-percent">
				8872
                    <Icon type="arrow-up" className="alter-percent-arrow"/>
                    <span className="alter-percent">2.3%</span>
		        </div>
			</div>
			<div className="user-variation-collect">
				<div className="user-type">废品改造篇</div>
				<div className="num-percent-free">
				877
                    <Icon type="arrow-down" className="alter-percent-arrow down"/>
                    <span className="alter-percent down">1.4%</span>
				</div>
			</div>
		</div>
        {/* 单周分享量  */}
        <div className="title-container">
		  <div className="count-name">单周分享量</div>
          <div className="count-time">统计时段：</div>
			<div className="time-picker">
				<RangePicker
					defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
					format={dateFormat}/>
		  </div>  
		</div>
        {/* 图表1 */}
        <div id="workshare-num" ></div>
        {/* 作品分享去向 */}
        <div className="title-container">
		  <div className="count-name">作品分享去向</div>
          <div className="count-time">统计时段：</div>
			<div className="time-picker">
				<RangePicker
					defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
					format={dateFormat}/>
		  </div>  
		</div>
        {/* 图表2 */}
        <div id="workshare-way" ></div>
      </div>
    );
  }
}

export default WorkShare;
