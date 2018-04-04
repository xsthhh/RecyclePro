import React, { Component } from 'react';
import { Row,Col,Icon,DatePicker,Menu,Dropdown } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/AllRecycle.css'
const menu = (
    <Menu>
      <Menu.Item>
        <span>最近一周</span>
      </Menu.Item>
      <Menu.Item>
        <span>最近一月</span>
      </Menu.Item>
      <Menu.Item>
        <span>最近六月</span>
      </Menu.Item>
    </Menu>
  );

class AllRecycle extends Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart = echarts.init(document.getElementById('unsort-weight-chart'));
		var	option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['未分类废品回收重量（KG）']
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['2018/03/01','2018/03/06','2018/03/12','2018/03/18','2018/03/24','2018/03/31']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} KG'
                }
            },
            series: [
                {
                    name:'未分类废品回收重量（KG）',
                    type:'line',
                    data:[82371, 71762, 88134, 72362, 59230, 67352],
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
    var myChartsort = echarts.init(document.getElementById('sort-weight-chart'));
    var optionsort = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
          data:['废纸', '废塑料','废旧电池','废金属','废纺织品','废旧电视机','废旧电脑','废旧手机','废旧冰箱','废旧空调','废旧洗衣机','废旧家具']
      },
      calculable : true,
      xAxis : [
          {
              type : 'value'
          }
      ],
      yAxis : [
          {
              type : 'category',
              data : ['2018/03/01','2018/03/02','2018/03/03','2018/03/04','2018/03/05','2018/03/06','2018/03/07']
          }
      ],
      series : [
          {
              name:'废纸',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[620, 582, 691, 434, 690, 730, 410]
          
          },
          {
              name:'废塑料',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[420, 532, 701, 734, 430, 530, 510]
          },
          {
              name:'废旧电池',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[450, 562, 671, 564, 540, 430, 540]
          },
          {
              name:'废金属',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[650, 572, 461, 384, 480, 570, 460]
          },
          {
              name:'废纺织品',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[460, 392, 581, 544, 570, 640, 620]
          },
        {
              name:'废旧电视机',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[670, 432, 641, 654, 560, 670, 570]
          },
        {
              name:'废旧电脑',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[460, 352, 531, 484, 620, 490, 620]
          },
        {
              name:'废旧手机',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[620, 482, 421, 714, 630, 570, 420]
          },
        {
              name:'废旧冰箱',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[380, 472, 581, 494, 640, 730, 700]
          },
        {
              name:'废旧空调',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[561 ,732, 467, 452, 672, 460, 420]
          },
        {
              name:'废旧洗衣机',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[630, 457, 573, 582, 555, 447, 648]
          },
        {
              name:'废旧家具',
              type:'bar',
              stack: '总量',
              itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
              data:[438, 564, 782, 640, 589, 657, 749]
          },
      ]
    };
    myChartsort.setOption(optionsort);
	}
  render() {
    return (
      <div>
				<div className="sub-name-all">总废品回收统计</div>
				{/* 未分类废品统计 */}
				<div className="title-container">
				  <div className="count-name">未分类废品统计</div>
				  <div className="count-time">时间段：</div>
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
                    <div className="lasttime-all">分类废品总重量</div>
                    <div className="lastdate-all">2110.17T</div>
                  </div>
                  <div className="departline-all"></div>
                  <div className="box-container">
                    <div className="lasttime-all">日均未分类废品重量</div>
                    <div className="lastdate-all">70339KG</div>
                  </div>
				</div>
                <div id="unsort-weight-chart" ></div>
				{/* 分类废品统计 */}
				<div className="title-container">
				  <div className="count-name">分类废品统计</div>
				  <div className="count-time">时间段：</div>
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
                    <div className="lasttime-all">分类废品总重量</div>
                    <div className="lastdate-all">327.91T</div>
                  </div>
                  <div className="departline-all"></div>
                  <div className="box-container">
                    <div className="lasttime-all">回收重量最大废品</div>
                    <div className="lastdate-all">废纸</div>
                  </div>
				</div>
        <div id="sort-weight-chart" ></div>        
      </div>
    );
  }
}

export default AllRecycle;
