import React , {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
 import "./navbar.css";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loggedin: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
 
  render() {
    const {RouteChange,  loggedinstate} = this.props

    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand className="logo" href="/">SHORTINit</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          {
            loggedinstate === true ?
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="NavLink" onClick = {()=>RouteChange('signin')} >Sign Out </NavLink>
                </NavItem>
                
             </Nav>
             :
           <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="NavLink" onClick = {()=>RouteChange('register')} >Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="NavLink" onClick = {()=>RouteChange('signin')} >Login</NavLink>
              </NavItem>
          </Nav>
        }
          

          
             
            
              
             
            



           
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar