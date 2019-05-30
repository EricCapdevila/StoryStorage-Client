// import React, { Component } from "react";
// import ProjectServices from "../projects-service";

// class Chapters extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//     chapters:[],
//     chapter:{
//       title:'',
//       plot:'',
//       number:''    }
//     }
//   }
  

//   componentDidMount(){
//     let title = document.querySelector('#title')
//     title.addEventListener('input', (event) => {
//       this.setState({title:title.innerText})
//     })
    
//     let plot = document.querySelector('#summary')
//     summary.addEventListener('input', (event) => {
//       this.setState({summary:summary.innerText})
//     })

//     let number = document.querySelector('#summary')
//     summary.addEventListener('input', (event) => {
//       this.setState({summary:summary.innerText})
//     })

//     ProjectServices.getOne(this.props.id)
//       .then((project) => {
//         this.setState({chapters: project.chapters})
//       }) 
//     }

//   handleDeletion = (id) =>{
        
//     let index = this.state.chapters.findIndex((chapter)=>{
//       return chapter._id===id}
//       )
//     let currentChapters= this.state.chapters;
    
//     currentChapters.splice(index,1)
//     ProjectServices.updateOne(this.props.id, {chapters: currentChapters})
//     .then((project)=> {
//       this.setState({chapters:project.chapters})})
//   }
//   handleChange = () =>{

//   }
//   submitChange = () => {

//   }
//   moveBelow = () => {

//   }

//   moveAbove = () => {

//   }

//   render() {
//     return (
//       <div className="chapters">
//         {
//           this.state.chapters.length===0?
//           <p>no chapters yet</p>

//           :
//           <div className="opinions">
//             {
//               (this.state.chapters.map((chapter) => {
//                  return(
//                   <div className="opinions">
//                     <button
//                     className="plus-button"
//                     onClick={()=>this.addAbove(chapter._id)}>+</button>
//                     <h1 id='title' contentEditable >{chapter.title}</h1>
//                     <p id='number' contentEditable onChange={}>{chapter.number}</p>
//                     <p id='summary'contentEditable className='editable-long-text'>{chapter.plot}</p>
//                     <button 
//                     onClick={(e) => this.submitChange(chapter._id)}
//                     className='save'>save</button>
//                     <button 
//                     onClick={(e) => this.handleDeletion(chapter._id)}
//                     className='delete'>delete</button>
//                     <button
//                     className="plus-button"
//                     onClick={()=>this.addBelow(chapter._id)}>+</button>
//                   </div>
//                 )
//               }))
//             }
//             <div className="opinions">
//                     <button
//                     className="plus-button"
                   
//                     <h1 id='title' contentEditable >ADD TITLE</h1>
//                     <p id='number' contentEditable>ADD NUMBER</p>
//                     <p id='summary'contentEditable className='editable-long-text'>ADD SUMMARY</p>
//                     <button 
//                     onClick={(e) => this.submitChange(chapter._id)}
//                     className='save'>save</button>
//                     <button 
//                     onClick={(e) => this.handleDeletion(chapter._id)}
//                     className='delete'>delete</button>
//                     <button
//                     className="plus-button"
//                     onClick={()=>this.addBelow(chapter._id)}>+</button>
//                   </div>
            
//           </div>
//         }
//      </div>
//     );
//   }
// }



// export default Chapters