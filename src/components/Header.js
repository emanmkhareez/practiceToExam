import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';

import CardMovie from './CardMovie';

class Header extends React.Component {
  render() {
    const {user,isAuthenticated}=this.props.auth0;
    return(
     
      <>
         
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        
        <Link to="/profile">Profile</Link>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}

        
       <Link to="/FavMovie"> Fav  </Link>
       
          <Link to='/DataAPI'>  DataFromAPI  </Link>
          
          {
            isAuthenticated ? <LogoutButton/> : <LoginButton/>
          }
      </Navbar>
      </>
    );
  }
}

export default withAuth0(Header) ;