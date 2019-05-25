import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import ProjectServices from "./projects-service";
import AddProject from "./addProject";


class MyProjects extends Component {
  constructor(props){
    super(props);
    this.state = {myProjects: [], showingForm: false}
  }

  
  getMyProjects = () => {
    ProjectServices.getAll()
    .then((projects) => {
      const allMyProjects = projects.filter((project) => {
      return project.author===this.props.user._id
    })
    this.setState({myProjects: allMyProjects})
    }) 
  }

  componentDidMount() {
  this.getMyProjects();
}
  toggleForm = () => {
    this.setState({showingForm: !this.state.showingForm})
  }
    
            
  render() {
    return (
     <div>      
      {      
        !this.state.myProjects.length===0?
          
          <div>There are no objects to display</div>
        :  
        <div className="myProjects">
          {
            (this.state.myProjects.map( (project) => {
              return (
                <div key={project._id}>
                  <Link to={`/projects/${project._id}`}>
                    <div className='projectCards'>
                      <h3>{project.title}</h3>
                      <p>{project.summary} </p>
                    </div>
                  </Link>
                </div>
              )
              })
            )
          }  
        </div>  
      }
        {
          this.state.showingForm?
          (<div className="popup-back" >
          <button onClick={this.toggleForm} className="ex-button">x</button>
          <AddProject toggleForm= {this.toggleForm}/>
          </div>)
          :
          <button onClick={this.toggleForm} className="plus-button">+</button>
        }
      </div>
    );
  }
}



export default withAuth(MyProjects);