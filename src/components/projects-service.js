import axios from "axios";

class ProjectsManager {
  constructor() {
    this.projects = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  getAll(){
    return this.projects.get("/").then(response => response.data);
  }

  getOne(id){
    axios.get(`/projects/${id}`)
      .then( (project) =>{
        const theProject = project.data;
        return theProject;
      })
      .catch((err) => console.log(err));
  }

  deleteOne(id){
    axios.delete(`/projects/${id}`)
    .then( () => this.props.history.push('/projects') )
    .catch( (err) => console.log(err));
  }

  updateOne(id, updates){
    const {
    title, genre,
    summary, chapters, 
    characters, locations, 
    timeline, misc, author, 
    opinions, isPrivate  } = updates

    axios.put(`/projects/${id}`,
    {
      title, genre,
      summary, chapters, 
      characters, locations, 
      timeline, misc, author, 
      opinions, isPrivate  })
    .then( () => {
      this.getOne(id)
      // this.props.getTheProject();						//  <---  hmmm
      // this.props.history.push('/projects');    
      // after submitting the form, redirect to '/projects'
    })
     .catch( (err) => console.log(err) )
  }

  addOne(newProject){
    const {title, genre, summary} = newProject;
    return this.projects
      .post("/", {title, genre, summary})
      .then( () => this.props.history.push('/projects') );
  }
}

  const ProjectServices = new ProjectsManager();

  export default ProjectServices;