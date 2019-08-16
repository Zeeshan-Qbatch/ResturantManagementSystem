import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
import './styles.css';
class AdminLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider 
           trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="0">
              <Icon type="home" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>User Panel</span>
              <Link to="/">
                User    
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Icon type="shop" />
              <span>Item Panel</span>
              <Link to="/items">
                Items    
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Icon type="setting" />
              <span>Setting</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine" />
            <p className="w3-tangerine">Admin Panel</p>
          </Header>
        </Layout>
      </Layout>
    );
  }
}

export default AdminLayout