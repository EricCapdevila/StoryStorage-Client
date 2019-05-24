// components/projects/AddProject.js

import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import ProjectServices from "./projects-service";

class AddProject extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", genre: "", summary: "", isPrivate: false};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
      
    ProjectServices.addOne(this.state)
      
      // ProjectServices.addOne(newProject){
      //   const {title, genre, summary} = newProject;
      //   return this.projects
      //   .post("/", {title, genre, summary})
      //   .then( () => this.props.history.push('/projects') );
      // }
    }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState( {[name]: value} );
    
  }

  handleRadioChange = (event) => {
    this.setState({
      isPrivate: !this.state.isPrivate
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          
          <label>Title:</label>
          <input type="text" 
            name="title" 
            value={this.state.title} 
            onChange={ (e) => this.handleChange(e) }/>

          <label>Summary:</label>
          <div>
          <textarea name="summary" 
            value={this.state.summary} 
            onChange={ (e) => this.handleChange(e) } 
            cols={40} rows={10}/>
          </div>

          <label>Genre:</label>
          <select 
          name="genre" 
          value={this.state.genre} 
          onChange={ (e) => this.handleChange(e) }>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Romance">Romance</option>
            <option value="Historical">Historical</option>
            <option value="Horror">Horror</option>
            <option value="Crime">Crime</option>
            <option value="Other">Other</option>
          </select>
         
          <label>Private:</label>      
          <input type="checkbox" 
          onChange={ (e) => this.handleRadioChange(e) }/>
                    
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default withAuth(AddProject);