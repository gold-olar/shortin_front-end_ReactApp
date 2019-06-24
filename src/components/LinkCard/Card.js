import React from 'react';
import {Container, Card} from 'reactstrap';


const SingleCard = ({longlink, shortlink, date})=>{
	
	return(

		<Container className="cont">
			<Card className="cards">
				<a className="short_link"  href={shortlink} > {shortlink} </a>
					<h5 className="long_link"> {longlink} </h5>
				<p className="date">
					{date}
				</p>

			</Card>


		</Container>
		)
}

export default SingleCard;