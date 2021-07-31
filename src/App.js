import { assertExpressionStatement } from '@babel/types';
import React, { Component } from 'react'
import axios from 'axios'
import Form from './components/Form';
import CardMovie from './components/CardMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button}from 'react-bootstrap';
import LoginButton from './components/LoginButton'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
 class App extends Component {
   constructor(props){
     super(props)
     this.state={
       MovieArry:[],
       searchQurey:''
     }
   }
   
   componentDidMount = async()=>{
     
    // await this.setState({
    //   searchQurey:event.target.query.value
    
    // })
    
        //http://localhost:3001/movies?api_key=bec06652a4cb9591d54fceb6bc996e54&query=Action
        let url=`http://localhost:3001/movies?api_key=bec06652a4cb9591d54fceb6bc996e54&query=Action`;
        let result=await axios.get(url)
    this.setState({
      MovieArry:result.data

    })
    console.log(this.state.MovieArry);
         

        }

        // getmovie = async(event)=>{
        //   event.preventDefault();
     
        //   await this.setState({
        //     searchQurey:event.target.query.value
          
        //   })
          
        //       //http://localhost:3001/movies?api_key=bec06652a4cb9591d54fceb6bc996e54&query=Action
        //       let url=`${process.env.REACT_APP_PORT}/movies?api_key=bec06652a4cb9591d54fceb6bc996e54&query=${this.state.searchQurey}`;
        //       let result=await axios.get(url)
        //   this.setState({
        //     MovieArry:result.data
      
        //   })
        //   console.log(this.state.MovieArry);
        // }      








        
  render() {
    
    return (
      <div>

<Router>
          {/* <IsLoadingAndError> */}
           
            
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                
                <LoginButton/>

                
</Route>
</Switch>

</Router>

      {/* <Form getmovie={this.getmovie}/> */}
      <CardMovie array={this.state.MovieArry}/>
      </div>
    )
  }
}

export default App
