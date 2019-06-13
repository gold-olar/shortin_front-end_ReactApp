import React from 'react';
import { Card, Button, FormGroup, Label, Input} from 'reactstrap';
// import './Register.css'

const Register = () =>{
 
    return (
	     <div className="templateForm">
	     	<Card className="signin_card">

		     <div>
		     	<h2> Register </h2>
		     </div>
		     <div>
			      <div>
			       <FormGroup>
			          <Label for="Email">Username</Label>
			          <Input type="text" name="username" id="username" placeholder="Username" />
			        </FormGroup>
			        <FormGroup>
			          <Label for="Email">Email</Label>
			          <Input type="email" name="email" id="email" placeholder="Email" />
			        </FormGroup>
			        <FormGroup>
			          <Label for="password">Password</Label>
			          <Input type="password" name="password" id="password" placeholder="Password" />
			        </FormGroup>
			        <FormGroup>
			          <Label for="password2">Confirm Password</Label>
			          <Input type="password" name="password2" id="password2" placeholder="Confirm Password" />
			        </FormGroup>
			       
			        <Button>Register </Button>
			      </div>
		      </div>
		      </Card>
	     </div>

    );
  }



export default Register ;