import React, { Component } from 'react';
import { Icon,DatePicker } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/UserCombine.css'
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

class UserCombine extends Component {
  constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('user-age-chart'));
		var	option = {
      tooltip : {
        trigger: 'axis'
      },
      legend: {
          data:['男性','女性']
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
              data : ['18-20','21-30','31-40','41-50','51-60','61-70','71-80','81以上']
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name:'男性',
              barWidth:15,
              type:'bar',
              data:[88, 728,2234, 2309, 2011,2210, 1135, 33],
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
              name:'女性',
              barWidth:15,
              type:'bar',
              data:[121, 498, 2372, 2232, 2402,2246, 2375, 39],
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
          }
      ]
		};
    myChart.setOption(option);
    //学生年级组成表
    var myChartforstubar = echarts.init(document.getElementById('student-barchart')); 
    var myChartforstuflo = echarts.init(document.getElementById('student-flowerchart')); 
    var optionforstubar={
      tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
      },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'value',
          boundaryGap: [0, 0.05]
      },
      yAxis: {
          type: 'category',
          data: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三']
      },
      series: [
          {
              name: '2011年',
              barWidth: 20,
              type: 'bar',
              itemStyle:{
                  normal:{
                      color:'#2f4554'
                      }
              },
              data: [3120, 4200, 3150, 3780, 4870, 3110, 2904, 2200, 1876 ]
          }
      ]
    };
    myChartforstubar.setOption(optionforstubar);
    var optionforstuflo={
      title : {
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series : [
        
        {
            name:'学生人数',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            label: {
                normal: {
                    formatter: '{bg|}  {b|{b}}  {per|{d}%}  ',
                    backgroundColor: '#fff',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        hr: {
                            borderColor: '#fff',
                            width: '100%',
                            borderWidth: 0,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#fff',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            roseType : 'area',
            data:[  
                {value:3120, name:'一年级'},
                {value:4200,  name:'二年级'},
                {value:3150, name:'三年级'},
                {value:3780, name:'四年级'},
                {value:4870, name:'五年级'},
                {value:3110,  name:'六年级'},
                {value:2904, name:'初一'},
                {value:2200, name:'初二'},
                {value:1876, name:'初三'}
            ],
        }
    ]
    };
    myChartforstuflo.setOption(optionforstuflo);
	}
  render() {
    return (
      <div>
        <div className="sub-name-com">用户组成统计</div>
				{/* 用户性别组成 */}
				<div className="title-container">
				  <div className="count-name">用户性别组成</div>
				</div>
         <div className="chart-container-com">  
					<div className="count-left-com">
					  <div className="lasttime-com">上一次统计截止时间：</div>
            <div className="lastdate-com">2018/03/31 12:50:39</div>
					</div>
					<div className="departline"></div>
					<div className="count-right">
						<div className="childchart-container cc-com">
						  <div className="legend">
							  <div className="red-part">
								  <div className="red-bar"></div>
									<span>男</span>
								</div>
								<div className="blue-part">
							  	<div className="blue-bar"></div>
									<span>女</span>
								</div>
							</div>
							<div className="mid-chart-com">
								<img src="img/chart-for-sex.png" className="chart-for-sex" />
							</div>
							<div className="ratio">
								<div className="rate-for-red">52.4%</div>
								<div className="rate-for-blue">47.6%</div>
							</div>
						</div>
					</div>
				</div>
        {/* 用户年龄组成 */}
				<div className="title-container">
					<div className="count-name">用户年龄组成</div>
					<div className="count-time">统计时段：</div>
					<div className="time-picker">
						<RangePicker
							defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
							format={dateFormat}
						/>
					</div>	
				</div>
        {/* 年龄组成图表 */}
        <div id="user-age-chart" ></div>
        {/* （家长用户）学生年级组成 */}
				<div className="title-container">
					<div className="count-name">（家长用户）学生年级组成</div>
					<div className="count-time">统计时间：2018/03/09</div>
				</div>
        {/* 学生年级组成图表1 */}
        <div className="student-chart">
          <div id="student-barchart" ></div>
          <div id="student-flowerchart" ></div>
        </div>
      </div>
    );
  }
}

export default UserCombine;
