import React, { Component } from 'react'

 class Form extends Component {
    render() {
        return (
            <div>
                <h1>Hallo</h1>
                <form onSubmit={this.props.getmovie} >
                    <input type="text" name="query"/>
                    <input type="submit" value="Submit"/>
                </form>
                
            </div>
        )
    }
}

export default Form
