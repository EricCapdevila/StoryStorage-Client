import React, { Component } from "react";
import ProjectServices from "./projects-service";


class Searchbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      myProjects: [], 
      showingForm: false,
    }
  }
    
  handleChange=(e)=>{
    let text = e.target.value
    console.log('props',this.props)
    console.log('text',text) //works well
    this.props.filtering(text)
    }

  render() {
    return (
     <div>
      <input  id="searchbar" onChange={(e) => this.handleChange(e)}></input>
     </div>
    );
  }
}



export default Searchbar;