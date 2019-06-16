import React, {Component}from 'react';
import { Card, FormGroup, Label, Input} from 'reactstrap';
import './Signin.css'

class Signin extends Component{
	constructor(){
		super()
		this.state={
			signinUsername: '',
			signinPassword: ''
		}
	}

	onUsernameChange = (event)=>{
		this.setState({
			signinUsername: event.target.value
		})
	}
	onPasswordChange = (event)=>{
		this.setState({
			signinPassword: event.target.value
		})
	}
	onSigninSubmit = ()=>{
		fetch('http://localhost:3001/signin',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				username: this.state.signinUsername,
				password: this.state.signinPassword
			})
		})
		.then(response => response.json())
		.then(data =>{
			if (data ==='Signed In'){
				this.props.loggedin(true);
			}
		})
		
	}
  render(){
  	const {loggedin} = this.props
  	return (
	     <div className="templateForm">
	     	<Card className="signin_card">

		     <div>
		     	<h2> Sign In </h2>
		     </div>
		     <div>
			      <div name= "Sign In">
			       <FormGroup>
			          <Label for="Email">Username</Label>
			          <Input onChange={this.onUsernameChange} type="text" name="username" id="username" placeholder="Username" />
			        </FormGroup>
			        <FormGroup>
			          <Label for="password">Password</Label>
			          <Input onChange={this.onPasswordChange}type="password" name="password" id="password" placeholder="Password" />
			        </FormGroup>
			         <FormGroup>
			          <Input onClick ={this.onSigninSubmit} className='btn-secondary' type="submit" value="Sign in" />
			        </FormGroup>
			       
			       
		      
			      </div>
		      </div>
		      </Card>
	     </div>

    );
   }
    
  }



export default Signin;