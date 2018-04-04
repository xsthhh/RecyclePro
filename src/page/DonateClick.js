import React, { Component } from 'react';
import { Icon,DatePicker } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/DonateClick.css'
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
   
class DonateClick extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
        // 图表
		var myChart = echarts.init(document.getElementById('donate-click'));
		var	option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['点击量']
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
                    type : '',
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
                    name:'点击量',
                    type:'bar',
                    barWidth:10,
                    data:[263,  921, 292, 709, 223, 534,642],
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
		<div className="sub-name-donateclick">捐赠通道点击量统计</div>
        {/* 单日点击量 */}
		<div className="title-container">
			<div className="count-name">单日点击量</div>
			<div className="count-time">统计日期：2018/03/09</div>
            <div className="count-name donateclick-daily">日均点击量</div>
		</div>	
		<div className="user-variation-container">
			<div className="user-variation-collect">
				<div className="user-type">爱心捐赠通道</div>
				<div className="num-percent">
				872
                    <Icon type="arrow-up" className="alter-percent-arrow"/>
                    <span className="alter-percent">2.3%</span>
		        </div>
			</div>
			<div className="user-variation-collect">
				<div className="user-type">爱心捐赠通道</div>
				<div className="num-percent-free">
				758
                    <Icon type="arrow-up" className="alter-percent-arrow"/>
                    <span className="alter-percent">1.4%</span>
				</div>
			</div>
		</div>
        {/* 单周点击量  */}
        <div className="title-container">
		  <div className="count-name">单周点击量</div>
          <div className="count-time">统计时段：</div>
			<div className="time-picker">
				<RangePicker
					defaultValue={[moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)]}
					format={dateFormat}/>
		  </div>  
		</div>
        {/* 图表 */}
        <div id="donate-click" ></div>
      </div>
    );
  }
}

export default DonateClick;
