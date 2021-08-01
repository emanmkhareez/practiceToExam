import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

 class SingelMovie extends Component {
    render() {
        return (
            <div>
              {this.props.favDataArray.map((item,index)=>{
               return(
                <Card style={{ width: '18rem', display: "inline-block" }} key={index}>
                <Card.Img variant="top" src={item.image_url} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Button variant="warning" onClick={()=>this.props.deleteFun(index)}>Delete</Button> 
                  <Button variant="success" onClick={()=>this.props.updateShowFun(index)}>Update</Button> 
                  
                </Card.Body>
              </Card>
               )
           })}  
            </div>
        )
    }
}

export default  withAuth0 (SingelMovie)
