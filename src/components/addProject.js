// components/projects/AddProject.js

import React, { Component } from 'react';
// import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import ProjectServices from "./projects-service";

class AddProject extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", genre: "Other", summary: "", isPrivate: false};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    window.location.reload()
    ProjectServices.addOne(this.state)
    this.setState({ title: "", genre: "Other", summary: "", isPrivate: false});
    this.props.toggleForm()
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
      
        <form onSubmit={this.handleFormSubmit} className="auth-form absolute">
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

          <div className='form-section'>
          <label>Genre:</label>
          <select 
          name="genre" 
          value={this.state.genre} 
          onChange={ (e) => this.handleChange(e) }>
            <option >--Choose One--</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Romance">Romance</option>
            <option value="Historical">Historical</option>
            <option value="Horror">Horror</option>
            <option value="Crime">Crime</option>
            <option value="Other">Other</option>
          </select>
          </div>
         
          <div className='form-section'>
          <label>Private:</label>      
          <input type="checkbox" className='checkbox'
          onChange={ (e) => this.handleRadioChange(e) }/>
          </div>   
          <input type="submit" value="submit" />
        </form>

     
    )
  }
}

export default withAuth(AddProject);