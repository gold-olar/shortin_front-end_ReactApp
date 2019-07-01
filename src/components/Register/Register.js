import React, {Component} from 'react';
import {Alert, Card,  FormGroup, Label, Input} from 'reactstrap';
import Particles from 'react-particles-js';
const particleOptions ={
   "particles": {
          "number": {
              "value": 100
          },
          "size": {
              "value": 1
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
}


class Register extends Component{
	constructor(props){
		super(props);
		this.state={
			registerUsername: '',
			registerEmail : '',
			registerPassword: '',
			registerConfirmPassword:'',
			failure_message: ''

		}
	}

	onUsernameChange= (event)=>{
		this.setState({
			registerUsername:event.target.value
		})
	}
	onEmailChange= (event)=>{
		this.setState({
			registerEmail:event.target.value
		})
	}
	onPasswordChange= (event)=>{
		this.setState({
			registerPassword:event.target.value
		})
	}
	onConfirmPasswordChange= (event)=>{
		this.setState({
			registerConfirmPassword:event.target.value
		})
	}
	OnregisterSubmit=()=>{
	fetch('http://shorttin-api.herokuapp.com/signup',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				username: this.state.registerUsername,
				email: this.state.registerEmail,
				password: this.state.registerPassword,
				password2: this.state.registerConfirmPassword
		})
	})
		.then(response => response.json())
		.then(user =>{
			if (user){
				if(user.username){
					this.props.loggedin(true);	
				}else{
					const message = user.message;
					this.setState({
						failure_message: message
					})
				}
				this.props.loadUser(user);
						
			}
		})

		
	}

 render(){
 	return (
    	<div>
    	 <Particles 
          className="particles"
          params ={particleOptions}
         />
	     <div className="templateForm">
	     	<Card className="signin_card">

		     <div>
		     	<h2> Register </h2>
		     </div>
		     <div>
		     {this.state.failure_message ?
				<Alert color="danger">
					{this.state.failure_message}
				</Alert>
					:
						<div> </div>
					}
			      <div>
			       <FormGroup>
			          <Label for="Email">Username</Label>
			          <Input onChange={this.onUsernameChange} type="text" name="username" id="username" placeholder="Username" />
			        </FormGroup>
			        <FormGroup>
			          <Label for="Email">Email</Label>
			          <Input onChange={this.onEmailChange}  type="email" name="email" id="email" placeholder="Email" />
			        </FormGroup>
			        <FormGroup>
			          <Label for="password">Password</Label>
			          <Input onChange={this.onPasswordChange}  type="password" name="password" id="password" placeholder="Password" />
			        </FormGroup>
			        <FormGroup>
			          <Label for="password2">Confirm Password</Label>
			          <Input onChange={this.onConfirmPasswordChange}  type="password" name="password2" id="password2" placeholder="Confirm Password" />
			        </FormGroup>
			       
			        <FormGroup>
			          <Input onClick={this.OnregisterSubmit} className='btn-secondary' type="submit" value="REGISTER" />
			        </FormGroup>
			      </div>
		      </div>
		      </Card>
	     </div>
	    </div>
    );
  }
 }
    



export default Register ;