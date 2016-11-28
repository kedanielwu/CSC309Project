import React, { Component } from 'react';

class LoginSignup extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: '',
			username: '',
			email: '',
			password: '',
			loginUsername: '',
			loginPW: ''
		};

		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleLoginUsername = this.handleLoginUsername.bind(this);
		this.handleLoginPW = this.handleLoginPW.bind(this);
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

		this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}

	handlePasswordChange(event) {
		this.setState({password: event.target.value});
	}

	handleLoginSubmit(event) {
		//CHECK IF LOGIN INFO MATCHES
		console.log("Login info: "+this.state.loginUsername+", "+this.state.loginPW);

		//clear form fields
		this.setState({loginUsername:'', loginPW:'', user: true});
		event.preventDefault();
	}

	handleLoginUsername(event) {
		this.setState({loginUsername: event.target.value})
	}

	handleLoginPW(event) {
		this.setState({loginPW: event.target.value})
	}

	handleUsernameChange(event) {
		this.setState({username: event.target.value});
	}

	handleEmailChange(event) {
		this.setState({email: event.target.value});
	}

	handleSignupSubmit(event) {
		this.setState({username:""});
			// , email:"", password:"", user: true});

		// console.log("Signup info: "+this.state.username+", "+this.state.email
			// +", "+this.state.password+', '+this.state.user);
		event.preventDefault();	
	}

	render() {
		return (
			<div id="wrapper">
	            <div id="login">
	              <h2>Login</h2>
				  <form onSubmit={this.handleLoginSubmit}>
					<label>Username: </label>
				    <input type="username" name="loginUsername"
				    	value={this.state.value} onChange={this.handleLoginUsername}/>
				    <br></br>
					<label>Password: </label>
				    <input type="password" name="loginPassword"
				    	value={this.state.value} onChange={this.handleLoginPW}/>
				    <br></br>
				    <br></br>
				    <button type="submit" >Login</button>
				  </form>
		        </div>

				<div id="signup">
	              <h2>Signup</h2>
				  <form onSubmit={this.handleSignupSubmit}>
					<label>Username: </label>
				    <input type="text" name="signupUsername"
				    	value={this.state.value} onChange={this.handleUsernameChange}/>
				    <br></br>
					<label>E-mail: </label>
				    <input type="email" name="signupEmail"
				    	value={this.state.value} onChange={this.handleEmailChange}/>
				    <br></br>
					<label>Password: </label>
				    <input type="password" name="signupPassword"
				    	value={this.state.value} onChange={this.handlePasswordChange}/>
				    <br></br>				    
				    <label>Confirm Password: </label>
				    <input type="password" name="signupPassword"
				    	value={this.state.value} onChange={this.handlePasswordChange}/>
				    <br></br>
				    <br></br>
				    <button value="Signup" type="submit">Signup</button>
				  </form>
		        </div>
	        </div>
		);
	}
}

export default LoginSignup;