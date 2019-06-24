import React, {Component}from 'react';
import { Alert,Card, FormGroup, Label, Input} from 'reactstrap';
import './Signin.css'
import Particles from 'react-particles-js';


const particleOptions ={
   "particles": {
          "number": {
              "value": 70
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



class Signin extends Component{
	constructor(props){
		super(props)
		this.state={
			signinUsername: '',
			signinPassword: '',
			failure_message:''
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
		fetch('https://shorttin-api.herokuapp.com/signin',{
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				username: this.state.signinUsername,
				password: this.state.signinPassword
			})
		})
		.then(response => response.json())
		.then(data =>{
			if (data.message ==='Signed In'){
				let user = data.user;
				this.props.loadUser(user);
				this.props.loggedin(true);

			}else{
				
				const failure_msg = data.message
				this.setState({
					failure_message: failure_msg
				})
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
		     	<h2> Sign In </h2>
		     </div>
		     <div>
			      <div name= "Sign In">
			       <FormGroup>
			       		{this.state.failure_message ?
					 		<Alert color="danger">
						        {this.state.failure_message}
						      </Alert>
					:
						<div> </div>
					}
			          <Label for="Email">Username</Label>
			          <Input onChange={this.onUsernameChange} type="text" name="username" id="username" placeholder="Username" />
			        </FormGroup>
			        <FormGroup>
			          <Label for="password">Password</Label>
			          <Input onChange={this.onPasswordChange}type="password" name="password" id="password" placeholder="Password" />
			        </FormGroup>
			         <FormGroup>
			          <Input onClick ={this.onSigninSubmit} className='btn-secondary' type="submit" value="SIGN IN" />
			        </FormGroup>
			       
			       
		      
			      </div>
		      </div>
		      </Card>
	     </div>
	    </div>

    );
   }
    
  }



export default Signin;