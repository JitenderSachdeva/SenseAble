import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { loginUser } from '../../actions/authentication';
import { PostData } from './PostData';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			redirectToReferrer: false,
			// errors: {}
		}
		this.login = this.login.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	login() {
		PostData(this.state).then((result) => {
			let responseJson = result;
			console.log(responseJson);
			if (responseJson.token) {
				localStorage.setItem('userData', responseJson);
				this.setState({ redirect: true });
			} else {
				console.log('Login Error!');
			}
		})
	}



	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}


	render() {
		if (this.state.redirectToReferrer) {
			return (<Redirect to={'/login'} />);
		}

		if (sessionStorage.getItem('userData')) {
			return (<Redirect to={'/DrumsSearch'} />);
		}
		return (

			<body class="hold-transition login-page">
				<div class="login-box">
					<div class="login-logo">
						<a href="../../index2.html">
							<img src="http://coolsense.senseable.co.in/img/logo.png" width="100%"></img></a>
					</div>
					<div class="card">
						<div class="card-body login-card-body">
							<h3 class="login-box-msg">Login</h3>
						<p>Sign In to your account</p>

							<form action="../../index3.html" method="post">
								<div class="input-group mb-3">
									<input type="email" name="username" class="form-control"
										onChange={this.handleInputChange} placeholder="Email" />
									<div class="input-group-append">
										<div class="input-group-text">
											<span class="fas fa-envelope"></span>
										</div>
									</div>
								</div>
								<div class="input-group mb-5">
									<input type="password" name="password" class="form-control"
										onChange={this.handleInputChange} placeholder="Password" />
									<div class="input-group-append">
										<div class="input-group-text">
											<span class="fas fa-lock"></span>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-8">
										<div class="icheck-primary">
											<input type="checkbox" id="remember" />
						<p class="mb-1">
							<a href="forgot-password.html">I forgot my password</a>
						</p>
										</div>
									</div>
									<div class="col-4">
										<button type="button" className="btn btn-block btn-info btn-flat"
											onClick={this.login}>Login</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					</div>
			</body>
		)
	}
}



export default Login;