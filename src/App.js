import React, {Component} from 'react';
import './App.css';
import NavigationBar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Particles from 'react-particles-js';
import unirest from 'unirest'


const particleOptions ={
  particles:{
    line_linked:{
      shadow:{
        enable: false,
        color: '#3CA9D1',
        blur: 5
      }
    }
  }
}

class App extends Component{
    constructor() {
      super();
      this.state = {
        route: 'signin',
        isloggedin: false,
        long_url: '',
        short_url: ''
      };
    }

    

    InputChange = (event) =>{
      this.setState({
        long_url: 'url=' +  event.target.value });
    }
    RouteChange = (newRoute) => {
      this.setState({
       route: newRoute,
       isloggedin: false
      });
    }

    loggedin = (condition) =>{
      this.setState({
        isloggedin :condition,
        route: ""
      });
    }
    

    
    shortin = ()=>{    
      unirest.post("https://url-shortener-service.p.rapidapi.com/shorten")
      .header("X-RapidAPI-Host", "url-shortener-service.p.rapidapi.com")
      .header("X-RapidAPI-Key", "f0ddd759fbmsh5d4bf8a8fa77134p149d1cjsn1774ce8ca17d")
      .header("Content-Type", "application/x-www-form-urlencoded")
      .send(this.state.long_url)
      .end( (result) => {
        this.setState({
          short_url : result.body.result_url
        })
                
      });
    }

  render(){
    return(
        <div>
          <Particles 
          className="particles"
          params ={particleOptions}
         />
          <NavigationBar 
          RouteChange={this.RouteChange}
          LoginRouteChange = {this.LoginRouteChange}
          loggedinstate ={this.state.isloggedin}
          />

          {this.state.isloggedin === true ?
            <Dashboard 
            long_link ={this.state.long_url}
            short_link ={this.state.short_url}
            InputChange= {this.InputChange}
            shortin ={this.shortin}/>
            :(
               this.state.route === "signin" ? 
                <Signin loggedin = {this.loggedin}/>

                : <Register/>
               
        
              )

          }


        
       
        
        


        </div>
      )
  }
}


export default App;



