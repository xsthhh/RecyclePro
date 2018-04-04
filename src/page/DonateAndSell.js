import React, { Component } from 'react';
import { Row,Col,Icon,Input,Table,DatePicker } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/DonateAndSell.css'
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

class DonateAndSell extends Component {
    constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('donate-vs-sell'));
		var	option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['捐赠意向作品量','出售意向作品量']
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
                    data : ['1月','2月','3月','4月','5月','6月']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'捐赠意向作品量',
                    type:'line',
                    data:[30,100,60,130,120,100],
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
                    name:'出售意向作品量',
                    type:'line',
                    data:[120,100,90,100,80,140],
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
	}
  render() {
    return (
      <div>
        <div className="sub-name-das">作品捐赠和出售意向统计</div>
        {/* 单日作品量 */}
		<div className="title-container">
		  <div className="count-name-collect">单日作品量</div> 
          <div className="count-time">统计时间：2018/03/09</div>
		</div>
        <div className="user-variation-container">
			<div className="user-variation-collect">
				<div className="user-type">具有捐赠意向作品量</div>
				<div className="num-percent">
				72
                    <Icon type="arrow-up" className="alter-percent-arrow"/>
                    <span className="alter-percent">0.3%</span>
		        </div>
			</div>
			<div className="user-variation-collect">
				<div className="user-type">具有出售意向作品量</div>
				<div className="num-percent-free">
				47
                    <Icon type="arrow-down" className="alter-percent-arrow down"/>
                    <span className="alter-percent down">1.4%</span>
				</div>
			</div>
		</div>
        {/* 半年作品量 */}
		<div className="title-container">
		  <div className="count-name-collect">半年作品量</div> 
          <div className="count-time">统计时段：</div>
			<div className="time-picker">
				<RangePicker
				  defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
					format={dateFormat}/>
			</div>
		</div>
        <div className="user-variation-container">
			<div className="user-variation-collect">
				<div className="user-type">具有捐赠意向作品量</div>
				<div className="num-percent">
				872
                    <Icon type="arrow-up" className="alter-percent-arrow"/>
                    <span className="alter-percent">1.3%</span>
		        </div>
			</div>
			<div className="user-variation-collect">
				<div className="user-type">具有出售意向作品量</div>
				<div className="num-percent-free">
				477
                    <Icon type="arrow-down" className="alter-percent-arrow down"/>
                    <span className="alter-percent down">0.9%</span>
				</div>
			</div>
		</div>
        {/* 捐赠与出售意向作品量对比 */}
		<div className="title-container">
		  <div className="count-name-collect">捐赠与出售意向作品量对比</div> 
          <div className="count-time">统计时段：</div>
			<div className="time-picker">
				<RangePicker
				  defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
					format={dateFormat}/>
			</div>
		</div>
        {/* 图表 */}
        <div id="donate-vs-sell" ></div>
      </div>
    );
  }
}

export default DonateAndSell;
