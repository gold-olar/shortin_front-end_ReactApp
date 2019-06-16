import React from 'react';
import './dashboard.css'
import { Button, Container, Card, Jumbotron, Form, FormGroup, Input } from 'reactstrap';




const Dashboard = ({ shortin, InputChange, short_link, long_link }) => {
	const date = new Date().toDateString();
	const displayed_long_link = long_link.slice(4);
	
	return (
		<div>
			<Jumbotron className='dashboard_header'>
				<h3> Welcome Ola, you have #4 Shortined Links </h3>


				<Form name="Link Shortener">
					<FormGroup>
						<Input onChange={InputChange} type="url" name="url" id="url" placeholder="Enter Long Link Here..." />
					</FormGroup>

					<Button onClick={shortin}>Shortin </Button>
				</Form>

			</Jumbotron>
			{short_link.length > 1 ?
				<div className="links">
					<h2>Shortined Links </h2>

					<Container className="cont">
						<Card className="cards">
							<a className="short_link"  href={short_link} > {short_link} </a>
							<h5 className="long_link"> {displayed_long_link} </h5>

							<p className="date">
								{date}
			</p>

						</Card>


					</Container>

				</div>
				:

				<div> 
					<h6> You haven't Shortined anything yet Bruh!!!</h6>
				</div>
			}


		</div>



	)

}

export default Dashboard;