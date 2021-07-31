import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import "./Profile.css";

class Profile extends Component {
  render() {
    const { user ,isAuthenticated} = this.props.auth0;
    
    return (
    <>
    {
        isAuthenticated &&
        <>
        <div className='allimg1'>

<div className='line1' >

<div className="container11">
<img src={user.picture} alt={user.name} className='images'/>

<div className="overlay1">
<div className="text11"> {user.name}</div>
 <div className="text1"> {user.email} </div>       
</div>
</div>
</div>
</div>

        </>
    }
        
         </>
    )
   

  }
}

export default withAuth0(Profile);