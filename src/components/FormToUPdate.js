import React, { Component } from 'react'

 class FormToUPdate extends Component {
    render() {
        return (
            <div>
               <form onSubmit={this.props.UpdateFun}>
<input type="text" name="image_url" defaultValue={this.props.image_url}/>
<input type="text" name="title" defaultValue={this.props.title}/>
<input type="submit" value="update"/>

               </form>
            </div>
        )
    }
}

export default FormToUPdate
