import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';


class AdminLayout extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <Layout style={{ height: '100vh' }}>
        { children }
      </Layout>
    );
  }
}

export default AdminLayout;
