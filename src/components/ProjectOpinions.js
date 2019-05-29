import ProjectServices from "./projects-service";
import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class ProjectOpinions extends Component{
  constructor(props){
    super(props)
    this.state = {
      opinions:[],
      newOpinion:{
        user:'',
        comment:'',
        rating:''
      },
      emptyFields:{
        user:'',
        comment:'',
        rating: ''
      }
    }
  }

  componentDidMount() {
    this.setState({opinions: this.props.project.opinions });
  }


  checkAnonymus=()=>{
    if(this.props.isLogedin){
     return this.props.user.username  
    }else{
      return 'Anonymus' 
    }
  }

  handleChange=(e)=>{

    let valueHolder = {...this.state.newOpinion, user: this.checkAnonymus()};
    const { value, name} = e.target;
    valueHolder[name]=value
    //  console.log('currentstate',this.state.opinions)

    this.setState({
      newOpinion:{...valueHolder}
    })
  }

  updateArray = () => {
    let updatedArray = this.state.opinions.concat(this.state.newOpinion);
    this.setState({opinions:updatedArray})
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    ProjectServices.updateOne(this.props.project._id, this.state)
    this.setState({newOpinion:this.state.emptyFields})
  }

  render() {

    const {title, summary, genre, author} = this.props.project
    return (
      <section className="project-comment-card">
        <div className="project-description">
          <p>{genre}</p>
          <h3>{title}</h3>
          <p>by {author.username}</p>
          <p>{summary}</p>
        </div>
        <div className="project-comments">
          <div className="comments-only">
        {
            (this.state.opinions.map((opinion)=>{
              return(
              <div className="oneOpinion" key={opinion._id}>
                <p className="user">{opinion.user}</p>
                <p className="comment">{opinion.comment}</p>
                <p className="rating">{opinion.rating}</p>
              </div>
              )
            }))
          }
          </div>
          <div>

            <form className="add-comment" onSubmit={this.handleFormSubmit}>
              <label>Rate</label>
              <input type="number" name="rating" 
              max="10" min="0" 
              onChange= {(e) => this.handleChange(e)}
              value={this.state.newOpinion.rate}/>

              <label>Comment</label>
              <input type="text" name="comment" 
              onChange= {(e) => this.handleChange(e)}
              value={this.state.newOpinion.comment}/>
              
              <button action='submit' onClick={this.updateArray}>√</button>
            </form>
          </div>
        </div>
      </section>

    )

  }

}

export default withAuth(ProjectOpinions);