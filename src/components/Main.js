import React, { Component } from "react";
// import { Link } from "react-router-dom";
 import { withAuth } from "../lib/AuthProvider";
import ProjectServices from "./projects-service";
import ProjectOpinions from "../components/ProjectOpinions"



class Main extends Component {
  constructor(props){
    super(props);
    this.state = {PublicProjects: []}
  }

  
  getProjects = () => {
    ProjectServices.getAll()
    .then((projects) => {
      const publicProjects = projects.filter((project) => {
      return !project.isPrivate
    })
    this.setState({PublicProjects: publicProjects})
    }) 
  }

  componentDidMount() {
  this.getProjects();
}
            
  render() {
    console.log('publicProjects', this.state.publicProjects);
    return (
     <div className= 'bookshelf-background'>      
      {      
        !this.state.PublicProjects.length===0?
          
          <div>There are no objects to display</div>
        :  
        <div className="mainPage">
          {
            (this.state.PublicProjects.map( (project) => {
              return(
                  <ProjectOpinions key={project._id} project={project}/>
              )
              })
            )
          }  
        </div>  
      }
      </div>
    );
  }
}



 export default withAuth(Main);