
import React, { Component } from "react";
import ProjectServices from "../projects-service";

class Opinions extends Component {
  constructor(){
    super()
    this.state = {
      opinions:[]
    }

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