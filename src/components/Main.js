import React, { Component } from "react";
// import { Link } from "react-router-dom";
 import { withAuth } from "../lib/AuthProvider";
import ProjectServices from "./projects-service";



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
    return (
     <div className= 'bookshelf-background'>      
      {      
        !this.state.PublicProjects.length===0?
          
          <div>There are no objects to display</div>
        :  
        <div className="myProjects">
          {
            (this.state.PublicProjects.map( (project) => {
              return (
                <div key={project._id}>
                  {/* <Link to={`/projects/${project._id}`}> */}
                    <div className='projectCards'>
                      <h3>{project.title}</h3>
                      <p>{project.summary} </p>
                    </div>
                  {/* </Link> */}
                </div>
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