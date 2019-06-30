import React from 'react';
import SingleCard from '../LinkCard/Card';

const Links = ({allLinks})=>{
	return(
		<div>
				{allLinks.map((links, i)=>{
					return(
						

						<SingleCard
					key={allLinks[i]._id}
					longlink ={allLinks[i].long}
					shortlink = {allLinks[i].short}
					date ={allLinks[i].date.slice(0, 10)}
					/>
						)
					
				})};
		</div>
		) 
		}
	
		
	
export default Links;