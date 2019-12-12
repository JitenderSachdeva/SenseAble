import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './header.css';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { logoutUser } from '../../actions/authentication';
// import { withRouter } from 'react-router-dom';

class Header extends Component {
  // onLogout(e) {
  //   e.preventDefault();
  //   this.props.logoutUser(this.props.history);
  // }
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('userData')) {
      console.log("User Logged In")
    } else {
      this.setState({ redirect: true });
    }
  }

  logout(){
    localStorage.setItem('userData','');
    localStorage.clear();
    this.setState({redirect: true});
  }
  render() {
    if(this.state.redirect){
      return(<Redirect to={'/login'}/>);
    }
    // const { isAuthenticated, user } = this.props.auth;

    // const authLinks = (
    //   <ul className="navbar-nav ml-auto">
    //     <a href="#" className="nav-link" onClick={this.onLogout.bind(this)}>
    //       <img alt={user.name} title={user.name}
    //         className="rounded-circle"
    //         style={{ width: '25px', marginRight: '5px' }} />
    //       Logout
    //             </a>
    //   </ul>
    // )

    // const guestLinks = (
    //   <ul className="navbar-nav ml-auto">
    //     <li className="nav-item">
    //       {/* <Link className="nav-link" to="/register">Sign Up</Link> */}
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/login">Sign In</Link>
    //     </li>
    //   </ul>
    //)
    return (
      <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Redux Node Auth</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav> */}
        <header className="app-header navbar navbar-expand navbar-white navbar-light">
      {/* <nav className="main-header navbar navbar-expand-lg navbar-white navbar-light static-top">
          <div className="container"> */}
      {/* //  <nav class="main-header navbar navbar-expand navbar-white navbar-light"> */}
          {/* <img style={{alignItems: "center"}} src="https://www.senseable.co.in/wp-content/uploads/2018/01/logo.png"
           width="110px"/> */}
          <a className="navbar-brand" href="#" style={{ alignSelf: "left" }}>
          </a>
          {/* <a href="index3.html" className="brand-link"></a> */}


        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
          </li>

        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
              <i class="far fa-bell"></i>
              <span class="badge badge-warning navbar-badge">15</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span class="dropdown-item dropdown-header">15 Notifications</span>
              <div class="dropdown-divider"></div>



              <a href="#" class="dropdown-item">
                <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
                <i onClick={this.logout} class="fas fa-sign-out-alt"></i>
            </a>
          </li>
        </ul>
        {/* </div>
      </nav> */}
      </header>
      </div>
    )
  }
}

// Header.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//   auth: state.auth
// })

// export default connect(mapStateToProps, { logoutUser })(withRouter(Header));
export default Header;