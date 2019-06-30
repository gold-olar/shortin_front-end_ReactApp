import React from 'react';
import './dashboard.css'
import Links from '../Links/Links'
import { Alert,Button, Jumbotron, Form, FormGroup, Input } from 'reactstrap';




const Dashboard = ({ allLinks, username,links,shortin, InputChange,short_link,long_link, success_message, failure_message}) => {
	return (
		<div>
			<Jumbotron className='dashboard_header'>
				<h3> Welcome <b>{username}</b>, you have <b># {links}</b> Shortined Links </h3>

				{success_message ?
						  <Alert color="success">
					        {success_message}
					      </Alert>
					:
						<div> </div>
					}
				{failure_message ?
					 <Alert color="danger">
				        {failure_message}
				      </Alert>
					:
						<div> </div>
					}


				<Form name="Link Shortener">
					<FormGroup>
						<Input onChange={InputChange} type="url"  placeholder="Enter Long Link Here..." />
					</FormGroup>

					<Button onClick={shortin}>SHORTIN </Button>
				</Form>

			</Jumbotron>
			{allLinks ?
				<div className="links">
					<h2>Shortined Links </h2>
					<Links allLinks ={allLinks}/>
					

				</div>
				:

				<div> 
					<h6> You haven't Shortined anything yet {username}!!!</h6>
				</div>
			}


		</div>



	)

}

export default Dashboard;