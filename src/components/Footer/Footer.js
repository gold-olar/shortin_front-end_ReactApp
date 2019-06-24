import React from 'react';
import './footer.css'

const Footer = ()=>{
	const date = new Date();
	const currentYear = date.getFullYear();
	return(
		<div>
			<footer className= 'footer'>
				<p className= 'footer_text'>  Copyright &copy; {currentYear} by
      			<a class="footer_link" target="blank" href="https://www.olamidesamuel.herokuapp.com"> Olamide Samuel.</a></p>
			</footer>
		</div>
		)
}

export default Footer;