
import React, { Component } from "react";
import ProjectServices from "../projects-service";

class Opinions extends Component {
  constructor(){
    super()
    this.state = {
      opinions:[]
    }

  }

  handleChange = (id) =>{
        
    let index = this.state.opinions.findIndex((comment)=>{
      return comment._id===id}
      )
    let copiedArray= this.state.opinions;
    
    copiedArray.splice(index,1)
    ProjectServices.updateOne(this.props.id, {opinions: copiedArray})
    .then((project)=> {
      this.setState({opinions:project.opinions})})
    }

  componentDidMount(){
    ProjectServices.getOne(this.props.id)
      .then((project) => {
        this.setState({opinions: project.opinions})
      }) 
    }
 
  render() {
    return (
     <div className="general-opinions">
        {
          this.state.opinions.length===0?
         
          <div className="no-opinions"><p>No one rated your project :( </p></div>
          :
          <div className="opinions">
            {
              (this.state.opinions.map((opinion) => {
                 return(
                  <div className="oneOpinion">
                    <p className="user">{opinion.user}</p>
                    <p className="comment">{opinion.comment}</p>
                    <p className="rating">{opinion.rating}</p>
                    <button 
                    className="delete"
                    onClick={()=>this.handleChange(opinion._id)}>x</button>
                  </div>
                )
              }))
            }
          </div>
        }
     </div>
    );
  }
}



export default Opinions