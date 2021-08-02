import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

import SingelMovie from './SingelMovie';
import FormToUPdate from './FormToUPdate';

 class FavMovie extends Component {
     constructor(props){
         super(props)
         this.state={
             UserEmail:'',
             favDataArray:[],
             showForm:false,
             image_url:'',
             title:'',
             index:0


         }

     }
     //get from db
    componentDidMount =async () =>{
        const { user }=this.props.auth0;
        await this.setState({
            UserEmail:`${user.email}`
        })
        const email=this.state.UserEmail
        let result=await axios.get(`${process.env.REACT_APP_PORT}/GetFavData?email=${email}`)
        this.setState({
            favDataArray:result.data
        })
        console.log("aaaaaaaa",this.state.favDataArray)
    }

    //deleteFun
    deleteFun= async(index)=>{
        let obj={
            email:this.state.UserEmail
        }
        let delResult=await axios.delete(`${process.env.REACT_APP_PORT}/delData/${index}`,{params:obj})
this.setState({

    favDataArray:delResult.data
})
}
//updateShowFun
updateShowFun=async (index)=>{
    this.setState({
        showForm:true,
        index:index,
        image_url:this.state.favDataArray[index].image_url,
        title:this.state.favDataArray[index].title,
       



    })



}

//UpdateFunctionTodb
// http:localhost3001/UpdateFun/1
UpdateFun=async (event)=>{
    event.preventDefault();
    let index=this.state.index
let Obj={
    email:this.state.UserEmail,
    image_url:event.target.image_url.value,
    title:event.target.title.value
}
console.log(Obj)
    let ResultToUpdate=await axios.put(`${process.env.REACT_APP_PORT}/UpdateFun/${index}`,Obj)
    this.setState({
        favDataArray:ResultToUpdate.data

    })

}

    render() {
        return (
            <div>
            <h2>Hallo</h2>

           

           <SingelMovie
           deleteFun={this.deleteFun}
            favDataArray={this.state.favDataArray}
            updateShowFun={this.updateShowFun}
           />
           {this.state.showForm &&
           <FormToUPdate 
           image_url={this.state.image_url}
           title={this.state.title}
           UpdateFun={this.UpdateFun}
           />}
            </div>
        )
    }
}

export default withAuth0 (FavMovie)
