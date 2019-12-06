import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './App.css';
// import store from './store';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from './setAuthToken';
// import { setCurrentUser, logoutUser } from './actions/authentication';
import DrumsSearch from './Component/Warehouse/Drums-Search/DrumsSearch';
import Login from './Component/Authentication/Login';

// if (localStorage.jwtToken) {
//   setAuthToken(localStorage.jwtToken);
//   const decoded = jwt_decode(localStorage.jwtToken);
//   store.dispatch(setCurrentUser(decoded));

//   const currentTime = Date.now() / 1000;
//   if (decoded.exp < currentTime) {
//     store.dispatch(logoutUser());
//     window.location.href = '/login'
//   }
// }

class App extends Component {
  render() {
    return (
      <Router>


          <Route exact path="/login" component={Login} />
          {/* <div>
                    <Route exact path="/" component={DrumsSearch} />
                    <Header />
                    <div className="row">
                    <Sidebar />
                  </div> */}

          <Route exact path="/DrumsSearch" component={DrumsSearch} />

      </Router>
    )
  }
}

export default App;
