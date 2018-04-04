import React, { Component } from 'react';
import { Table,Row,Col,Icon,Menu,Dropdown } from 'antd'
import moment from 'moment';
import echarts from 'echarts'
import './css/OrderSort.css'
const menu = (
  <Menu>
    <Menu.Item>
      <span>最近一周</span>
    </Menu.Item>
    <Menu.Item>
      <span>最近一月</span>
    </Menu.Item>
    <Menu.Item>
      <span>最近半年</span>
    </Menu.Item>
  </Menu>
);
const dataSource = [{
    key: '1',
    no: '1',
    time: '14:00-16:00'
  }, {
    key: '2',
    no: '2',
    time: '18:00-20:00'
  }, {
    key: '3',
    no: '3',
    time: '06:00-08:00'
  }];
  const dataSourceweek = [{
    key: '1',
    no: '1',
    time: '周六'
  }, {
    key: '2',
    no: '2',
    time: '周日'
  }, {
    key: '3',
    no: '3',
    time: '周一'
  }];
const columns = [{
    title: '排名(TOP3)',
    dataIndex: 'no',
    key: 'no',
    width: 100
  }, {
    title: '时间段',
    dataIndex: 'time',
    key: 'time',
    width: 150
  }];

class OrderSort extends Component {
    constructor(props){
		super(props)
	}
	componentDidMount(){
        // 按区域
	  var Chartforarea = echarts.init(document.getElementById('Chartforarea'));
	  var optionarea = {
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
                data : ['上城区','下城区','西湖区','拱墅区','江干区','余杭区','滨江区','萧山区','临安区','富阳区']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'分类废品',
                type:'bar',
                barWidth:10,
                data:[11111,9899,7863,10000,5679,14000,11500,8888,12000,7000],
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
                barWidth:10,
                data:[13111,11099,14063,6700,11679,10000,12500,10308,10000,11000],
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
      Chartforarea.setOption(optionarea);
       //单日时间段
      var Chartday = echarts.init(document.getElementById('Chartday'));
      var optionday = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'时间段',
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
            },
            {
                name:'',
                type:'pie',
                radius: ['35%', '45%'],
                label: {
                    normal: {
                        formatter: '{hr|}\n  {b|{b}}  {per|{d}%}  ',
                        backgroundColor: 'white',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 22,
                                align: 'bottom'
                            },
                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0,
                                height: 0
                            },
                            b: {
                                fontSize: 19,
                                lineHeight: 30
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 4
                            }
                        }
                    }
                },
                data:[
                    {value:335, name:'06:00-08:00'},
                    {value:310, name:'08:00-10:00'},
                    {value:234, name:'10:00-12:00'},
                    {value:135, name:'12:00-14:00'},
                    {value:1048, name:'14:00-16:00'},
                    {value:251, name:'16:00-18:00'},
                    {value:387, name:'18:00-20:00'},
                    {value:182, name:'20:00-22:00'}
                ]
            }
        ]
      };
      Chartday.setOption(optionday);
       //单周
      var Chartweek = echarts.init(document.getElementById('Chartweek'));
      var optionweek = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'星期',
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
            },
            {
                name:'',
                type:'pie',
                radius: ['35%', '45%'],
                label: {
                    normal: {
                        formatter: '{hr|}\n  {b|{b}}  {per|{d}%}  ',
                        backgroundColor: 'white',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 22,
                                align: 'bottom'
                            },
                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0,
                                height: 0
                            },
                            b: {
                                fontSize: 19,
                                lineHeight: 30
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 4
                            }
                        }
                    }
                },
                data:[
                    {value:1135, name:'周一'},
                    {value:910, name:'周二'},
                    {value:534, name:'周三'},
                    {value:735, name:'周四'},
                    {value:848,name:'周五'},
                    {value:1551, name:'周六'},
                    {value:1287, name:'周日'}
                ]
            }
        ]
      };
      Chartweek.setOption(optionweek);
      //订单变化量
      var Chartsort = echarts.init(document.getElementById('Chartsort'));
      var optionsort = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['未分类废品','分类废品']
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
                name:'未分类废品',
                type:'line',
                data:[900,1000,1300,990,600,400],
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
                name:'分类废品',
                type:'line',
                data:[1200,1000,900,1000,800,1200],
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
      Chartsort.setOption(optionsort);
    }
  render() {
    return (
      <div>
        <div className="sub-name-ordersort">订单分类统计</div>
        {/* 按订单区域统计 */}
        <div className="title-container">
          <Icon type="pushpin-o" />
          <div className="collector-name">按订单区域统计</div>
          <div className="count-time">时间段：</div>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link">
            最近一月 <Icon type="down" />
            </span>
          </Dropdown>
          <Icon type="trophy" className="isort" />余杭区（分类）
          <Icon type="trophy" className="iunsort"/>西湖区（未分类）
        </div>
        <div id="Chartforarea" ></div>
        {/* 按订单预约时间统计 */}
        <div className="title-container">
          <Icon type="pushpin-o" />
          <div className="collector-name">按订单预约时间统计</div>
        </div>
        <div className="title-container">
          <div className="count-name">单日各时间段预约统计</div>
          <div className="count-time">时间段：</div>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link select-collect">
            最近一月<Icon type="down" />
            </span>
          </Dropdown>
        </div>
        <div className="chart-box">
          <div id="Chartday" ></div>
          <Icon type="trophy" className="irank" />
          <Table dataSource={dataSource} columns={columns} className="rank"/>
        </div>
        <div className="title-container">
          <div className="count-name">单周各天预约统计</div>
          <div className="count-time">时间段：</div>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link select-collect">
            最近一月<Icon type="down" />
            </span>
          </Dropdown>
        </div>
        <div className="chart-box">
          <div id="Chartweek" ></div>
          <Icon type="trophy" className="irank" />
          <Table dataSource={dataSourceweek} columns={columns} className="rank"/>
        </div>
        {/* 按订单变化量统计 */}
        <div className="title-container">
          <Icon type="pushpin-o" />
          <div className="collector-name">按订单变化量统计</div>
          <div className="count-time">时间段：</div>
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link">
            最近半年 <Icon type="down" />
            </span>
          </Dropdown>
        </div>
        <div className="chart-container-all">  
          <div className="box-container">
            <div className="lasttime-all">统计时段</div>
            <div className="lastdate-all">2017/10/01 - 2018/03/31</div>
          </div>
          <div className="departline-all"></div>
          <div className="box-container">
            <div className="lasttime-all">未分类回收订单量</div>
            <div className="lastdate-all">29837笔</div>
          </div>
          <div className="departline-all"></div>
            <div className="box-container">
              <div className="lasttime-all">分类回收订单量</div>
              <div className="lastdate-all">15630笔</div>
            </div>
		  </div>
          <div id="Chartsort" ></div>
      </div>
    );
  }
}

export default OrderSort;
