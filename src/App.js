import React, {Component} from 'react';
import './App.css';
import NavigationBar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';


class App extends Component{
    constructor() {
      super();
      this.state = {
        allLinks: '',
        route: 'signin',
        isloggedin: false,
        long_url: '',
        short_url: '',
        success_message:'',
        failure_message:'',
        user:{
          username: 'admin',
          links:'',
          id: ''
        }
      };
    }
    loadUser = (user)=>{
      this.setState({user:{
        username: user.username,
        links: user.links,
        id: user._id
      }
    });
    }
    loadlinks = (links)=>{
      this.setState({
        allLinks: links
      })
    }
    InputChange = (event) =>{
      this.setState({
        long_url: event.target.value });
    }
    RouteChange = (newRoute) => {
      this.setState({
       route: newRoute,
       isloggedin: false,
       success_message: '',
       failure_message: '',
       user:{
        username: '',
        links: '',
        id: ''
       }
      });
    }

    loggedin = (condition) =>{
      this.setState({
        isloggedin :condition,
        route: ""
      });
    }
    updateLinks= (username)=>{
    return fetch('https://shorttin-api.herokuapp.com/getlinks',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        
      })
    })
    .then(response=> response.json())
    .then(links =>{
      console.table(links)
      this.setState({
        allLinks : links
      })
    })
    }

    shortin=()=>{    
      fetch('https://shorttin-api.herokuapp.com/shortin',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.user.username,
        longlink: this.state.long_url
    })
  })
    .then(response => response.json())
    .then(data=>{
    const {failure_message,success_message, username,shortined_link, no_of_links} = data
      this.setState({
        short_url: shortined_link,
        success_message: success_message,
        failure_message: failure_message,
        user:{
          links: no_of_links,
          username: username
        }
      })
    })
      this.updateLinks(this.state.username);
    }


  render(){
    return(
        <div>
         <NavigationBar 
          RouteChange={this.RouteChange}
          LoginRouteChange = {this.LoginRouteChange}
          loggedinstate ={this.state.isloggedin}
          />

          {this.state.isloggedin === true ?
            <Dashboard 
            username = {this.state.user.username}
            links = {this.state.user.links}
            long_link ={this.state.long_url}
            short_link ={this.state.short_url}
            InputChange= {this.InputChange}
            shortin ={this.shortin}
            success_message= {this.state.success_message}
            failure_message={this.state.failure_message}
            allLinks = {this.state.allLinks}
            />
            :(
               this.state.route === "signin" ? 
                <Signin 
                loadUser={this.loadUser} 
                loggedin = {this.loggedin}
                loadlinks  = {this.loadlinks}
                updateLinks = {this.updateLinks}
                />


                : <Register loadUser={this.loadUser} loggedin = {this.loggedin} />
               
        
              )

          }


        
       
        
        

          <Footer/>
        </div>
      )
  }
}


export default App;



