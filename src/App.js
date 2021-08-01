import { assertExpressionStatement } from '@babel/types';
import React, { Component } from 'react'
import axios from 'axios'
import Form from './components/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button}from 'react-bootstrap';
import LoginButton from './components/LoginButton'
import Profile from './components/Profile';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import FavMovie from './components/FavMovie';
import CardMovie from './components/CardMovie';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LogoutButton from './components/LogoutButton';
class App extends React.Component {

  //   constructor(props){
  //     super(props)
  //     this.state={
  //       bookarray:[],
  //       userEmail: ''
  //     }
  //   }
    
  //   componentDidMount  = async()=>{
  
  //     // const { user } = this.props.auth0;
  
  //     // await this.setState({
  //     //   userEmail: user.name
  //     // })
  
  
  
  
  //      let url=`http:${process.env.REACT_APP_PORT}/book?ownerName=emkhareez19@gmail.com`
  //      let result = await axios.get(url)
  //      await this.setState({
  //       bookarray:result.data
       
  //      })
  //      console.log('eam')
  // console.log(this.state.bookarray)
  
  //   }  
  
    render() {
      const { user ,isAuthenticated} = this.props.auth0;
      console.log('app', this.props);
      return(
        <>
          <Router>
            {/* <IsLoadingAndError> */}
              <Header />
              
              <Switch>
                <Route exact path="/">
                  {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                  {
                    isAuthenticated ?<LogoutButton/>:<LoginButton/>
                  }
  
                </Route>
                
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                <Route path="/profile">
                  <Profile/>
                </Route>
                <Route path="/DataAPI">
                  <CardMovie/>
                </Route>
                <Route path="/FavMovie">
                  <FavMovie/>
                </Route>
              </Switch>
            
            {/* </IsLoadingAndError> */}
          </Router>
         
       
        </>
      );
    }
  }
  
  export default withAuth0(App);