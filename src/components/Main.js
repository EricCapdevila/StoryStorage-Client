import React, { Component } from "react";
// import { Link } from "react-router-dom";
 import { withAuth } from "../lib/AuthProvider";
import ProjectServices from "./projects-service";
import ProjectOpinions from "../components/ProjectOpinions"
import SearchBar from "../components/Searchbar"



class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      PublicProjects: [],
      FilteredProjects:[]
    }
  }

    getProjects = () => {
    ProjectServices.getAll()
    .then((projects) => {
      const publicProjects = projects.filter((project) => {
      return !project.isPrivate
    })
    this.setState({PublicProjects: publicProjects, FilteredProjects: publicProjects})
    }) 
  
  }

    filterProjects = (string) => {
      if(string){
        let fitleredArray = this.state.PublicProjects.filter((project)=>{
          return project.title.toLowerCase().includes(string.toLowerCase())
        })
        this.setState({ FilteredProjects: fitleredArray})
      }else{
        this.setState({FilteredProjects: this.state.PublicProjects})
      }
    }
    filterGenre = (string) => {
      if(string){
        let fitleredArray = this.state.PublicProjects.filter((project)=>{
          return project.genre === string
        })
        this.setState({ FilteredProjects: fitleredArray})
      }else{
        this.setState({FilteredProjects: this.state.PublicProjects})
      }
    }

  componentDidMount() {
  this.getProjects();
}
            
  render() {
    console.log('publicProjects', this.state.publicProjects);
    return (
     <div className= 'bookshelf-background'>      
       <SearchBar filtering={this.filterProjects} byGenre={this.filterGenre}/>
      {      
        !this.state.FilteredProjects.length===0?
          
          <div>There are no objects to display</div>
        :  
        <div className="mainPage">
          {
            (this.state.FilteredProjects.map( (project) => {
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