import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { connect } from 'react-redux';
import { Spin } from 'antd';



import Register from '../components/authentication/Register.jsx'
import Login from '../components/authentication/Login.jsx';
import AdminGrid from '../components/admin-dashbaord/admin-dashboard.jsx'
//import ForgotPassword from '../components/authentication/ForgotPassword.jsx'
//import ResetPassword from '../components/authentication/ResetPassword.jsx'
import AppLayout from '../layouts/EmptyLayout.jsx';
import AdminLayout from '../layouts/AdminLayout.jsx';
const AUTHORIZATION = localStorage.getItem('loginToken');
axios.defaults.headers.common['Authorization'] = `JWT ${AUTHORIZATION}`;

import { getUser } from '../actions/users';

class RenderRoutes extends React.Component {
  state = {
    authToken: localStorage.getItem('loginToken'),
    loading: true
  };

  componentDidMount() {
    const { authToken } = this.state;
    const { getUser, user } = this.props;
    if (authToken && (!user || !user._id)) {
      getUser();
      this.setState({ loading: false });
    } else {
      this.setState({ loading: false });
    }
  }

  renderRoutes = () => {
    const { user } = this.props;
    console.log('this is the user',user);
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <AppLayoutRoute path="/login" component={Login} user={user} />
          <Route path="/register" component={Register} user={user} />
          <AdminLayoutRoute path="/admin-dashboard" component={AdminGrid} user={user}/>
        </Switch>
      </Router>
    );
  }

  render() {
    const { user } = this.props;
    const { loading } = this.state;

   // const showLoading = (user.fetching || loading);

    return (
       this.renderRoutes()
    );
  }
};
const AppLayoutRoute = ({ component: Component, user, ...rest}) => {
  const redirectToRelativePage = () => {
    if (!user || !user._id) {
      return (<Redirect to='/login' />);
    } else if (user.role=='admin') {
        return (<Redirect to='/admin-dashboard' />);
    } else if (user.role == 'rider'){
        return (<Redirect to='/register' />)
    } else if (user.role == 'user'){
        return (<Redirect to= '/' />)
    }
    return ('');
  }

  let showLayout = true;
  if (!user._id ) {
    showLayout = false;
  }
  console.log("hye from applayout");
  return (
    <Route {...rest} render={matchProps => (
      showLayout
      ? redirectToRelativePage()
      : (<AppLayout>
        <Component {...matchProps} />
      </AppLayout>)
    )} />
  )
};
const AdminLayoutRoute = ({ component: Component, user, ...rest }) => {
  const redirectToRelativePage = () => {
    if (!user._id) {
      return (<Redirect to='/login' />);
    } else if (user.admin) {
      return (<Redirect to='/admin-dashboard' />);
    }

    return (<Redirect to='/items-repricer' />);
  }

  let showLayout = true;
  if (!user._id || !user.admin) {
    showLayout = false;
  }
  console.log('show layout is ',showLayout)
  return (
    <Route {...rest} render={matchProps => (
      showLayout
        ? redirectToRelativePage()
        : (<AdminLayout>
          <Component {...matchProps} />
        </AdminLayout>)
    )} />
  )
};
const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  getUser: () => {
    return dispatch(getUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(RenderRoutes);
