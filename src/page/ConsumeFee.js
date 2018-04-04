import React, { Component } from 'react';
import { Row,Col,Icon,DatePicker } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/ConsumeFee.css'
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

class ConsumeFee extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('consumefee-chart'));
		var	option = {
			tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['提现','商店消费']
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
                    data : ['4月','5月','6月','7月','8月','9月']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                }
            ],
            series : [
                {
                    name:'提现',
                    type:'bar',
                      barWidth : 10,
        
                    data:[14000,9000,8900,11000,11000,9000],
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
                    name:'商店消费',
                    type:'bar',
                    barWidth : 10,
                    data:[10240,7000,8000,5000,9000,9100],
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
		myChart.setOption(option);
	}
  render() {
    return (
      <div>
				<div className="sub-name-consumefee">积分消费统计</div>
				{/* 单日消费额 */}
				<div className="title-container">
				  <div className="count-name">单日消费额</div>
					<div className="count-time">日期：2018/03/09</div>
				</div>
				<div className="user-variation-container">
					<div className="user-variation-collect">
						<div className="user-type">积分提现</div>
						<div className="re-fee">
						  ￥1203.41
              <Icon type="arrow-up" className="alter-percent-arrow"/>
							<span className="alter-percent">0.3%</span>
					  </div>
					</div>
					<div className="user-variation-collect">
					  <div className="user-type">商店消费</div>
						<div className="re-fee">
						  ￥3213.10
              <Icon type="arrow-down" className="alter-percent-arrow down"/>
							<span className="alter-percent down">0.9%</span>
					  </div>
					</div>
				</div>
				{/* 分类与未分类回收支出对比 */}
				<div className="title-container">
					<div className="count-name">提现与商店消费额对比</div>
					<div className="count-time">时间段：</div>
					<div className="time-picker">
						<RangePicker
							defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
							format={dateFormat}
						/>
					</div>	
				</div>
        <div id="consumefee-chart" ></div>
      </div>
    );
  }
}

export default ConsumeFee;
