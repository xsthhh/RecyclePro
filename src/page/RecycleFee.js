import React, { Component } from 'react';
import { Row,Col,Icon,DatePicker } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/RecycleFee.css'
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

class RecycleFee extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('recyclefee-chart'));
		var	option = {
			tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['分类废品','未分类废品']
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
                    name:'分类废品',
                    type:'bar',
                      barWidth : 10,
        
                    data:[10240,7000,8000,13000,9000,11000],
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
                    name:'未分类废品',
                    type:'bar',
                    barWidth : 10,
                    data:[15000,9000,8900,11000,11000,9000],
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
				<div className="sub-name-recyclefee">废品回收支出统计</div>
				{/* 单日支出额 */}
				<div className="title-container">
				  <div className="count-name">单日支出额</div>
					<div className="count-time">日期：2018/03/09</div>
				</div>
				<div className="user-variation-container">
					<div className="user-variation-collect">
						<div className="user-type">未分类废品</div>
						<div className="re-fee">
						  ￥1203.41
              <Icon type="arrow-up" className="alter-percent-arrow"/>
							<span className="alter-percent">0.9%</span>
					  </div>
					</div>
					<div className="user-variation-collect">
					  <div className="user-type">分类废品</div>
						<div className="re-fee">
						  ￥3213.10
              <Icon type="arrow-up" className="alter-percent-arrow"/>
							<span className="alter-percent">0.3%</span>
					  </div>
					</div>
				</div>
				{/* 分类与未分类回收支出对比 */}
				<div className="title-container">
					<div className="count-name">分类与未分类回收支出对比</div>
					<div className="count-time">时间段：</div>
					<div className="time-picker">
						<RangePicker
							defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
							format={dateFormat}
						/>
					</div>	
				</div>
        <div id="recyclefee-chart" ></div>
      </div>
    );
  }
}

export default RecycleFee;
