import React, { Component } from 'react';
import { Icon,Menu,Dropdown,Table,Tooltip, Progress } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/StuParticipation.css'
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
  const menuid = (
    <Menu>
      <Menu.Item>
        <span>全部</span>
      </Menu.Item>
      <Menu.Item>
        <span>是</span>
      </Menu.Item>
      <Menu.Item>
        <span>否</span>
      </Menu.Item>
    </Menu>
  );  

class StuParticipation extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('stu-participate'));
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
                    type : '',
                    data : ['一年级','二年级','三年级','四年级','五年级','六年级','初一','初二','初三']
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
                    type:'bar',
                    barWidth:10,
                    data:[1263,  1521, 2192, 1709, 2023, 1534,1642,1833,1993],
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
                    type:'bar',
                    barWidth:10,
                    data:[1489,1491,1883,2223,1902,2094,2150,1839,1936],
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
		<div className="sub-name-stu">在校学生参与度统计</div>
        <div className="eduwork-time">时间段：
            <Dropdown overlay={menu}>
                <span className="ant-dropdown-link">
                最近一月 <Icon type="down" />
                </span>
            </Dropdown>
        </div>       
		<div className="chart-container-all">  
            <div className="box-container">
                <div className="lasttime-all">统计时段</div>
                <div className="lastdate-all">2018/03/01 - 2018/03/31</div>
            </div>
            <div className="departline-all"></div>
            <div className="box-container">
                <div className="lasttime-all">男女比例</div>
                <div className="mw-container">
                    <div className="stu-num-man">3005</div>
                    <div className="stu-num-woman">2638</div>
                    <Icon type="man" className="icon-man"/>
                    <Tooltip title="5.4 done / 4.6 in progress / 0 to do" className="per-bar">
                      <Progress percent={100} successPercent={54} showInfo={false} />
                    </Tooltip>
                    <Icon type="woman" className="icon-woman"/>
                </div>
            </div>
            <div className="departline-all"></div>
                <div className="box-container">
                <div className="lasttime-all">在校学生参与人数</div>
                <div className="stu-num">
					5642人
                  <Icon type="arrow-up" className="alter-percent-arrow"/>
				  <span className="alter-percent">0.7%</span>
				</div>
            </div>
		</div>
        {/* 图表 */}
        <div id="stu-participate" ></div>
      </div>
    );
  }
}

export default StuParticipation;
