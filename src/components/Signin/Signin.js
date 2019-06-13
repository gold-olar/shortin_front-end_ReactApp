import React from 'react';
import { Card, Button, FormGroup, Label, Input} from 'reactstrap';
import './Signin.css'

const Signin = ({loggedin}) =>{
  
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
			          <Input type="text" name="username" id="username" placeholder="Username" />
			        </FormGroup>
			        <FormGroup>
			          <Label for="password">Password</Label>
			          <Input type="password" name="password" id="password" placeholder="Password" />
			        </FormGroup>
			       
			        <Button onClick ={()=>loggedin(true)}>Sign In</Button>
			      </div>
		      </div>
		      </Card>
	     </div>

    );
  }



export default Signin;