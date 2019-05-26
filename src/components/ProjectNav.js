
import React from "react";

const ProjectNav = (props) => {
    
  const renderCharacters=()=>props.handleEditor('characters')
  const renderGeneral=()=>props.handleEditor('general')
  const renderChapters=()=>props.handleEditor('chapters')
  const renderOpinions=()=>props.handleEditor('opinions')
  const renderLocations=()=>props.handleEditor('locations')
  const renderTimeline=()=>props.handleEditor('timeline')
 
    return (
     <div>
      <h1>THIS IS THE NAVBAR</h1>
      <ul>
        <li><button onClick={renderGeneral}>General</button></li>
        <li><button onClick={renderChapters}>Chapters</button></li>
        <li><button onClick={renderCharacters}>Characters</button></li>
        <li><button onClick={renderLocations}>Locations</button></li>
        <li><button onClick={renderTimeline}>Timeline</button></li>
        <li><button onClick={renderOpinions}>Opinions</button></li>
        <li></li>
      </ul>
     </div>
    );
  }


export default ProjectNav;