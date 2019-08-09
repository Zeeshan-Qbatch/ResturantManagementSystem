import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { connect } from 'react-redux';
import { Spin } from 'antd';



import Register from '../components/authentication/Register.jsx'
import Login from '../components/authentication/Login.jsx';
//import ForgotPassword from '../components/authentication/ForgotPassword.jsx'
//import ResetPassword from '../components/authentication/ResetPassword.jsx'

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

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} user={user} />
          <EmptyLayoutRoute path="/register" component={Register} user={user} />
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

// const AppLayoutRoute = ({ component: Component, user, ...rest}) => {
//   const redirectToRelativePage = () => {
//     if (!user || !user._id) {
//       return (<Redirect to='/login' />);
//     } else if (user.admin) {
//         return (<Redirect to='/admin-dashboard' />);
//     } /*else if (user.status === 'Pending') {
//          return (<Redirect to='/payment' />)
//     } */
//     return ('');
//   }

//   let showLayout = true;
//   if (!user._id || user.admin || user.status === 'Pending') {
//     showLayout = false;
//   }

//   return (
//     <Route {...rest} render={matchProps => (
//       showLayout
//       ? (<AppLayout>
//           <Component {...matchProps} />
//         </AppLayout>)
//       : redirectToRelativePage()
//     )} />
//   )
// };

// const AdminLayoutRoute = ({ component: Component, user, ...rest }) => {
//   const redirectToRelativePage = () => {
//     if (!user._id) {
//       return (<Redirect to='/login' />);
//     } else if (user.admin) {
//       return (<Redirect to='/admin-dashboard' />);
//     }

//     return (<Redirect to='/items-repricer' />);
//   }

//   let showLayout = true;
//   if (!user._id || !user.admin) {
//     showLayout = false;
//   }

//   return (
//     <Route {...rest} render={matchProps => (
//       showLayout
//         ? (<AdminLayout>
//           <Component {...matchProps} />
//         </AdminLayout>)
//         : redirectToRelativePage()
//     )} />
//   )
// };

// const PostSignUpLayoutRoute = ({ component: Component, user, ...rest }) => {
//   const redirectToRelativePage = () => {
//     if (!user._id) {
//         return (<Redirect to='/login' />);
//     } else if (user.admin) {
//         return (<Redirect to='/admin-dashboard' />);
//     }
//     return (<Redirect to='/settings/mws' />);
//   }

//   let showLayout = false;
//   if (user.status === 'Pending') {
//     showLayout = true;
//   }
//   return (
//     <Route {...rest} render={matchProps => (
//       showLayout
//         ? (<PostSignUpLayout>
//           <Component {...matchProps} />
//         </PostSignUpLayout>)
//         : redirectToRelativePage()
//     )} />
//   )
// };

// const EmptyLayoutRoute = ({ component: Component, user, ...rest}) => {
//   let showLayout = true;
//   if (!user || !user._id) {
//     showLayout = false;
//   }

//   return (
//     <Route {...rest} render={matchProps => (
//       showLayout
//       ? (<Redirect to='/items-repricer' />)
//       : (<EmptyLayout>
//           <Component {...matchProps} />
//         </EmptyLayout>)
//     )} />
//   )
// };

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  getUser: () => {
    return dispatch(getUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(RenderRoutes);
