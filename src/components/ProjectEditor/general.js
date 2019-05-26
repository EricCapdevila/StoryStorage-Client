
import React, { Component } from "react";


class General extends Component {
  constructor(props){
    super(props)
    const {project} = this.props
    
    this.state = {
      title:project.title,
      summary:project.summary,
      genre:project.genre,
      isPrivate:project.isPrivate
    }
  }
  
  sendUpdates=()=>{
    this.props.update(this.state)
  }

  render() {
    console.log(this.state)
    return (
     <div>
       <p>the general page</p>
      <h1>{this.state.title}</h1>
      <p>{this.state.summary}</p>
     </div>
    );
  }
}



export default General