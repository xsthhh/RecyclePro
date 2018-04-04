import React, { Component } from 'react';
import { Icon,Menu,Dropdown } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/FeedbackSta.css'
const menu = (
    <Menu>
      <Menu.Item>
        <span>最近一月</span>
      </Menu.Item>
      <Menu.Item>
        <span>最近一周</span>
      </Menu.Item>
      <Menu.Item>
        <span>最近半年</span>
      </Menu.Item>
    </Menu>
  );

class FeedbackSta extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('feedback-sta'));
		var	option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['反馈数量']
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
                    name:'反馈数量',
                    type:'bar',
                    barWidth:10,
                    data:[23,  21, 22, 29, 23, 34,62],
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
		<div className="sub-name-checkorder">反馈统计</div>
        <div className="eduwork-time">时间段：
            <Dropdown overlay={menu}>
                <span className="ant-dropdown-link">
                最近一周 <Icon type="down" />
                </span>
            </Dropdown>
        </div>       
		<div className="chart-container-all">  
            <div className="box-container">
                <div className="lasttime-all">统计时段</div>
                <div className="lastdate-all">2018/03/01 - 2018/03/07</div>
            </div>
            <div className="departline-all"></div>
            <div className="box-container">
                <div className="lasttime-all">最近一周用户反馈数量</div>
                <div className="lastdate-all">201</div>
            </div>
            <div className="departline-all"></div>
                <div className="box-container">
                <div className="lasttime-all">日均用户反馈数量</div>
                <div className="lastdate-all">28.7</div>
            </div>
		</div>
        {/* 图表 */}
        <div id="feedback-sta" ></div>
        
      </div>
    );
  }
}

export default FeedbackSta;
