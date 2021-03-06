import React from "react";

import ProjectServices from "./projects-service";
// import ProjectNav from "./ProjectNav";


import General from './ProjectEditor/general'
import Characters from './ProjectEditor/characters'
import Chapters from './ProjectEditor/chapters'
import Locations from './ProjectEditor/locations'
import Timeline from './ProjectEditor/timeline'


class ProjectProvider extends React.Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      project:null,
      id:id,
      render:'general',
      updatesReceived:false,
    };
  }

  componentDidMount(){
    ProjectServices.getOne(this.state.id)
    .then((project) => {
      this.setState({project: project})
    }) 
  }

  componentDidUpdate(){
    this.updateDB()
  }

    
  updateDB=()=>{
    if(this.state.updatesReceived){
      ProjectServices.updateOne(this.state.id, this.state.project)
    .then((project) => {
      this.setState({project: project})})
      this.setState({updatesReceived: false})
    }
  }
  
  
  updateGeneral=(content)=>{
    this.setState({ project:content })
  }
    
  delete=(id)=>{
    return ProjectServices.deleteOne(id)
  }

  handleEditor = (page) =>{
    this.setState({render: page})
  }

  toggleUpdatesReceived=()=>{
    this.setState({updatesReceived:true})
  }

  
  render() {
    
    const projectTools = {
      project:this.state.project, 
      updateGeneral: this.updateGeneral, 
      deleteProject: this.delete,
      sent: this.toggleUpdatesReceived,
      id: this.props.match.params.id,
      };

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
      default : 
      
      break;
    }
      
    return (
    <div className="project-editor">
        {/* <ProjectNav handleEditor={this.handleEditor}/> */}
        {
          this.state.project ? 
        section 
        : 
        <h2>No Project to display</h2> 
        }
    </div>
    
    );
  }
};

export default ProjectProvider;