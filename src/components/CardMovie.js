import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";

class CardMovie extends Component {

  constructor(props) {
    super(props)
    this.state = {
      favMovieArray: [],
      UserEmail: ''

    }
  }
  // http:localhost:3001/addMovies/email
  ADDFav = async (item) => {

    const { user } = this.props.auth0;

    await this.setState({
      userEmail: `${user.email}`,
    });

    const email = this.state.userEmail;

    console.log(email);
let ResultAdd=axios.post(`${process.env.REACT_APP_PORT}/addMovies/${email}`,item)

await this.setState({
  favMovieArray:ResultAdd.data

})
  }
  render() {
    return (
      <div>
        {this.props.array.map((item, index) => {
          return (

            <Card style={{ width: '18rem', display: "inline-block" }} key={index}>
              <Card.Img variant="top" src={item.image_url} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary" onSubmit={this.ADDFav(item)}>addtofav</Button>
              </Card.Body>
            </Card>)
        })}

      </div>
    )
  }
}

export default withAuth0(CardMovie)
