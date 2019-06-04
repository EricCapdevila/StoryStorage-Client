
import React, { Component } from "react";
import Opinions from './opinions'
import {  Redirect } from "react-router-dom";


class General extends Component {

  state = {
    titlePlaceholder: "",
    title: "",
    summaryPlaceholder:"",
    summary: "",
    genre: "",
    isPrivate: "",
    doRedirect: false,
  }

  componentDidMount(){
    let title = document.querySelector('#title')
    title.addEventListener('input', (event) => {
      this.setState({title:title.innerText})
    })
    
    let summary = document.querySelector('#summary')
    summary.addEventListener('input', (event) => {
      this.setState({summary:summary.innerText})
      
    })

    const {project} = this.props
    this.setState({
    titlePlaceholder: project.title,
    summaryPlaceholder: project.summary,
    title:project.title,
    summary:project.summary,
    genre:project.genre,
    isPrivate:project.isPrivate
    })
   
  }


  sendUpdates=(e)=>{
    e.preventDefault()
    const {title, summary, genre, isPrivate} = this.state
    const content={title, summary, genre, isPrivate}
    this.props.updateGeneral(content)
    this.props.sent()
  }
  
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]:value})
  }

  handleRadioChange = (event) => {
    this.setState({
      isPrivate: !this.state.isPrivate
    })
  }

  privateValue = () => {
    return this.state.isPrivate
  }
  deleteProject = () => {
    this.props.deleteProject(this.props.id)
    .then(() =>{
      this.setState({
        doRedirect: true,
      })
    })
  }
 

  render() {
    return (
      <div className="project-component">
        <form onSubmit={(e) => this.sendUpdates(e)} >
          <div className="save-delete">  
            <button type="submit" value="Save Changes" className="editor-button save">Save</button>
            <button href="/projects" onClick={this.deleteProject} className="editor-button delete">Delete</button>
          </div>
          <div className="editable-box">
            <h1 id='title' contentEditable >{this.state.titlePlaceholder}</h1>
            <p id='summary'contentEditable className='editable-long-text'>{this.state.summaryPlaceholder}</p>

          <div className='form-section'>
            <label>Private:</label>      
            <input 
            type="checkbox" 
            className='checkbox'
            checked = {this.privateValue()}
            onChange={ (e) => this.handleRadioChange(e) }/>
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
      
            </div>
          </form>
          <Opinions id = {this.props.id}/>
          {this.state.doRedirect ? <Redirect to="/projects"/>: null}
        </div>
    );
  }
}


export default General