import React from "react";
// import { Link } from "react-router-dom";
// import { withAuth } from "../lib/AuthProvider";
import ProjectServices from "./projects-service";
import ProjectNav from "./ProjectNav";

import General from './ProjectEditor/general'
import Characters from './ProjectEditor/characters'
import Chapters from './ProjectEditor/chapters'
import Locations from './ProjectEditor/locations'
import Timeline from './ProjectEditor/timeline'
import Opinions from './ProjectEditor/opinions'


class ProjectProvider extends React.Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      project:{},
      id:id,
      render:''
    };
  }

  componentWillMount(){
    ProjectServices.getOne(this.state.id)
      .then((project) => {
        this.setState({project: project})
      }) 

  }

  update=(content)=>{
    ProjectServices.updateOne(this.state.id, content)
      .then((project) => this.setState({project: project}))
  }
  delete=()=>{
    ProjectServices.deleteOne(this.state.id)
  }

  handleEditor = (page) =>{
    this.setState({render: page})
  }

  
  render() {
    console.log(this.state.project)
    const projectTools = {project:this.state.project, update: this.update, deleteProject: this.delete };

    let section = this.state.render
    switch (section){
      case 'general':
        section = <General{...projectTools}/>
        break;
      case 'chapters':
        section = <Chapters {...projectTools}/>
      break;
      case 'characters':
       section =  <Characters {...projectTools}/>
      break;
      case 'locations':
       section =  <Locations {...projectTools}/>
      break;
      case 'timeline':
       section =  <Timeline {...projectTools}/>
      break;
      case 'opinions':
       section =  <Opinions {...projectTools}/>
      break;
      default : 
      section = <General {...projectTools}/>
      break;
    }
       
    return (
    <div>
        <ProjectNav handleEditor={this.handleEditor}/>
        {section}
    </div>
    
    );
  }
};

export default ProjectProvider;