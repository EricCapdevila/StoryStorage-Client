import axios from "axios";

class ProjectsManager {
  constructor() {
    this.projects = axios.create({
      // baseURL: "http://localhost:5000",
      baseURL:process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  getAll(){
    return this.projects.get("/projects/").then(response => response.data);
  }

  getOne(id){
   return this.projects.get(`/projects/${id}`).then( project => project.data);
  }

  deleteOne(id){
    return this.projects.delete(`/projects/${id}`)
    .then( (res) => {

      console.log('delete response',res)

      return res
      
    } )
    .catch( (err) => console.log(err));
  }

  updateOne(id, updates){
    const {
    title, genre,
    summary, chapters, 
    characters, locations, 
    timeline, misc, author, 
    opinions, isPrivate  } = updates

    return this.projects.put(`/projects/${id}`,
    {
      title, genre,
      summary, chapters, 
      characters, locations, 
      timeline, misc, author, 
      opinions, isPrivate  })
    .then( (response) => {
      return response.data
    })
     .catch( (err) => console.log(err) )
  }
 

  addOne(newProject){
    const {title, genre, summary, isPrivate} = newProject;
    return this.projects
      .post("/projects/", {title, genre, summary, isPrivate})
      // .then( () => this.props.history.push('/projects') );
  }
}

const ProjectServices = new ProjectsManager();


  export default ProjectServices;