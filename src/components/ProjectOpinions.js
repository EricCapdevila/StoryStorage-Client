import ProjectServices from "./projects-service";
import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class ProjectOpinions extends Component{
  constructor(props){
    super(props)
    this.state = {
      opinions:[],
      newOpinion:{
        username:'',
        comment:'',
        rating:''
      }
    }
  }

  componentDidMount() {
    this.setState({opinions: this.props.project.opinions });
  }

  // handleRate=(e)=>{
  //   console.log('the e.targetrate', e.target)
  //   const { value} = e.target;
  //   this.setState({newOpinion:{username: this.props.user.username, rate:value, comment:this.state.newOpinion.comment}})
  //   console.log(this.state.newOpinion)
  // }
  // handleComment=(e)=>{
  //   console.log('the e.target commnet', e.target)
  //   const { value} = e.target;
  //   this.setState({newOpinion:{username: this.props.user.username, comment:value, rate:this.state.newOpinion.comment}})
  //   console.log(this.state.newOpinion)
  // }

  handleChange=(e)=>{

    let valueHolder = {...this.state.newOpinion,username: this.props.user.username};
    const { value, name} = e.target;
    valueHolder[name]=value
     console.log('currentstate',this.state.opinions)

    this.setState({
      newOpinion:{...valueHolder}
    })
  }

  updateArray = () => {
    let updatedArray = this.state.opinions.concat(this.state.newOpinion);
     console.log('opinions updated', this.state.opinions, 'newopinion', this.state.newOpinion)
    this.setState({opinions:updatedArray})
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
     console.log('updatedarray',this.state.opinions, 'the new one',this.state.newOpinion)
    ProjectServices.updateOne(this.props.project._id, this.state)
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
        {
          (this.state.opinions.map((opinion)=>{
            return(
            <div className="oneOpinion" key={opinion._id}>
              <p className="user">{opinion.username}</p>
              <p className="comment">{opinion.comment}</p>
              <p className="rating">{opinion.rating}</p>
            </div>
            )
          }))
        }
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>Rate</label>
            <input type="number" name="rating" 
            onChange= {(e) => this.handleChange(e)}
            value={this.state.newOpinion.rate}/>

            <label>Comment</label>
            <input type="text" name="comment" 
            onChange= {(e) => this.handleChange(e)}
            value={this.state.newOpinion.comment}/>
            
            <button action='submit' onClick={this.updateArray}>Send</button>
          </form>
        </div>
      </section>

    )

  }

}

export default withAuth(ProjectOpinions);