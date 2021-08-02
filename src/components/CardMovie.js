import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";
import FavMovie from './FavMovie';

class CardMovie extends Component {



  constructor(props){
    super(props)
    this.state={
      MovieArry:[],
      searchQurey:'',
   
      UserEmail: ''
    }
  }
  
  componentDidMount = async()=>{
    
   

       //http://localhost:3001/movies?api_key=bec06652a4cb9591d54fceb6bc996e54&query=Action
       let url=`http://localhost:3001/movies?api_key=bec06652a4cb9591d54fceb6bc996e54&query=Action`;
       let result=await axios.get(url)
   this.setState({
     MovieArry:result.data

   })
   console.log(this.state.MovieArry);
        

       }


       

  // http:localhost:3001/addMovies/email
  ADDFav = async (item) => {
console.log(item);
    const { user } = this.props.auth0;

    await this.setState({
      userEmail: `${user.email}`,
    });

    const email = this.state.userEmail;

    
let ResultAdd= await axios.post(`${process.env.REACT_APP_PORT}/addMovies?email=${email}`,item)

// await this.setState({
//   MovieArry:ResultAdd.data

// })
  }
  render() {
    return (
      <div>
        {this.state.MovieArry.map((item, index) => {
          return (

            <Card style={{ width: '18rem', display: "inline-block" }} key={index}>
              <Card.Img variant="top" src={item.image_url} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
               
                <Button variant="primary" onClick={()=>this.ADDFav(item)}>addtofav</Button>
              </Card.Body>
            </Card>)
        })}

      </div>
    )
  }
}

export default withAuth0(CardMovie)
