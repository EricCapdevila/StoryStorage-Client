import React, { Component } from "react";


class Searchbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      myProjects: [], 
      showingForm: false,
    }
  }
    
  handleChange=(e)=>{
    let text = e.target.value
    this.props.filtering(text)
    }

  handleChangeGenre=(e)=>{
    let text = e.target.value
    this.props.byGenre(text)
    }
    

  render() {
    return (
     <div className='search-container'>
      <input   
      placeholder='Search Title'
      id="searchbar" onChange={this.handleChange}></input>
      <label>Genre:</label>
            <select 
            name="genre" 
            value={this.state.genre} 
            onChange={this.handleChangeGenre}>
              <option value=''> Genre: None</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Romance">Romance</option>
              <option value="Historical">Historical</option>
              <option value="Horror">Horror</option>
              <option value="Crime">Crime</option>
              <option value="Other">Other</option>
            </select>
     </div>
    );
  }
}



export default Searchbar;