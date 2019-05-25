import React, { Component } from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import ProjectServices from "./projects-service";
import AddProject from "./addProject";


class MyProjects extends Component {
  constructor(props){
    super(props);
    this.state = {
      //  allProjects:[],
        myProjects: [], 
    }
  }

  
  //make a method to send the new project to the myProjects array so it is rendered, do a setState
  addNewToList = () =>{}

  getMyProjects = () => {
   
    ProjectServices.getAll()
    .then((projects) => {
      const allMyProjects = projects.filter((project) => {
      return project.author===this.props.user._id
    })
    this.setState({myProjects: allMyProjects})
    })
    
  }

// .then( (apiResponse) => {
//   const theTask = apiResponse.data;
//   this.setState(theTask);

  componentDidMount() {
   this.getMyProjects();
  }
    
            
  render() {
    return (
     <div>
      <AddProject/>
      
      {      
        !this.state.myProjects?
          
          <div>THere are no ojects to display</div>
                
        :  
            (this.state.myProjects.map( (project) => {
              return (
                <div key={project._id}>
                  <Link to={`/projects/${project._id}`}>
                    <h3>{project.title}</h3>
                    <p>{project.summary} </p>
                  </Link>
                </div>
              )
            })
            )    
      }
      
     </div>
    );
  }
}



export default withAuth(MyProjects);