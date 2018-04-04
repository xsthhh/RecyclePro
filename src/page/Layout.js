import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router';
import './css/Head.css';
const { SubMenu } = Menu;
const { Header,Sider,Content } = Layout

class Index extends Component {
  constructor(){
    super();
    this.state = {
      isSelect:window.location.hash.slice(1)
    }
  }
  componentWillMount() {
      window.addEventListener("popstate", this.handlePop.bind(this))
  }
  componentDidMount() {
      window.removeEventListener("popstate", this.handlePop.bind(this))
  }
  handlePop = ()=>{
      this.setState({
          isSelect: window.location.hash.slice(1),
      })
  }
  //----------------------点击的时候当前按钮激活
  selectItem =()=>{
    console.log(window.location.hash.slice(1))
      this.setState({
          isSelect: window.location.hash.slice(1),
      })
  };
  render() {
    return (
        <Layout>
    <Header className="header">
       <img src="img/greenman.png" className="logo"></img>
       <div className="name">绿巨人回收</div>
       <div className="ad-container"> 
          <div>管理员01</div>
          <div>退出</div>
       </div>
       <img src="img/setting.png" className="set-logo"></img>
    </Header>
    <Layout>
      <Sider width={230} style={{ background: '#fff'}}>
        <Menu
          mode="inline"
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0}}
          onSelect={ this.selectItem }
          selectedKeys={[this.state.isSelect]}
        >
          <SubMenu key="sub1" title={<span className="headicon"><Icon type="user" />用户统计</span>}>
            <Menu.Item key="/index/user">
              <Link to='index/user' className="subsider">用户量统计</Link>
            </Menu.Item>
            <Menu.Item key="/index/usercom">
              <Link to='index/usercom' className="subsider">用户组成统计</Link>
            </Menu.Item>
            <Menu.Item key="/index/userlocal">
              <Link to='index/userlocal' className="subsider">用户地区分布统计</Link>
            </Menu.Item>
            <Menu.Item key="/index/collector">
             <Link to='index/collector' className="subsider">回收员统计</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span className="headicon"><Icon type="api" />废品统计</span>}>
            <Menu.Item key="/index/allrecycle">
             <Link to='index/allrecycle' className="subsider">总废品回收统计</Link>
            </Menu.Item>
            <Menu.Item key="/index/stationrecycle">
              <Link to='index/stationrecycle' className="subsider">站点废品回收统计</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span className="headicon"><Icon type="profile" />订单统计</span>}>
            <Menu.Item key="/index/checkorder">
              <Link to='index/checkorder' className="subsider">查看订单</Link>
            </Menu.Item>
            <Menu.Item key="/index/ordersort">
              <Link to='index/ordersort' className="subsider">订单分类统计</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span className="headicon"><Icon type="pay-circle-o" />收支管理</span>}>
            <Menu.Item key="/index/recyclefee">
              <Link to='index/recyclefee' className="subsider">废品回收支出统计</Link>
            </Menu.Item>
            <Menu.Item key="/index/consumefee">
              <Link to='index/consumefee' className="subsider">积分消费统计</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title={<span className="headicon"><Icon type="book" />环保教育统计</span>}>
            <Menu.Item key="/index/knowledge">
              <Link to='index/knowledge' className="subsider">知识测试统计</Link>
            </Menu.Item>
            <Menu.Item key="/index/eduwork">
              <Link to='index/eduwork' className="subsider">作品上传统计</Link>
            </Menu.Item>
            <Menu.Item key="/index/giftgrant">
              <Link to='index/giftgrant' className="subsider">小礼物发放统计</Link>
            </Menu.Item>
            <Menu.Item key="/index/stuparticipation">
              <Link to='index/stuparticipation' className="subsider">在校学生参与度统计</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" title={<span className="headicon"><Icon type="tool" />废品改造统计</span>}>
            <Menu.Item key="/index/remouldwork">
              <Link to='index/remouldwork' className="subsider">作品上传统计</Link>
            </Menu.Item>
            <Menu.Item key="/index/donateandsell">
              <Link to='index/donateandsell' className="subsider">作品捐赠和出售统计</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub7" title={<span className="headicon"><Icon type="rocket" />运营管理</span>}>
            <Menu.Item key="/index/appfocus">
              <Link to='index/appfocus' className="subsider">应用关注量统计</Link>
            </Menu.Item>
            <Menu.Item key="/index/workshare">
              <Link to='index/workshare' className="subsider">作品分享量统计</Link>
            </Menu.Item>
            <Menu.Item key="/index/donateclick">
              <Link to='index/donateclick' className="subsider">捐赠通道点击量统计</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub8" title={<span className="headicon"><Icon type="notification" />用户反馈</span>}>
            <Menu.Item key="/index/checkfeedback">
              <Link to='index/checkfeedback' className="subsider">查看反馈</Link>
            </Menu.Item>
            <Menu.Item key="/index/feedbacksta">
              <Link to='index/feedbacksta' className="subsider">反馈统计</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub9" title={<span className="headicon"><Icon type="setting" />系统设置</span>}>
            <Menu.Item key="/index/account">
              <Link to='index/account' className="subsider">账号设置</Link>
            </Menu.Item>
            <Menu.Item key="/index/limits">
              <Link to='index/limits' className="subsider">权限设置</Link>
            </Menu.Item>
            <Menu.Item key="/index/system">
              <Link to='index/system' className="subsider">系统设置</Link>
            </Menu.Item>
            <Menu.Item key="/index/elseset">
              <Link to='index/elseset' className="subsider">其他设置</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
        
        <Content style={{ background: '#fff',padding:'16px 20px 20px 38px', margin: 0 }}>
          {this.props.children}
        </Content>
    </Layout>
  </Layout>
    );
  }
}

export default Index;
